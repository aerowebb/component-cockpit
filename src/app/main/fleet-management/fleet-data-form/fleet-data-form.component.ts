import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { BidoPreferenceConstants } from '../../../shared/constants/bido-preference-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindAllAircraftByCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { FindAllEngineByCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-all-engine-by-criteria-input.interface';
import { FindBidoEquipmentsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-equipments-by-search-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { BidoFamilyVariantUtils } from '../../../shared/utils/bido-family-variant-utils';

import { FleetDataFormService } from './fleet-data-form.service';

interface FleetDataCopyRow {
  asset: string;
  equipmentCode?: string;
  familyVariantCode?: string;
  pnCode?: string;
  sn?: string;
  equipmentDesignation?: string;
  ownerCustomerCode?: string;
  _obj: BidoEquipmentDTO;
}

@Component({
  selector: 'aw-fleet-data-form',
  templateUrl: './fleet-data-form.component.html',
  styleUrls: ['./fleet-data-form.component.scss']
})
export class FleetDataFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public isLoading: boolean;
  public aircraftFamilyVariantList: LabelValue<string>[];
  public aircraftStatusList: LabelValue<string>[];
  public attributesMap: Map<string, string>;
  public engineFamilyVariantList: LabelValue<string>[];
  public engineOperationalStatusList: LabelValue<string>[];
  public euipmentFunctionList: LabelValue<string>[];
  public euipmentOperationalStatusList: LabelValue<string>[];
  public equipmentFamilyVariantList: LabelValue<string>[];
  public resultsTableAircraft: SearchResultsDTO<FleetDataCopyRow>;
  @Output() public resultsTableAircraftUpdated: EventEmitter<SearchResultsDTO<FleetDataCopyRow>>;
  public resultsTableEngine: SearchResultsDTO<FleetDataCopyRow>;
  @Output() public resultsTableEngineUpdated: EventEmitter<SearchResultsDTO<FleetDataCopyRow>>;
  public resultsTableEquipment: SearchResultsDTO<FleetDataCopyRow>;
  @Output() public resultsTableEquipmentUpdated: EventEmitter<SearchResultsDTO<FleetDataCopyRow>>;
  @Output() public searchLaunched: EventEmitter<boolean>;
  public searchObjectAircraft: BidoEquipmentDTO;
  public searchObjectEngine: BidoEquipmentDTO;
  public searchObjectEquipment: BidoEquipmentDTO;
  public selectedType: string;
  @Output() public selectedTypeUpdated: EventEmitter<string>;
  public types: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly fleetDataFormService: FleetDataFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isLoading = false;
    this.attributesMap = new Map<string, string>();
    this.resultsTableAircraftUpdated = new EventEmitter<SearchResultsDTO<FleetDataCopyRow>>();
    this.resultsTableEngineUpdated = new EventEmitter<SearchResultsDTO<FleetDataCopyRow>>();
    this.resultsTableEquipmentUpdated = new EventEmitter<SearchResultsDTO<FleetDataCopyRow>>();
    this.searchLaunched = new EventEmitter<boolean>();
    this.selectedTypeUpdated = new EventEmitter<string>();

    this.selectedType = 'aircraft';

    this.init();

    this.bindAircraftDropDowns();
    this.bindEngineDropDowns();
    this.bindEquipmentDropDowns();
  }

  public ngOnInit() {
    // unused
  }

  public init(): void {
    this.resultsTableAircraft = {
      list: [],
      moreResults: false
    };
    this.resultsTableEngine = {
      list: [],
      moreResults: false
    };
    this.resultsTableEquipment = {
      list: [],
      moreResults: false
    };

    this.types = [
      { label: this.translateService.instant(this.getComponentName() + '.aircraft'), value: 'aircraft' },
      { label: this.translateService.instant(this.getComponentName() + '.engine'), value: 'engine' },
      { label: this.translateService.instant(this.getComponentName() + '.equipment'), value: 'equipment' }
    ];

    this.searchObjectAircraft = {};
    this.searchObjectEngine = {};
    this.searchObjectEquipment = {};
  }

  public resetSearchCriteria(): void {
    this.init();
  }

  public bindAircraftDropDowns(): void {
    this.aircraftFamilyVariantList = [];
    this.fleetDataFormService.findAllFamilyVariantForEquipment().subscribe((results) => {
      if (!!results) {
        const temp: LabelValue<string>[] = [];
        results.forEach((result) => {
          const element = BidoFamilyVariantUtils.buildFamilyVariantCode(result.familyCode, result.variantCode);

          if (!!element) {
            const t = {
              label: element,
              value: element
            };
            temp.push(t);
          } else {
            super.throwUnboundLocalError('bindAircraftDropDowns', 'element');
          }
        });
        this.aircraftFamilyVariantList = temp;
      }
    });

    this.aircraftStatusList = [];
    this.propertiesService.getValue(GenericPropertyConstants.AIRCRAFT_STATUS_MAP).subscribe((results) => {
      this.aircraftStatusList = results;
    });
  }

  public bindEngineDropDowns(): void {
    this.engineFamilyVariantList = [];
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.fleetDataFormService.findFamilyVariantForEquipment(familyVariantInput).subscribe((results) => {
      results.forEach((variantElement) => {
        if (!!variantElement && !!variantElement.labelValueDTO) {
          this.engineFamilyVariantList.push(variantElement.labelValueDTO);
        } else {
          super.throwUnboundLocalError('bindEngineDropDowns', 'variantElement && variantElement.labelValueDTO');
        }
      });
    });

    this.engineOperationalStatusList = [];
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      this.engineOperationalStatusList = results;
    });
  }

  public bindEquipmentDropDowns(): void {
    this.equipmentFamilyVariantList = [];
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.fleetDataFormService.findFamilyVariantForEquipment(familyVariantInput).subscribe((results) => {
      results.forEach((variantElement) => {
        if (!!variantElement && !!variantElement.labelValueDTO) {
          this.equipmentFamilyVariantList.push(variantElement.labelValueDTO);
        } else {
          super.throwUnboundLocalError('bidoEquipmentDropDowns', 'variantElement && variantElement.labelValueDTO');
        }
      });
    });

    this.euipmentOperationalStatusList = [];
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      this.euipmentOperationalStatusList = results;
    });

    this.euipmentFunctionList = [];
    this.fleetDataFormService.getEquipmentFunctionList().subscribe((results) => {
      this.euipmentFunctionList = results;
    });
  }

  private transformIntoRow(euipObj: BidoEquipmentDTO): FleetDataCopyRow {
    return {
      _obj: euipObj,
      asset: `P/N ${euipObj.pnCode || ''} | S/N ${euipObj.sn || ''}`,
      equipmentCode: euipObj.equipmentCode,
      equipmentDesignation: euipObj.equipmentDesignation,
      familyVariantCode: euipObj.familyVariantCode,
      ownerCustomerCode: euipObj.ownerCustomerCode,
      pnCode: euipObj.pnCode,
      sn: euipObj.sn
    };
  }

  public search(): void {
    if (!!this.selectedType) {
      if (this.selectedType === 'aircraft') {
        this.searchAircrafts();
      }
      if (this.selectedType === 'engine') {
        this.searchEngines();
      }
      if (this.selectedType === 'equipment') {
        this.searchEquipments();
      }
    }
  }

  public searchAircrafts(): void {
    this.isLoading = true;
    this.searchLaunched.emit(true);
    const findAllAircraftByCriteriaInput: FindAllAircraftByCriteriaInput = {
      bidoEquipmentDTO: this.searchObjectAircraft
    };

    if (!!findAllAircraftByCriteriaInput && !!findAllAircraftByCriteriaInput.bidoEquipmentDTO) {
      findAllAircraftByCriteriaInput.bidoEquipmentDTO.equipmentFunction =
        AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;

      this.fleetDataFormService.findAllAircraftByCriteria(findAllAircraftByCriteriaInput).subscribe((results) => {
        this.searchLaunched.emit(false);
        if (results) {
          const tableList: FleetDataCopyRow[] = [];
          results.list.forEach((obj) => {
            tableList.push(this.transformIntoRow(obj));
          });
          this.resultsTableAircraft.list = tableList;
          this.resultsTableAircraft.moreResults = results.moreResults;
          this.resultsTableAircraftUpdated.emit(this.resultsTableAircraft);
        }
        this.isLoading = false;
      });
    } else {
      super.throwUnboundLocalError(
        'searchAircrafts',
        'findAllAircraftByCriteriaInput && findAllAircraftByCriteriaInput.bidoEquipmentDTO'
      );
    }
  }

  public searchEngines(): void {
    this.isLoading = true;
    this.searchLaunched.emit(true);
    const findAllEngineByCriteriaInput: FindAllEngineByCriteriaInput = {
      bidoEquipmentDTO: this.searchObjectEngine
    };

    if (!!findAllEngineByCriteriaInput && !!findAllEngineByCriteriaInput.bidoEquipmentDTO) {
      findAllEngineByCriteriaInput.bidoEquipmentDTO.equipmentFunction =
        AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY;

      this.fleetDataFormService.findAllEngineByCriteria(findAllEngineByCriteriaInput).subscribe((results) => {
        this.searchLaunched.emit(false);
        if (results) {
          const tableList: FleetDataCopyRow[] = [];
          results.list.forEach((obj) => {
            tableList.push(this.transformIntoRow(obj));
          });
          this.resultsTableEngine.list = tableList;
          this.resultsTableEngine.moreResults = results.moreResults;
          this.resultsTableEngineUpdated.emit(this.resultsTableEngine);
        }
        this.isLoading = false;
      });
    } else {
      super.throwUnboundLocalError(
        'searchEngines',
        'findAllEngineByCriteriaInput && findAllEngineByCriteriaInput.bidoEquipmentDTO'
      );
    }
  }

  public searchEquipments(): void {
    this.isLoading = true;
    this.searchLaunched.emit(true);
    this.attributesMap.set(BidoPreferenceConstants.ASSET_LOCATION, '');
    this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_ID, '');
    this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_SOURCE_SYSTEM_REFERENCE, '');
    this.attributesMap.set(BidoPreferenceConstants.EQUIPMENT_ITEM_NUMBER, '');

    const attributesConvMap = {};
    this.attributesMap.forEach((value: string, key: string) => {
      attributesConvMap[key] = value;
    });
    const findBidoEquipmentsBySearchCriteriaInput: FindBidoEquipmentsBySearchCriteriaInput = {
      bidoEquipmentDTO: this.searchObjectEquipment,
      attributes: attributesConvMap,
      withCounters: false
    };

    this.fleetDataFormService
      .findBidoEquipmentsDTOBySearchCriteria(findBidoEquipmentsBySearchCriteriaInput)
      .subscribe((results) => {
        this.searchLaunched.emit(false);
        if (results) {
          const tableList: FleetDataCopyRow[] = [];
          results.list.forEach((obj) => {
            tableList.push(this.transformIntoRow(obj as BidoEquipmentDTO));
          });
          this.resultsTableEquipment.list = tableList;
          this.resultsTableEquipment.moreResults = results.moreResults;
          this.resultsTableEquipmentUpdated.emit(this.resultsTableEquipment);
        }
        this.isLoading = false;
      });
  }

  public onChangeSelectedType() {
    this.selectedTypeUpdated.emit(this.selectedType);
  }

  public getComponentName(): string {
    return 'FleetDataFormComponent';
  }
}
