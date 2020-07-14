import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { InventoryByWarehouseTableOutputDTO } from '../../../../shared/types/api-output-types/inventory-by-warehouse/inventory-by-warehouse-table-output-dto.interface';
import { BsdeStoreDTOId } from '../../../../shared/types/api-types/bsde-store-dto-id.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { InventoryByWareHouseSearchService } from './inventory-by-warehouse-search.service';

interface InventoryWarehouseRow {
  storeCode?: string;
  storeName?: string;
  stockValue?: string;
}

@Component({
  selector: 'aw-inventory-by-warehouse-search',
  templateUrl: './inventory-by-warehouse-search.component.html',
})
export class InventoryByWarehouseSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly WAREHOUSE_TABLE_EXPORT_NAME: string = 'WareHouse-list';

  public resultsTableCols: TableColumn[];
  public resultsTable: InventoryWarehouseRow[];
  public selectedWarehouse : InventoryWarehouseRow [];
  public isLoading : boolean;
  public resultDisplayedRowNb: number | undefined;


  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly inventoryByWareHouseSearchService : InventoryByWareHouseSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.resultsTableCols = [
      { field: 'storeCode', alignment: 'left' },
      { field: 'storeName', alignment: 'left' },
      { field: 'stockValue', alignment: 'left' },
    ];
   }
  public ngOnInit() {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.getAllWareHouseList();
    this.resultsTable = [];
    this.selectedWarehouse = [];
    this.isLoading = false;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_INVENTORY_WAREHOUSE_SEARCH;
  }

  public refresh() {
    this.getAllWareHouseList();
    this.selectedWarehouse = [];
  }

  public getAllWareHouseList() {
    this.isLoading = true;
    this.inventoryByWareHouseSearchService.getWarehouseList().subscribe((results) => {
      this.isLoading = false;
      if (results) {
        const tableList: InventoryWarehouseRow[] = [];
        results.forEach((obj) => {
          tableList.push(this.transformIntoRow(obj));
        });
        this.resultsTable = tableList;
      }
    });

  }
  private transformIntoRow(obj: InventoryByWarehouseTableOutputDTO): InventoryWarehouseRow {
    return {
      storeCode: obj.bsdeStoreDTO.storeCode,
      storeName: obj.bsdeStoreDTO.storeName,
      stockValue: obj.stockValue
    };
  }
  public openNewWareHouse(): void {
    this.openWarehouse(undefined, ComponentOpenMode.Create);
  }

  public openSelectedWarehouse(): void {
    this.selectedWarehouse.forEach((warehouse) => {
      if (!!warehouse) {
        if (StringUtils.isNullOrEmpty(warehouse.storeCode)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingstoreID'));
        } else {
          this.openWarehouse(warehouse.storeCode, ComponentOpenMode.Read);
        }
      }
    });
  }


  private openWarehouse(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_INVENTORY_WAREHOUSE_FORM,
      openMode
    };
    if (!!objectId) {
      const warehouseFormId: BsdeStoreDTOId = {
        storeCode: objectId
      };
      data.objectId = this.serializationService.serialize(warehouseFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteSelectedWarehouse(): void {
    const confirmMessageKey =
      this.selectedWarehouse.length > 1
        ? 'confirmDeleteSelectedWarehouses'
        : 'confirmDeleteSelectedWarehouse';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const removeWareHouseList: BsdeStoreDTOId[] = [];
        this.selectedWarehouse.forEach((warehouse) => {
          if (!!warehouse && !!warehouse.storeCode) {
            const bsdeId: BsdeStoreDTOId = {
              storeCode: warehouse.storeCode
            };
            removeWareHouseList.push(bsdeId);
            this.inventoryByWareHouseSearchService.removeWareHouseStore(removeWareHouseList).subscribe(() => {
              this.getAllWareHouseList();
              this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteWareHouse'));
            });
          }
        });

        this.selectedWarehouse = [];
      }
    });
  }

  public exportTable(): void {
    this.exportService.toExcel(
      this.resultsTable,
      InventoryByWarehouseSearchComponent.WAREHOUSE_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  // tslint:disable-next-line:no-any
  public onResultsFilter(event: any): void {
    this.resultDisplayedRowNb =
      this.resultsTable && event.filteredValue.length && this.resultsTable.length === event.filteredValue.length
        ? undefined
        : event.filteredValue.length;
  }

}
