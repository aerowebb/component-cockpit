import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
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
import { FindAllAssetForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/find-all-asset-for-airworthiness-control-input.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentForAirworthinessControlDTO } from '../../../../shared/types/api-types/bido-equipment-for-airworthiness-control-dto.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { SearchAsset } from '../enums/search-asset.enum';
import { SearchCategory } from '../enums/search-category.enum';

import { SearchService } from './search.service';

interface CriteriaToSave {
  searchObject: FindAllAssetForAirworthinessControlInput;
  selectedSearchAsset: SearchAsset;
  selectedBusinessPartner?: string | undefined;
  searchFleet?: string | undefined;
  selectedSearchCategory: SearchCategory;
}

export abstract class SearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentName: string;
  public readonly itemFamilyCodeAircraft: string;
  public readonly itemFamilyCodeEquipment: string;
  public readonly itemFamilyCodeEngine: string;
  public readonly searchAsset: typeof SearchAsset;
  public readonly searchCategory: typeof SearchCategory;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public businessPartnerList: SelectItem[];
  public familyVariantList: SelectItem[];
  public fleetList: SelectItem[];
  public functionList: SelectItem[];
  public locationList: SelectItem[];
  public operationalStatusList: SelectItem[];
  public resultTable: SearchResultsDTO<BidoEquipmentForAirworthinessControlDTO>;
  public resultTableCols: TableColumn[];
  public resultTableLoading: boolean;
  public searchAssetList: SelectItem[];
  public searchCategoryList: SelectItem[];
  public searchAssetObject: FindAllAssetForAirworthinessControlInput;
  public searchFleet: string | undefined;
  public criteriaToSave: CriteriaToSave;
  public criteriaName: string | undefined;
  public selectedBusinessPartner: string | undefined;
  public selectedSearchAsset: SearchAsset;
  public selectedSearchCategory: SearchCategory;
  public selection: BidoEquipmentForAirworthinessControlDTO[];
  public showAdvancedCriteria: boolean;
  public wareHouseList: SelectItem[];

  public showOperatorDialog: boolean;
  public showOwnerDialog: boolean;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.AIRWORTHINESS_STATUS_SEARCH_CRITERIA_ID;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    protected searchService: SearchService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentName = 'AirworthinessControlSearchComponent';
    this.searchAsset = SearchAsset;
    this.searchCategory = SearchCategory;

    this.init();

    this.setResultTableCols();
    this.setSearchAssetList();
    this.setSearchCategoryList();

    this.loadBusinessPartnerList();
    this.loadFamilyVariantList();
    this.loadFleetList();
    this.loadFunctionList();
    this.loadLocationList();
    this.loadOperationalStatusList();
    this.loadWareHouseList();
  }

  protected getTranslateKey(key: string): string {
    return super.getTranslateKey(key, this.componentName);
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public initsearchCriteria(): void {
    this.searchAssetObject = {
      aircraftTypeSelected: false,
      allAssetTypeSelected: true,
      engineTypeSelected: false,
      equipmentTypeSelected: false
    };
    this.criteriaName = undefined;
    this.searchFleet = undefined;
    this.selectedBusinessPartner = undefined;
    this.selectedSearchAsset = SearchAsset.All;
    this.selectedSearchCategory = SearchCategory.Asset;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: CriteriaToSave | undefined = event.criteria;
    if (!criteria) {
      this.initsearchCriteria();

      return;
    }
    if (criteria.selectedSearchCategory === this.searchCategory.Fleet) {
      this.criteriaName = event.name;
      this.searchFleet = criteria.searchFleet;
      this.selectedBusinessPartner = criteria.selectedBusinessPartner;
      this.selectedSearchCategory = criteria.selectedSearchCategory;
    } else {
      this.criteriaName = event.name;
      this.searchAssetObject = criteria.searchObject || {};
      this.selectedSearchAsset = criteria.selectedSearchAsset;
      this.selectedSearchCategory = criteria.selectedSearchCategory;
    }

    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    if (this.selectedSearchCategory === this.searchCategory.Fleet) {
      const criteriaToSave: CriteriaToSave = {
        selectedBusinessPartner: this.selectedBusinessPartner,
        searchFleet: this.searchFleet,
        searchObject: this.searchAssetObject,
        selectedSearchAsset: this.selectedSearchAsset,
        selectedSearchCategory: this.selectedSearchCategory
      };
      this.criteriaToSave = criteriaToSave;
    } else {
      const criteriaToSave: CriteriaToSave = {
        searchObject: this.searchAssetObject,
        selectedSearchAsset: this.selectedSearchAsset,
        selectedSearchCategory: this.selectedSearchCategory
      };
      this.criteriaToSave = criteriaToSave;
    }
  }

  public onChangeSearchAsset(): void {
    this.searchAssetObject.aircraftTypeSelected = this.selectedSearchAsset === SearchAsset.Aircraft;
    this.searchAssetObject.allAssetTypeSelected = this.selectedSearchAsset === SearchAsset.All;
    this.searchAssetObject.engineTypeSelected = this.selectedSearchAsset === SearchAsset.Engine;
    this.searchAssetObject.equipmentTypeSelected = this.selectedSearchAsset === SearchAsset.Equipment;

    this.loadFamilyVariantList();
    this.loadOperationalStatusList();
    this.loadWareHouseList();
  }

  public onSelectBusinessPartner(): void {
    this.loadFleetList();
  }

  public onSelectOperator(operator: BidoCustomerDTO): void {
    this.searchAssetObject.operatorCustomerCode = operator ? operator.customerCode : undefined;
  }

  public onSelectOwner(owner: BidoCustomerDTO): void {
    this.searchAssetObject.ownerCustomerCode = owner ? owner.customerCode : undefined;
  }

  public openOperatorDialog() {
    this.showOperatorDialog = true;
  }

  public openOwnerDialog() {
    this.showOwnerDialog = true;
  }

  protected clearResultTable(): void {
    this.resultTable = { list: [], moreResults: false };
    this.selection = [];
  }

  private init(): void {
    this.initsearchCriteria();
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
    if (this.sessionService.mmModuleActivated) {
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

  private setSearchCategoryList(): void {
    const assetKey = this.getTranslateKey('asset');
    const fleetKey = this.getTranslateKey('fleet');
    this.translateService.get([assetKey, fleetKey]).subscribe((results) => {
      const assetLabel = !!results ? results[assetKey] : 'Asset';
      const fleetLabel = !!results ? results[fleetKey] : 'Fleet';
      this.searchCategoryList = [
        { label: assetLabel, value: SearchCategory.Asset },
        { label: fleetLabel, value: SearchCategory.Fleet }
      ];
    });
  }

  /**************************************************************************
   * Abstract methods
   *************************************************************************/

  public abstract get warehouseVisible(): boolean;

  public abstract openSelection(): void;

  public abstract search(): void;
}
