import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { AirworthinessControlFormComponentInput } from '../../../../main/maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllAssetForAirworthinessControlInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-asset-for-airworthiness-control-input.interface';
import { FindAllAssetForAirworthinessControlOutput } from '../../../../shared/types/api-output-types/product-structure-management/find-all-asset-for-airworthiness-control-output.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { AssetAtDateSearchService } from './asset-at-date-search.service';

enum SearchAsset {
  All = 1,
  Aircraft,
  Equipment,
  Engine
}

interface CriteriaToSave {
  searchObject: FindAllAssetForAirworthinessControlInput;
  selectedSearchAsset: SearchAsset;
}

@Component({
  selector: 'aw-asset-at-date-search',
  templateUrl: './asset-at-date-search.component.html',
  styleUrls: ['./asset-at-date-search.component.scss']
})
export class AssetAtDateSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentName: string;
  public readonly itemFamilyCodeAircraft: string;
  public readonly itemFamilyCodeEquipment: string;
  public readonly itemFamilyCodeEngine: string;
  public readonly searchAsset: typeof SearchAsset;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public businessPartnerList: SelectItem[];
  public familyVariantList: SelectItem[];
  public fleetList: SelectItem[];
  public functionList: SelectItem[];
  public locationList: SelectItem[];
  public operationalStatusList: SelectItem[];
  public resultTableDataSource: TableDataSource<FindAllAssetForAirworthinessControlOutput>;
  public resultTableLoading: boolean;
  public searchAssetList: SelectItem[];
  public searchCategoryList: SelectItem[];
  public searchObject: FindAllAssetForAirworthinessControlInput;
  public selectedBusinessPartner: string | undefined;
  public selectedSearchAsset: SearchAsset;
  public showAdvancedCriteria: boolean;
  public wareHouseList: SelectItem[];

  public showOperatorDialog: boolean;
  public showOwnerDialog: boolean;

  public readonly ASSETATDATE_SEARCH_CRITERIA_ID: string = AppConstants.ASSETATDATE_SEARCH_CRITERIA_ID;
  public criteriaToSave: CriteriaToSave;
  public criteriaName: string | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public searchService: AssetAtDateSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.searchAsset = SearchAsset;

    this.init();

    this.setSearchAssetList();

    this.loadBusinessPartnerList();
    this.loadFamilyVariantList();
    this.loadFleetList();
    this.loadFunctionList();
    this.loadLocationList();
    this.loadOperationalStatusList();
    this.loadWareHouseList();
  }

  public openSelection(): void {
    let warehouse: string | undefined;
    if (this.searchObject.warehouseId) {
      const selectedWarehouse = this.wareHouseList.find(
        (wareHouse) => wareHouse.value === this.searchObject.warehouseId
      );
      if (selectedWarehouse) {
        warehouse = selectedWarehouse.label;
      }
    }

    const componentId: string = ComponentConstants.MAI_ASSET_REVIEW_FORM;
    const objectId: AirworthinessControlFormComponentInput = {
      warehouse,
      equipmentCodeList: this.resultTableDataSource.dataSelection.map((elt) => elt.equipmentCode),
      familyVariantList: this.resultTableDataSource.dataSelection.map((elt) => elt.familyVariant),
      functionList: this.resultTableDataSource.dataSelection.map((elt) => elt.function)
    };

    const data: PageComponentData = {
      componentId,
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public ngOnInit() {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_ASSET_AT_DATE_SEARCH;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: CriteriaToSave | undefined = event.criteria;
    if (!criteria) {
      this.initSearchObject();

      return;
    }

    this.criteriaName = event.name;
    this.searchObject = criteria.searchObject;
    this.selectedSearchAsset = criteria.selectedSearchAsset;
    this.searchObject.assetTypeSelected = !!this.selectedSearchAsset && this.selectedSearchAsset !== SearchAsset.All;

    this.search();
  }

  public saveSearchCriteria(): void {
    const criteriaToSave: CriteriaToSave = {
      searchObject: this.searchObject,
      selectedSearchAsset: this.selectedSearchAsset
    };

    this.criteriaToSave = criteriaToSave;
  }

  public initSearchObject(): void {
    this.searchObject = {
      assetTypeSelected: false
    };
    this.selectedBusinessPartner = undefined;
    this.selectedSearchAsset = SearchAsset.All;
  }

  public onChangeSearchAsset(): void {
    this.searchObject.assetTypeSelected = !!this.selectedSearchAsset && this.selectedSearchAsset !== SearchAsset.All;

    this.loadFamilyVariantList();
    this.loadOperationalStatusList();
    this.loadWareHouseList();
  }

  public onSelectBusinessPartner(): void {
    this.loadFleetList();
  }

  public onSelectOperator(operator: BidoCustomerDTO): void {
    this.searchObject.operatorCustomerCode = operator ? operator.customerCode : undefined;
  }

  public onSelectOwner(owner: BidoCustomerDTO): void {
    this.searchObject.ownerCustomerCode = owner ? owner.customerCode : undefined;
  }

  public openOperatorDialog() {
    this.showOperatorDialog = true;
  }

  public openOwnerDialog() {
    this.showOwnerDialog = true;
  }

  public search(): void {
    this.resultTableLoading = true;
    this.clearResultTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    if (this.selectedSearchAsset === SearchAsset.Aircraft) {
      this.searchObject.itemFamilyCodeKey = AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
    } else if (this.selectedSearchAsset === SearchAsset.Engine) {
      this.searchObject.itemFamilyCodeKey = AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
    } else {
      this.searchObject.itemFamilyCodeKey = undefined;
    }

    this.searchService.findAllAssetByCriteria(this.searchObject).subscribe((result) => {
      this.resultTableLoading = false;

      this.resultTableDataSource.addData(result.list);

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  private clearResultTable(): void {
    this.resultTableDataSource.setData([]);
  }

  private init(): void {
    this.setResultTableCols();
    this.initSearchObject();
    this.clearResultTable();

    this.resultTableLoading = false;

    this.businessPartnerList = [];
    this.familyVariantList = [];
    this.fleetList = [];
    this.functionList = [];
    this.locationList = [];
    this.operationalStatusList = [];
    this.wareHouseList = [];
  }

  private loadBusinessPartnerList(): void {
    this.searchService.findAllBidoCustomer().subscribe((results) => {
      this.businessPartnerList = ListUtils.orEmpty(results)
        .filter((customer) => !!customer.customerCode)
        .map((customer) => {
          return {
            label: StringUtils.isNullOrEmpty(customer.customerName)
              ? customer.customerCode
              : `${customer.customerName} (${customer.customerCode})`,
            value: customer.customerCode
          };
        });
    });
  }

  private loadFamilyVariantList(): void {
    let familyFunction: string;
    if (this.selectedSearchAsset === SearchAsset.Aircraft) {
      familyFunction = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
    } else if (this.selectedSearchAsset === SearchAsset.Engine) {
      familyFunction = AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;
    } else {
      familyFunction = '';
    }

    this.searchService.findAllBireVariantVersionByFamilyFunction(familyFunction).subscribe((results) => {
      this.familyVariantList = ListUtils.orEmpty(results)
        .filter((familyVariant) => !!familyVariant.familyCode && !!familyVariant.variantCode)
        .map((familyVariant) => {
          const label =
            `${familyVariant.familyName || familyVariant.familyCode}` +
            '-' +
            `${familyVariant.variantName || familyVariant.variantCode}`;

          return {
            label,
            value: familyVariant
          };
        });
    });
  }

  private loadFleetList(): void {
    const criteria: BidoFleetDTO = this.selectedBusinessPartner ? { customerCode: this.selectedBusinessPartner } : {};
    this.searchService.findAllBidoFleetByCriteria(criteria).subscribe((results) => {
      this.fleetList = ListUtils.orEmpty(results)
        .filter((fleet) => !!fleet.fleetCode)
        .map((fleet) => {
          return {
            label: StringUtils.isNullOrEmpty(fleet.fleetName)
              ? fleet.fleetCode
              : `${fleet.fleetCode} - ${fleet.fleetName}`,
            value: fleet.fleetId
          };
        });
    });
  }

  private loadFunctionList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.functionList = SelectItemUtils.fromLabelValues(
        ListUtils.orEmpty(results).filter((elt) => {
          return (
            elt.value !== AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY &&
            elt.value !== AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
          );
        })
      );
    });
  }

  private loadLocationList(): void {
    this.searchService.findAllBidoAttributeByAttributeId(BidoAttributeConstants.ASSET_LOCATION).subscribe((results) => {
      this.locationList = ListUtils.orEmpty(results).map((location) => {
        return {
          label: this.translateService.currentLang === LangConstants.FRENCH_CODE ? location.textFr : location.textEn,
          value: location.attributeValue
        };
      });
    });
  }

  private loadOperationalStatusList(): void {
    let mapKey: string;
    switch (this.selectedSearchAsset) {
      case SearchAsset.Aircraft:
        mapKey = GenericPropertyConstants.AIRCRAFT_STATUS_MAP;
        break;

      default:
        mapKey = GenericPropertyConstants.OPERATIONAL_STATUS_MAP;
        break;
    }

    this.propertiesService.getValue(mapKey).subscribe((results) => {
      this.operationalStatusList = SelectItemUtils.fromLabelValues(ListUtils.orEmpty(results));
    });
  }

  private loadWareHouseList(): void {
    this.searchService.findAllWarehouse().subscribe((results) => {
      this.wareHouseList = ListUtils.orEmpty(results)
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

  private setResultTableCols(): void {
    this.resultTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'familyVariant', translateKey: this.getTranslateKey('familyVariant') },
        { field: 'registration', translateKey: this.getTranslateKey('registration') },
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') },
        { field: 'snCode', translateKey: this.getTranslateKey('snCode') },
        { field: 'designation', translateKey: this.getTranslateKey('designation') },
        { field: 'function', translateKey: this.getTranslateKey('function') },
        { field: 'status', translateKey: this.getTranslateKey('status') }
      ],
      data: []
    });
  }

  private setSearchAssetList(): void {
    const allKey = 'global.all';
    const aircraftKey = 'global.aircraft';
    const engineKey = 'global.engine';
    const equipmentKey = 'global.equipment';
    this.translateService.get([allKey, aircraftKey, engineKey, equipmentKey]).subscribe((results) => {
      const allLabel = !!results ? results[allKey] : 'All';
      const aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
      const engineLabel = !!results ? results[engineKey] : 'Engine';
      const equipmentLabel = !!results ? results[equipmentKey] : 'Equipment';
      this.searchAssetList = [
        { label: allLabel, value: SearchAsset.All },
        { label: aircraftLabel, value: SearchAsset.Aircraft },
        { label: engineLabel, value: SearchAsset.Engine },
        { label: equipmentLabel, value: SearchAsset.Equipment }
      ];
    });
  }

  /**
   * Open Event creation screen
   */
  public createEvent() {
    const bidoNotificationDTO: BidoNotificationDTO = {
      equipmentCode: this.resultTableDataSource.dataSelection[0].equipmentCode,
      bidoNotificationTypeDTO: {}
    };

    this.openEvent(bidoNotificationDTO, ComponentOpenMode.Create);
  }

  private openEvent(objectId: BidoNotificationDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public viewAsset(): void {
    if (!!this.resultTableDataSource.dataSelection) {
      const labelKey = `transaction.${ComponentConstants.FLE_ASSET_AT_DATE_FORM}`;
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_ASSET_AT_DATE_FORM,
        objectId: `asset-----${this.serializationService.serialize(this.resultTableDataSource.dataSelection[0])}`,
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public viewStructure(): void {
    if (!!this.resultTableDataSource.dataSelection) {
      const labelKey = `transaction.${ComponentConstants.FLE_ASSET_AT_DATE_FORM}`;
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_ASSET_AT_DATE_FORM,
        objectId: `structure-----${this.serializationService.serialize(this.resultTableDataSource.dataSelection[0])}`,
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
