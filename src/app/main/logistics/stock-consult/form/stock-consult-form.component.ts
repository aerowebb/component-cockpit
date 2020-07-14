import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { StockConsultInput } from '../../../../shared/types/api-input-types/bidt-stock-consult/stock-consult-input.interface';
import { StockInformaionDto } from '../../../../shared/types/api-output-types/logistics-stock-consult/stock-information-dto-interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockTypeDTO } from '../../../../shared/types/api-types/bidt-stock-type-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtValuationGroupDTO } from '../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { SearchService } from '../../../maintenance/airworthiness-control/search/search.service';
import { MaterialFormService } from '../../material/form/material-form.service';
import { StockConsultSearchService } from '../search/stock-consult-search.service';

@Component({
  selector: 'aw-stock-consult-form',
  templateUrl: './stock-consult-form.component.html',
  styleUrls: ['./stock-consult-form.component.scss']
})
export class StockConsultFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public searchObject: StockConsultInput;

  public remainingTableCols: TableColumn[];
  public remainingTableCols2: TableColumn[];
  // tslint:disable-next-line:no-any
  public remainingTable: any;
  public stockInformaionDtos: StockInformaionDto[];
  public stockListTableCols: TableColumn[];

  public site: string | undefined;
  public warehouse: string | undefined;
  public warehouseType: string | undefined;
  public storageBin: string | undefined;
  public material: string | undefined;
  public stockType: string | undefined;
  public valuationGroup: string | undefined;
  public issuePlannedBefore: string | undefined;

  public selectedStockDto: StockInformaionDto;

  public isLoadingStructureTable: boolean;

  public searchEuipmentByPnAndSn: BidoEquipmentDTO;

  public equipmentDtos: BidoEquipmentDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public materialFormService: MaterialFormService,
    public searchService: SearchService,
    public stockConsultSearchService: StockConsultSearchService,
    public propertiesService: PropertiesService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.init();
  }

  public init(): void {
    this.stockInformaionDtos = [];
    this.remainingTableCols = [];
    this.remainingTableCols2 = [];
    this.remainingTable = [];
    this.searchObject = {
      pn: undefined,
      withItsAlternatives: false,
      siteId: undefined,
      warehouseId: undefined,
      storageBinId: undefined,
      warehouseTypeId: undefined,
      stockTypeId: undefined,
      valuationGroupId: undefined,
      issuePeriod: undefined
    };
    this.setTableCols();
    this.searchEuipmentByPnAndSn = {
      pnCode: undefined,
      sn: undefined
    };
    this.equipmentDtos = [];
  }
  public ngOnInit() {
    super.ngOnInit();
    this.updateOpenMode(this.componentData.openMode);
    if (!!this.componentData.objectId) {
      this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
    }

    this.loadSites();
    this.loadWareHouseList();
    this.loadStorageBinList();
    this.findAllStockTypeList();
    this.findAllValuationList();
    this.getWarehouseTypesList();
    this.getIssuePeriodDropDown();

    this.getStockInformationList();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_CONSULT_FORM;
  }

  private setTableCols(): void {
    this.stockListTableCols = [
      { field: 'pn', alignment: 'left', width: '13%' },
      { field: 'stockSn', alignment: 'left', width: '8%' },
      { field: 'designation', alignment: 'left', width: '18%' },
      { field: 'siteText', alignment: 'left', width: '15%' },
      { field: 'warehouseText', alignment: 'left', width: '18%' },
      { field: 'storageBinText', alignment: 'left', width: '9%' },
      { field: 'stockTypeText', alignment: 'left', width: '10%' },
      { field: 'valuationGroupText', alignment: 'left', width: '9%' }
    ];

    this.remainingTableCols = [
      { field: 'quantityDateStr', alignment: 'left' },
      { field: 'stockReceiptWorkOrderWoCode', alignment: 'left' },
      { field: 'stockReceiptQuantity', alignment: 'left' }
    ];
    this.remainingTableCols2 = [
      { field: 'issueDateStr', alignment: 'left' },
      { field: 'stockIssueWorkOrderWoCode', alignment: 'left' },
      { field: 'stockIssueQuantity', alignment: 'left' }
    ];

    this.isLoadingStructureTable = false;
  }

  public toggleFlightsExpand(row: StockInformaionDto): void {
    this.remainingTable = [];
    const stock = this.stockInformaionDtos.filter((fl) => fl.pn === row.pn);
    this.remainingTable.push(stock[0]);
  }

  public getStockInformationList() {
    this.isLoadingStructureTable = true;
    this.stockConsultSearchService.getStockInformationList(this.searchObject).subscribe((result) => {
      this.isLoadingStructureTable = false;
      if (!!result && result.length > 0) {
        result.forEach((res: StockInformaionDto) => {
          res.stockIssueDtos = [];
          res.stockQuantityDtos = [];
          res.issueDateStr = this.dateService.dateWithHourMinSecToString(res.stockIssueDate);
          res.quantityDateStr = this.dateService.dateWithHourMinSecToString(res.stockReceiptDate);
          res.stockQuantityDtos.push(res);
          res.stockIssueDtos.push(res);
          this.stockInformaionDtos.push(res);
        });
      }
    });
  }

  public loadSites(): void {
    this.materialFormService.findAllSites().subscribe((result) => {
      result.forEach((res: BidtSiteDTO) => {
        if (!!res && !!res.siteId) {
          if (this.searchObject.siteId === res.siteId) {
            this.site = `${res.siteCode}-${res.siteName}`;
          }
        }
      });
    });
  }

  private loadWareHouseList(): void {
    this.searchService.findAllWarehouse().subscribe((results) => {
      results.forEach((res: BidtWarehouseDTO) => {
        if (!!res && !!res.wareHouseId) {
          if (this.searchObject.warehouseId === res.wareHouseId) {
            this.warehouse = `${res.whCode} - ${res.whName}`;
          }
        }
      });
    });
  }

  public loadStorageBinList(): void {
    this.stockConsultSearchService.findAllStorageBinsList().subscribe((result) => {
      if (!!result && result.length > 0) {
        result.forEach((res: BidtStorageBinDTO) => {
          if (!!res && !!res.bidtStorageBinTypeId) {
            if (this.searchObject.storageBinId === res.bidtStorageBinTypeId) {
              this.storageBin = `${res.sbNumber}`;
            }
          }
        });
      }
    });
  }

  // find all stock type list
  public findAllStockTypeList(): void {
    this.stockConsultSearchService.findAllStockTypeList().subscribe((result) => {
      result.forEach((res: BidtStockTypeDTO) => {
        if (!!res && !!res.id) {
          if (this.searchObject.stockTypeId === res.id) {
            this.stockType = `${res.stockTypeCode} - ${res.stockTypeDescription}`;
          }
        }
      });
    });
  }

  // find all valuation group list
  public findAllValuationList(): void {
    this.materialFormService.findAllValuation().subscribe((result) => {
      result.forEach((res: BidtValuationGroupDTO) => {
        if (!!res && !!res.id) {
          if (this.searchObject.valuationGroupId === res.id) {
            this.valuationGroup = `${res.valuationGroupCode}-${res.valuationGroupName}`;
          }
        }
      });
    });
  }

  public getWarehouseTypesList() {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_TYPE_MAP).subscribe((results) => {
      results.forEach((res: LabelValue<String>) => {
        if (!!res && !!res.value) {
          if (this.searchObject.warehouseTypeId === res.value) {
            this.warehouseType = res.label;
          }
        }
      });
    });
  }

  public getIssuePeriodDropDown() {
    this.stockConsultSearchService.getIssuePeriodDropDown().subscribe((results) => {
      results.forEach((res: LabelValue<String>) => {
        if (!!res && !!res.value) {
          if (this.searchObject.issuePeriod === res.value) {
            this.issuePlannedBefore = res.label;
          }
        }
      });
    });
  }

  public newCalculation(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_CONSULT_SEARCH,
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public toggleRowDetailsVisibility(row: StockInformaionDto): void {
    // row.expand = !row.expand;
  }

  public openRecieptDocument(row: StockInformaionDto): void {
    // row.expand = !row.expand;
  }

  public openIssueDocument(row: StockInformaionDto): void {
    // row.expand = !row.expand;
  }

  public openMaterialScreen(code: string): void {
    if (code) {
      this.openMaterial(code, ComponentOpenMode.Read);
    }
  }

  public openMaterial(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode
    };
    if (!!objectId) {
      const materialFormId: BirePnDTO = {
        pnCode: objectId
      };
      data.objectId = this.serializationService.serialize(materialFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openSerailNumber(selectedStockDto: StockInformaionDto): void {
    this.searchEuipmentByPnAndSn.pnCode = selectedStockDto.pn;
    this.searchEuipmentByPnAndSn.sn = selectedStockDto.stockSn;
    this.stockConsultSearchService.getEuipmentBYpnAndSN(this.searchEuipmentByPnAndSn).subscribe((results) => {
      this.equipmentDtos = results;
      if (!!this.equipmentDtos && this.equipmentDtos.length === 1) {
        this.openEquipment(this.equipmentDtos[0], ComponentOpenMode.Read);
      } else {
        this.messageService.showWarningMessage(
          `Asset not found ! : ${this.searchEuipmentByPnAndSn.pnCode}/${this.searchEuipmentByPnAndSn.sn}`
        );
      }
    });
  }

  public openEquipment(objectId: BidoEquipmentDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId.equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
