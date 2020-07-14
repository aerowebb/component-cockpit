import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
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
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { SearchService } from '../../../maintenance/airworthiness-control/search/search.service';
import { MaterialFormService } from '../../material/form/material-form.service';

import { StockConsultSearchService } from './stock-consult-search.service';

@Component({
  selector: 'aw-stock-consult-search',
  templateUrl: './stock-consult-search.component.html',
  styleUrls: ['./stock-consult-search.component.scss']
})
export class StockConsultSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly receipt = 'receipt';
  public readonly issue = 'issue';
  public searchObject: StockConsultInput;
  public criteriaToSave: StockConsultInput;
  public criteriaName: string | undefined;

  public sites: SelectItem[];
  public warehouses: SelectItem[];
  public warehouseTypes: SelectItem[];
  public storageBins: SelectItem[];
  public stockTypes: SelectItem[];
  public valuationGroups: SelectItem[];
  public issueplannedBefores: SelectItem[];

  public showQuickSearchMaterialPopup: boolean;

  public bidtSiteDTOs: BidtSiteDTO[];
  public bidtWarehouseDTOs: BidtWarehouseDTO[];
  public bidtStorageBinDTOs: BidtStorageBinDTO[];
  public showWhTypeDropDown: boolean;
  public isDisabled: boolean;
  public whTypeName: string | undefined;

  public whTypeList: LabelValue<string>[];

  public isLoadingStructureTable: boolean;

  public stockListTableCols: TableColumn[];
  public remainingTableCols: TableColumn[];
  public remainingTableCols2: TableColumn[];
  public stockInformaionDtos: StockInformaionDto[];

  public hasBeenCalculated: boolean;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.STOCK_CONSULT_SEARCH_CRITERIA_ID;

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
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_CONSULT_SEARCH;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.initData();
    this.initTables();
    this.init();

    if (!!this.componentData.objectId) {
      this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
      if (!!this.serializationService.deserialize(this.componentData.objectId).pnCode) {
        this.searchObject.pn = this.serializationService.deserialize(this.componentData.objectId).pnCode;
      }
      this.calculate();
    }
  }

  // init screen
  public init(): void {
    this.getSiteList();
    this.getWareHouseList();
    this.getValuationList();
    this.getWarehouseTypesList();
    this.getStockTypeList();
    this.getStorageBinList();
    this.getIssuePeriodDropDown();
  }

  // init data
  private initData(): void {
    this.stockInformaionDtos = [];
    this.remainingTableCols = [];
    this.remainingTableCols2 = [];
    this.hasBeenCalculated = false;
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
    this.bidtSiteDTOs = [];
    this.bidtWarehouseDTOs = [];
    this.bidtStorageBinDTOs = [];
    this.showWhTypeDropDown = true;
    this.isDisabled = true;
    this.whTypeName = undefined;
    this.whTypeList = [];
    this.showQuickSearchMaterialPopup = false;
  }

  // init tables
  private initTables(): void {
    this.stockListTableCols = [
      { field: 'pn', alignment: 'left', width: '13%' },
      { field: 'stockSn', alignment: 'left', width: '8%' },
      { field: 'stockReceiptQuantity', alignment: 'left', width: '5%' },
      { field: 'designation', alignment: 'left', width: '16%' },
      { field: 'siteText', alignment: 'left', width: '16%' },
      { field: 'warehouseText', alignment: 'left', width: '15%' },
      { field: 'storageBinText', alignment: 'left', width: '9%' },
      { field: 'stockTypeText', alignment: 'left', width: '10%' },
      { field: 'valuationGroupText', alignment: 'left', width: '8%' }
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

  // get data from server
  public getSiteList(): void {
    this.materialFormService.findAllSites().subscribe((result) => {
      this.bidtSiteDTOs = result;
      this.sites = ListUtils.orEmpty(result).map((site: BidtSiteDTO) => {
        return {
          label: `${site.siteCode}-${site.siteName}`,
          value: site.siteId
        };
      });
    });
  }

  // get data from server
  public getWareHouseList(): void {
    this.searchService.findAllWarehouse().subscribe((results) => {
      this.bidtWarehouseDTOs = results;
      this.warehouses = ListUtils.orEmpty(results)
        .filter((warehouse) => !!warehouse.whCode)
        .map((warehouse) => {
          return {
            label: StringUtils.isNullOrEmpty(warehouse.whName)
              ? warehouse.whCode
              : `${warehouse.whCode} - ${warehouse.whName}`,
            value: warehouse.wareHouseId
          };
        });
    });
  }

  // get data from server
  public getStorageBinList(): void {
    this.stockConsultSearchService.findAllStorageBinsList().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      if (!!result && result.length > 0) {
        result.forEach((res: BidtStorageBinDTO) => {
          if (!!res && !!res.bidtStorageBinTypeId) {
            labelValue.push({
              label: `${res.sbNumber} ${res.sbDescription ? ` - ${res.sbDescription}` : ''}`,
              value: res.bidtStorageBinTypeId
            });
          }
        });
      }
      this.storageBins = labelValue;
    });
  }

  public setSelectedMaterial(event: BirePnDTO) {
    this.showQuickSearchMaterialPopup = false;
    this.searchObject.pn = event.pnCode;
  }

  // opens material popup in search criteria
  public quickSearchMaterial(): void {
    if (this.hasBeenCalculated) {
      return;
    }
    this.showQuickSearchMaterialPopup = true;
  }

  // get data from server
  public getStockTypeList(): void {
    this.stockConsultSearchService.findAllStockTypeList().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      result.forEach((res: BidtStockTypeDTO) => {
        if (!!res && !!res.id) {
          labelValue.push({
            label: `${res.stockTypeCode} - ${res.stockTypeDescription}`,
            value: res.id
          });
        }
      });
      this.stockTypes = labelValue;
    });
  }

  // get data from server
  public getValuationList(): void {
    this.materialFormService.findAllValuation().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      result.forEach((res: BidtValuationGroupDTO) => {
        if (!!res && !!res.id) {
          labelValue.push({
            label: `${res.valuationGroupCode}-${res.valuationGroupName}`,
            value: res.id
          });
        }
      });
      this.valuationGroups = labelValue;
    });
  }

  // load warehouse by site Id
  public loadWarehouseBySiteId(): void {
    if (!!this.searchObject.siteId) {
      const siteId = this.searchObject.siteId.toString();
      this.materialFormService.findWarehouseBySite(siteId).subscribe((result) => {
        const labelValue: LabelValue<number>[] = [];
        if (!!result && result.length > 0) {
          result.forEach((res: BidtWarehouseDTO) => {
            if (!!res && !!res.wareHouseId) {
              labelValue.push({
                label: `${res.whCode}-${res.whName}`,
                value: res.wareHouseId
              });
            }
          });
          this.warehouses = labelValue;
          if (labelValue.length === 1) {
            this.searchObject.warehouseId = labelValue[0].value;
            this.findStorageBinBYWarehouseId();
          }
        } else {
          this.warehouses = [];
          this.searchObject.warehouseId = undefined;
        }
      });
    } else if (this.searchObject.siteId === null) {
      this.getWareHouseList();
      this.searchObject.warehouseId = undefined;
    }
    this.showWhTypeDropDown = true;
  }

  // get data from server
  public getWarehouseTypesList() {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_TYPE_MAP).subscribe((results) => {
      this.warehouseTypes = results;
      this.whTypeList = results;
    });
  }

  // get data from server
  public getIssuePeriodDropDown() {
    this.stockConsultSearchService.getIssuePeriodDropDown().subscribe((results) => {
      this.issueplannedBefores = results;
    });
  }

  public findStorageBinBYWarehouseId() {
    if (!!this.searchObject.warehouseId) {
      this.stockConsultSearchService.findBinStorageByWarehouseId(this.searchObject.warehouseId).subscribe((result) => {
        const labelValue: LabelValue<number>[] = [];
        if (!!result && result.list && result.list.length > 0) {
          result.list.forEach((res: BidtStorageBinDTO) => {
            if (!!res && !!res.bidtStorageBinTypeId) {
              labelValue.push({
                label: `${res.sbNumber} ${res.sbDescription ? ` - ${res.sbDescription}` : ''}`,
                value: res.bidtStorageBinTypeId
              });
            }
          });
        }
        this.storageBins = labelValue;
      });
      const site: BidtWarehouseDTO[] = this.bidtWarehouseDTOs.filter(
        (warehouseId) => warehouseId.wareHouseId === this.searchObject.warehouseId
      );
      if (site && site.length > 0) {
        this.searchObject.siteId = site[0].bidtSiteId;
      }
      const whType: BidtWarehouseDTO[] = this.bidtWarehouseDTOs.filter(
        (warehouseId) => warehouseId.wareHouseId === this.searchObject.warehouseId
      );
      if (whType && whType.length > 0 && whType[0].whType) {
        this.searchObject.warehouseTypeId = whType[0].whType;
        this.whTypeName = this.whTypeList.filter((wh) => {
          return wh.value === this.searchObject.warehouseTypeId;
        })[0].label;
      } else {
        this.searchObject.warehouseTypeId = undefined;
        this.whTypeName = undefined;
      }
      this.showWhTypeDropDown = false;
    } else {
      this.getStorageBinList();
      this.getWarehouseTypesList();
      this.searchObject.storageBinId = undefined;
      // this.searchObject.siteId = undefined;
      this.searchObject.warehouseTypeId = undefined;
      this.showWhTypeDropDown = true;
    }
  }

  // calculates stocks on the basis of search criteria
  public calculate(): void {
    // Check for date. No check for method required as some value is always selected in that dropdown.
    if (!!this.searchObject.siteId || !!this.searchObject.pn) {
      this.hasBeenCalculated = true;
      this.getStockInformationList();
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('siteandmatrialvalidation'));
    }
  }

  // get data from server
  public getStockInformationList() {
    this.isLoadingStructureTable = true;
    this.stockInformaionDtos = [];
    this.stockConsultSearchService.getStockInformationList(this.searchObject).subscribe((result) => {
      this.isLoadingStructureTable = false;
      if (!!result && result.length > 0) {
        result.forEach((res: StockInformaionDto) => {
          if (res.stockSn === null || res.stockSn === undefined) {
            res.stockSn = res.stockBatchNumber;
          }
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

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {};
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: StockConsultInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: StockConsultInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  public openMaterialScreen(code: string): void {
    if (code) {
      this.openMaterial(code, ComponentOpenMode.Read);
    }
  }

  public openSerialNumber(stockInfo: StockInformaionDto): void {
    this.stockConsultSearchService
      .getFirstEquipmentByPnAndSn(stockInfo.pn, stockInfo.stockSn)
      .subscribe((equipment: BidoEquipmentDTO) => {
        const labelKey = 'transaction.EquipmentFormComponent';
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: 'EquipmentFormComponent',
          openMode: ComponentOpenMode.Read
        };
        if (!!equipment) {
          const equipmentId: BidoEquipmentDTOId = {
            equipmentCode: equipment.equipmentCode
          };
          data.objectId = this.serializationService.serialize(equipmentId);
        }

        this.tabService.open(this.tabService.create(data, labelKey, true));
      });
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

  public onClickNewCalculation(): void {
    this.hasBeenCalculated = false;
  }

  public toggleRowDetailsVisibility(row: StockInformaionDto): void {
    row._expand = !row._expand;
  }
}
