import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { WarehouseListDTO } from '../../../../shared/types/api-output-types/bidt-warehouse/warehouse-list-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

import { WorkshopSearchService } from './workshop-search.service';

interface WareHouseDTO {
  whCode?: string;
  whName?: string;
  whSite?: string;
  whType?: string;
}

interface WarehouseRow extends WareHouseDTO {
  warehouseDTO?: BidtWarehouseDTO;
}

@Component({
  selector: 'aw-workshop-search',
  styleUrls: ['./workshop-search.component.scss'],
  templateUrl: './workshop-search.component.html'
})
export class WorkshopSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: BidtWarehouseDTO;
  public warehouseTableDataSource: TableDataSource<WarehouseRow>;
  public filteredRowsNb: number;
  public companyId: number;
  public globalFilterTxt: string;
  private readonly resultsTableExportName: string;
  public typeMap: Map<string, string>;
  private wareHouseExportDTO: WareHouseDTO[];
  private types: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly warehouseSearchService: WorkshopSearchService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'warehouse-list';

    this.typeMap = new Map<string, string>();
    this.searchObject = {};
    this.filteredRowsNb = 0;
    this.initWarehouseTableDataSource();
    this.wareHouseExportDTO = [];
  }

  public getComponentName(): string {
    return 'WorkshopSearchComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.bindDropdown();

    this.displayComponentContext('global.search', true);
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_TYPE_MAP).subscribe((types) => {
      types.forEach((element) => {
        this.typeMap.set(element.value, element.label);
      });
      this.search();
    });
  }

  private bindDropdown() {
    this.propertiesService.getValue(GenericPropertyConstants.WORKSHOP_TYPE_MAP).subscribe((results) => {
      this.types = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private initWarehouseTableDataSource(): void {
    this.warehouseTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'whCode',
          translateKey: this.getTranslateKey('whCode')
        },
        {
          field: 'whName',
          translateKey: this.getTranslateKey('whName')
        },
        {
          field: 'whType',
          translateKey: this.getTranslateKey('whType')
        },
        {
          field: 'whSite',
          translateKey: this.getTranslateKey('whSite')
        }
      ],
      data: []
    });
  }

  public reloadWorkshop(): void {
    this.initWarehouseTableDataSource();
    this.ngOnInit();
  }

  public search(): void {
    this.warehouseSearchService.findByCriteriaWorkshop().subscribe((result) => {
      this.setResultsTable(result);
    });
  }

  private setResultsTable(result: WarehouseListDTO[]): void {
    if (result) {
      const warehouses: WarehouseRow[] = [];
      result.forEach((element) => {
        const rowObj: WarehouseRow = {
          warehouseDTO: element.bidtWarehouseDTO,
          whSite: element.siteName,
          whCode: element.bidtWarehouseDTO.whCode,
          whName: element.bidtWarehouseDTO.whName,
          whType: !!element.bidtWarehouseDTO.whType
            ? this.types.filter((type) => type.value === element.bidtWarehouseDTO.whType)[0] &&
              this.types.filter((type) => type.value === element.bidtWarehouseDTO.whType)[0].label
            : ''
        };
        warehouses.push(rowObj);
      });
      this.warehouseTableDataSource.setData(warehouses);
      this.warehouseTableDataSource.update();
      this.filteredRowsNb = this.warehouseTableDataSource.dataCount;
    }

    this.warehouseTableDataSource.dataSelection = [];
  }

  public exportTable(): void {
    this.warehouseTableDataSource.dataSrc.forEach((row) => {
      if (!!row) {
        const wareHouseDTO: WareHouseDTO = {
          whCode: row.whCode,
          whName: row.whName,
          whType: row.whType,
          whSite: row.whSite
        };

        this.wareHouseExportDTO = [...this.wareHouseExportDTO, wareHouseDTO];
      }
    });
    if (!!this.componentData) {
      this.exportService.toExcel(this.wareHouseExportDTO, this.resultsTableExportName, this.componentData.componentId);
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  public deleteSelectedWarehouses(): void {
    const warehouseIds: number[] = [];
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.warehouseTableDataSource.dataSelection.forEach((warehouse) => {
          if (!!warehouse.warehouseDTO && !!warehouse.warehouseDTO.wareHouseId) {
            warehouseIds.push(warehouse.warehouseDTO.wareHouseId);
          } else {
            super.throwUnboundLocalError('deleteSelectedWarehouses', 'warehouse.warehouseDTO.warehouseId');
          }
        });

        this.warehouseSearchService.deleteWarehouses(warehouseIds).subscribe(
          (result) => {
            this.search();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteWarehouse'));
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteWarehouse'));
          }
        );
        this.warehouseTableDataSource.dataSelection = [];
      }
    });
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  private openWarehouse(object: BidtWarehouseDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.WorkshopFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'WorkshopFormComponent',
      objectId: object && this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openNewWarehouse(): void {
    this.openWarehouse(undefined, ComponentOpenMode.Create);
  }

  public openSelectedWarehouses(): void {
    this.warehouseTableDataSource.dataSelection.forEach((warehouse) => {
      this.openWarehouse(warehouse.warehouseDTO, ComponentOpenMode.Read);
    });
  }

  public resetTableFilter(): void {
    this.globalFilterTxt = '';
  }
}
