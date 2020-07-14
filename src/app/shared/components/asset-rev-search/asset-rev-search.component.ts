import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { AppConstants } from '../../constants/app-constants';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../constants/bido-attribute-constants';
import { ComponentConstants } from '../../constants/component-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { LangConstants } from '../../constants/lang-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { PropertiesService } from '../../services/properties.service';
import { SerializationService } from '../../services/serialization.service';
import { TabService } from '../../services/tab.service';
import { FindAllAssetForAirworthinessControlInput } from '../../types/api-input-types/product-structure-management/find-all-asset-for-airworthiness-control-input.interface';
import { FindAllAssetForAirworthinessControlOutput } from '../../types/api-output-types/product-structure-management/find-all-asset-for-airworthiness-control-output.interface';
import { BidoCustomerDTO } from '../../types/api-types/bido-customer-dto.interface';
import { BidoFleetDTO } from '../../types/api-types/bido-fleet-dto.interface';
import { BidoNotificationDTO } from '../../types/api-types/bido-notification-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { GenericComponent } from '../../types/generic-component';
import { PageComponentData } from '../../types/page-component-data.interface';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { SelectItemUtils } from '../../utils/select-item-utils';
import { StringUtils } from '../../utils/string-utils';
import { ISearchCriteria } from '../manage-search-criteria/search-criteria.interface';

import { AssetRevSearchService } from './asset-rev-search.service';

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

interface GotoFormDTO {
  warehouseId?: string;
  output?: FindAllAssetForAirworthinessControlOutput;
}

@Component({
  selector: 'aw-asset-rev-search',
  templateUrl: './asset-rev-search.component.html'
})
export class AssetRevSearchComponent extends GenericComponent implements OnInit {
  @Output()
  public onOpenClick: EventEmitter<GotoFormDTO>;

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
  public resultTable: SearchResultsDTO<FindAllAssetForAirworthinessControlOutput>;
  public resultTableCols: TableColumn[];
  public resultTableLoading: boolean;
  public searchAssetList: SelectItem[];
  public searchCategoryList: SelectItem[];
  public searchObject: FindAllAssetForAirworthinessControlInput;
  public selectedBusinessPartner: string | undefined;
  public selectedSearchAsset: SearchAsset;
  public selection: FindAllAssetForAirworthinessControlOutput[];
  public showAdvancedCriteria: boolean;
  public wareHouseList: SelectItem[];

  public showOperatorDialog: boolean;
  public showOwnerDialog: boolean;

  public readonly ASSETREVIEW_SEARCH_CRITERIA_ID: string = AppConstants.ASSETREVIEW_SEARCH_CRITERIA_ID;
  public criteriaToSave: CriteriaToSave;
  public criteriaName: string | undefined;

  public constructor(
    public assetReviewSearchService: AssetRevSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly tabService: TabService,
    private readonly serializationService: SerializationService
  ) {
    super(ComponentOpenMode.Write);

    this.searchAsset = SearchAsset;

    this.init();

    this.setResultTableCols();
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
    this.selection.forEach((sel) => {
      const input: GotoFormDTO = {
        warehouseId: this.searchObject.warehouseId,
        output: sel
      };
      this.onOpenClick.emit(input);
    });
  }

  public ngOnInit() {
    // todo
  }

  public getComponentName(): string {
    return 'AssetReviewSearchComponent';
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

    this.assetReviewSearchService.findAllAssetByCriteria(this.searchObject).subscribe((result) => {
      this.resultTableLoading = false;

      this.resultTable.moreResults = result.moreResults;
      this.resultTable.list = ListUtils.orEmpty(result.list);

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  private clearResultTable(): void {
    this.resultTable = { list: [], moreResults: false };
    this.selection = [];
  }

  private init(): void {
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

    this.onOpenClick = new EventEmitter<GotoFormDTO>();
  }

  private loadBusinessPartnerList(): void {
    this.assetReviewSearchService.findAllBidoCustomer().subscribe((results) => {
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

    this.assetReviewSearchService.findAllBireVariantVersionByFamilyFunction(familyFunction).subscribe((results) => {
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
    this.assetReviewSearchService.findAllBidoFleetByCriteria(criteria).subscribe((results) => {
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
    this.assetReviewSearchService
      .findAllBidoAttributeByAttributeId(BidoAttributeConstants.ASSET_LOCATION)
      .subscribe((results) => {
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
    this.assetReviewSearchService.findAllWarehouse().subscribe((results) => {
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
    this.resultTableCols = [
      { field: 'familyVariant', alignment: 'left' },
      { field: 'registration', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'snCode', alignment: 'left' },
      { field: 'designation', alignment: 'left' },
      { field: 'function', alignment: 'left' },
      { field: 'status', alignment: 'left' }
    ];
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
      equipmentCode: this.selection[0].equipmentCode,
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
}
