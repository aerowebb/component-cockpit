import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LabelValue } from '../../../../shared/types/label-value.interface';
import { E5xMappingComponent } from '../dynamic-catalog-components/fleet/e5x-mapping/e5x-mapping.component';
import { EventContextComponent } from '../dynamic-catalog-components/fleet/event-context/event-context.component';
import { EventSymptomComponent } from '../dynamic-catalog-components/fleet/event-symptom/event-symptom.component';
import { EventTypeComponent } from '../dynamic-catalog-components/fleet/event-type/event-type.component';
import { ContractComponent } from '../dynamic-catalog-components/human-resource/contract/contract.component';
import { PublicHolidayComponent } from '../dynamic-catalog-components/human-resource/public-holiday/public-holiday.component';
import { QualificationComponent } from '../dynamic-catalog-components/human-resource/qualification/qualification.component';
import { WorkTemplateComponent } from '../dynamic-catalog-components/human-resource/work-template/work-template.component';
import { ReceiptTypeComponent } from '../dynamic-catalog-components/logistics/folder-type/receipt-type/receipt-type.component';
import { ShipmentTypeComponent } from '../dynamic-catalog-components/logistics/folder-type/shipment-type/shipment-type.component';
import { StockMovementTypeComponent } from '../dynamic-catalog-components/logistics/stock-movement-type/stock-movement-type.component';
import { StockTypeComponent } from '../dynamic-catalog-components/logistics/stock-type/stock-type.component';
import { StorageBinTypeComponent } from '../dynamic-catalog-components/logistics/storage-bin-type/storage-bin-type.component';
import { StorageConditionComponent } from '../dynamic-catalog-components/logistics/storage-condition/storage-condition.component';
import { ValuationGroupComponent } from '../dynamic-catalog-components/logistics/valuation-group/valuation-group.component';
import { CauseForRemovalComponent } from '../dynamic-catalog-components/maintenance/cause-for-removal/cause-for-removal.component';
import { DamageComponent } from '../dynamic-catalog-components/maintenance/damage/damage.component';
import { KPercentComponent } from '../dynamic-catalog-components/maintenance/k-percent/k-percent.component';
import { LocalisationComponent } from '../dynamic-catalog-components/maintenance/localisation/localisation.component';
import { MaintenanceTypeComponent } from '../dynamic-catalog-components/maintenance/maintenance-type/maintenance-type.component';
import { RangeComponent } from '../dynamic-catalog-components/maintenance/range/range.component';
import { ReferenceMeasurementComponent } from '../dynamic-catalog-components/maintenance/reference-measurement/reference-measurement.component';
import { TaskGroupComponent } from '../dynamic-catalog-components/maintenance/task-group/task-group.component';
import { TechnicalInterventionLevelComponent } from '../dynamic-catalog-components/maintenance/technical-intervention-level/technical-intervention-level.component';
import { UnitOfMeasureComponent } from '../dynamic-catalog-components/maintenance/unit-of-measure/unit-of-measure.component';
import { CatalogNameInterface } from '../types/catalog-name-interface';

@Injectable()
export class CatalogConstantsService {
  private static readonly CAT_ADMIN = 'ADM';
  private static readonly CAT_DASSAULT = 'DAV';
  private static readonly CAT_PURCHASE_CONTRACT = 'PCT';
  private static readonly CAT_LOGISTIC = 'LOG';
  private static readonly CAT_HR = 'HR';

  public static readonly CAT_NAME_QUALIFICATION = 'QUALIFICATION';

  public constructor(private readonly translateService: TranslateService) {}

  public fetchCatalogAreas(): LabelValue<string>[] {
    return [
      {
        label: this.getInstantTranslation('catalogConstants.administration'),
        value: CatalogConstantsService.CAT_ADMIN
      },
      { label: this.getInstantTranslation('catalogConstants.engg'), value: 'ENG' },
      { label: this.getInstantTranslation('catalogConstants.fleet'), value: 'FLE' },
      { label: this.getInstantTranslation('catalogConstants.maintenance'), value: 'MAI' },
      { label: this.getInstantTranslation('catalogConstants.logistics'), value: CatalogConstantsService.CAT_LOGISTIC },
      { label: this.getInstantTranslation('catalogConstants.hr'), value: CatalogConstantsService.CAT_HR },
      { label: this.getInstantTranslation('catalogConstants.flightOpe'), value: 'FO' },
      { label: this.getInstantTranslation('catalogConstants.businessPartner'), value: 'BP' },
      { label: this.getInstantTranslation('catalogConstants.fmd'), value: 'FMD' },
      { label: this.getInstantTranslation('catalogConstants.dav'), value: CatalogConstantsService.CAT_DASSAULT },
      {
        label: this.getInstantTranslation('catalogConstants.pct'),
        value: CatalogConstantsService.CAT_PURCHASE_CONTRACT
      }
    ];
  }

  public fetchCatalogNames(): CatalogNameInterface[] {
    let toReturn: CatalogNameInterface[] = [
      /**
       * ENGINEERING
       */
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.alternativeType'),
          value: 'ALTERNATIVE_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.assetActionType'),
          value: 'ASSET_ACTION_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.assetActionTypeC2'),
          value: 'ASSET_ACTION_TYPE_C2'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.compliance'), value: 'COMPLIANCE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.evolutionLevel'), value: 'EVOLUTION_LEVEL' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.evolutionType'), value: 'EVOLUTION_TYPE' },
        catalogArea: 'ENG',
        key: 'getEvolutionTypeMap'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.exchangeType'), value: 'EXCHANGE_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.funcLocationType'), value: 'FLOC_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.itemFamilyCode'),
          value: 'ITEM_FAMILY_CODE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.itemType'), value: 'ITEM_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.lifeRestricitionType'),
          value: 'LIFE_RESTRICTION_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.replacableUnitType'),
          value: 'MAINTENANCE_TYPE'
        },
        catalogArea: 'ENG',
        accessRightName: 'REPLACEABLE_UNIT_TYPE'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.periodicityType'),
          value: 'PERIODICITY_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.pnInterchangebility'),
          value: 'PN_INTERCHANGEABILITY'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.pnProperty'), value: 'PN_PROPERTY' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.pnTraceability'), value: 'PN_TRACEABILITY' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.pnType'), value: 'PN_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.position'), value: 'POSITION' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.refMeasureCat'),
          value: 'REF_MEASURE_CATEGORY'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.sbClass'), value: 'SB_CLASSIFICATION' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.sbType'), value: 'SB_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.additionalGuidelineSubType'),
          value: 'ADDITIONAL_GUIDELINE_SUB_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.structureType'), value: 'STRUCTURE_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.taskApplicabilityCode'),
          value: 'TASK_APPLICABILITY_CODE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.taskEvolutionType'),
          value: 'TASK_EVOLUTION_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.taskItemType'), value: 'TASK_ITEM_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.taskLink'), value: 'TASK_LINK' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.taskType'), value: 'TASK_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.causeType'), value: 'CAUSE_TYPE' },
        catalogArea: 'ENG'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.kPercent'), value: 'K_PERCENT' },
        catalogArea: 'ENG',
        component: KPercentComponent,
        componentName: 'KPercentComponent'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.removalReason'), value: 'REMOVAL_REASON' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.repairability'), value: 'REPAIRABILITY' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.sparePartClassCode'),
          value: 'SPARE_PART_CLASS_CODE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.causeForRemoval'),
          value: 'CAUSE_FOR_REMOVAL'
        },
        catalogArea: 'ENG',
        component: CauseForRemovalComponent,
        componentName: 'CauseForRemovalComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.damage'), value: 'DAMAGE' },
        catalogArea: 'ENG',
        component: DamageComponent,
        componentName: 'DamageComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.localisation'), value: 'LOCALISATION' },
        catalogArea: 'ENG',
        component: LocalisationComponent,
        componentName: 'LocalisationComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.unitOfMeasure'), value: 'UNIT_OF_MEASURE' },
        catalogArea: 'ENG',
        component: UnitOfMeasureComponent,
        componentName: 'UnitOfMeasureComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.referenceMeasurement'),
          value: 'REFERENCE_MEASUREMENT'
        },
        catalogArea: 'ENG',
        component: ReferenceMeasurementComponent,
        componentName: 'ReferenceMeasurementComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.technicalInterventionLevel'),
          value: 'TECHNICAL_INTERVENTION_LEVEL'
        },
        catalogArea: 'ENG',
        component: TechnicalInterventionLevelComponent,
        componentName: 'TechnicalInterventionLevelComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.range'), value: 'RANGE' },
        catalogArea: 'ENG',
        component: RangeComponent,
        componentName: 'RangeComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.taskGroup'), value: 'TASK_GROUP' },
        catalogArea: 'ENG',
        component: TaskGroupComponent,
        componentName: 'TaskGroupComponent'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.defectLocation'), value: 'DEFECT_LOCATION' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.defectName'), value: 'DEFECT_NAME' },
        catalogArea: 'ENG'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.maintenanceType'),
          value: 'MAINTENANCE_TYPE'
        },
        catalogArea: 'ENG',
        component: MaintenanceTypeComponent,
        componentName: 'MaintenanceTypeComponent'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.familyFunction'), value: 'FAMILY_FUNCTION' },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.sbCounterLimitRefDate'),
          value: 'SB_COUNTER_LIMIT_REF_DATE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.sbCounterLimitType'),
          value: 'SB_COUNTER_LIMIT_TYPE'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.functionCodeName'),
          value: 'FUNCTION_CODE_NAME'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.familyConfiguration'),
          value: 'FAMILY_CONFIGURATION'
        },
        catalogArea: 'ENG'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.docTaskCategory'),
          value: 'DOC_TASK_CATEGORY'
        },
        key: 'getDocTaskCategoryMap',
        catalogArea: 'ENG'
      },
      /**
       * FLEET
       */
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.documentAssetCategory'),
          value: 'DOC_ASSET_CATEGORY'
        },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.transferReason'), value: 'TRANSFER_REASON' },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.documentEventCategory'),
          value: 'DOC_EVENT_CATEGORY'
        },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.enginePosition'), value: 'ENGINE_POSITION' },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventCat'), value: 'EVENT_CATEGORY' },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventCause'), value: 'EVENT_CAUSE' },
        catalogArea: 'FLE'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventPriority'), value: 'EVENT_PRIORITY' },
        catalogArea: 'FLE'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventType'), value: 'EVENT_TYPE' },
        catalogArea: 'FLE',
        component: EventTypeComponent,
        componentName: 'EventTypeComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventContext'), value: 'EVENT_CONTEXT' },
        catalogArea: 'FLE',
        component: EventContextComponent,
        componentName: 'EventContextComponent',
        isCreateEnabled: true
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.eventSymptom'), value: 'EVENT_SYMPTOM' },
        catalogArea: 'FLE',
        component: EventSymptomComponent,
        componentName: 'EventSymptomComponent',
        isCreateEnabled: true
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.e5Xmapping'), value: 'E5X_MAPPING' },
        catalogArea: 'FLE',
        component: E5xMappingComponent,
        componentName: 'E5xMappingComponent',
        isImportEnabled: true
      },

      /**
       * MAINTENANCE
       */
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workOrderType'),
          value: 'AIRM_WORK_ORDER_TYPES'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.inspectionDecision'), value: 'DECISION_IS' },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workcopingDecision'),
          value: 'DECISION_TWS'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.priorityLevel'), value: 'PRIORITY_LEVEL' },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.receptionInventory'),
          value: 'RECEPTION_INVENTORY'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.receptionPriority'),
          value: 'RECEPTION_PRIORITY'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.inspectionSentence'), value: 'SENTENCE_IS' },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workscopingSentence'),
          value: 'SENTENCE_TWS'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.mappingSenDec'),
          value: 'MAPPING_SEN_DEC'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.standardExchangeParameters'),
          value: 'STD_EXCHANGE_PARAM'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workPackageType'),
          value: 'WORK_PACKAGE_TYPE'
        },
        catalogArea: 'MAI'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.availabilityType'),
          value: 'AVAILABILITY_TYPE'
        },
        catalogArea: 'MAI'
      },
      /**
       * FLIGHT OPERATIONS
       */
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.eventMissionType'),
          value: 'EVENT_MISSION_TYPE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.flightBase'), value: 'FLIGHT_BASE' },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.flightLabel'), value: 'FLIGHT_LABEL' },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.flightLoadCategory'),
          value: 'FLIGHT_LOAD_CATEGORY'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.fuelType'), value: 'FUEL_TYPE' },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.missionPeriodicityType'),
          value: 'MISSION_PERIODICITY_TYPE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.operationalMissionCode'),
          value: 'OPERATIONAL_MISSION_CODE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.replenishmentType'),
          value: 'REPLENISHMENT_TYPE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.rmEngineOilType'),
          value: 'RM_ENGINE_OIL_TYPE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.rmOccurence'),
          value: 'RM_OCCURRENCE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.rmOrigin'),
          value: 'RM_ORIGIN'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.rmSource'),
          value: 'RM_SOURCE'
        },
        catalogArea: 'FO'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.area'),
          value: 'FLIGHT_AREA'
        },
        catalogArea: 'FO'
      },

      /**
       * BUSINESS PARTNER
       */
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.customerLink'), value: 'CUSTOMER_LINK' },
        catalogArea: 'BP'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.customerType'), value: 'CUSTOMER_TYPE' },
        catalogArea: 'BP'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.documentPartnerCategory'),
          value: 'DOC_PARTNER_CATEGORY'
        },
        catalogArea: 'BP'
      },

      /**
       * FMD
       */
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.fmdAuthorities'), value: 'FMD_AUTHORITIES' },
        catalogArea: 'FMD'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmdCloseoutReason'),
          value: 'FMD_CLOSEOUT_REASON'
        },
        catalogArea: 'FMD'
      },
      {
        isProperty: true,
        catalogList: { label: this.getInstantTranslation('catalogConstants.fmdDOANumbers'), value: 'FMD_DOA_NUMBERS' },
        catalogArea: 'FMD'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmdHighestDamage'),
          value: 'FMD_HIGHEST_DAMAGE'
        },
        catalogArea: 'FMD'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmdInjuryLevel'),
          value: 'FMD_INJURY_LEVEL'
        },
        catalogArea: 'FMD'
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmdProductionCertificat'),
          value: 'FMD_PROD_CERTIFICATE'
        },
        catalogArea: 'FMD'
      },
      /**
       * ADMIN
       */
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.objectStatus'),
          value: 'OBJECT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.funcObjectStatus'),
          value: 'FUNC_OBJECT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.aircraftStatus'),
          value: 'AIRCRAFT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.operationalStatus'),
          value: 'OPERATIONAL_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.groundEquipmentStatus'),
          value: 'GROUND_EQUIPMENT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.airmOperationStatus'),
          value: 'AIRM_OPERATION_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.airmProjectStatus'),
          value: 'AIRM_PROJECT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmAttributeCategory'),
          value: 'ATTRIBUTE_CATEGORY'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.countryZone'),
          value: 'COUNTRY_ZONE'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.currency'),
          value: 'CURRENCY'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.eventStatus'),
          value: 'EVENT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.flightStatus'),
          value: 'FLIGHT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.fmdStatus'),
          value: 'FMD_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.mandant'),
          value: 'MANDANT'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.edAttributeCategory'),
          value: 'MCH_ATTRIBUTE_CATEGORY'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.menuSap'),
          value: 'MENU_SAP'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.mvtStatus'),
          value: 'MM_MVT_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.stockStatus'),
          value: 'MM_STOCK_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.purchaseStatus'),
          value: 'PURCHASE_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.sap'),
          value: 'SAP'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.trendModelStatus'),
          value: 'TREND_MODEL_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workscopeStatus'),
          value: 'WORKSCOPE_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.funcLocationStatus'),
          value: 'FLOC_STATUS'
        },
        catalogArea: CatalogConstantsService.CAT_ADMIN
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsConfiguration'),
          value: 'DAV_MMS_CONFIGURATION'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsHumsCounterCorrespondenceEqLevel'),
          value: 'DAV_MMS_HUMS_COUNTER_CORRESPONDENCE_EQ_LEVEL'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsFieldParameters'),
          value: 'DAV_MMS_FIELD_PARAMETERS'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsHumsCounterItemNumberCorrespondence'),
          value: 'DAV_MMS_HUMS_COUNTER_ITEM_NUMBER_CORRESPONDENCE'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsCounterCorrespondenceAcLevel'),
          value: 'DAV_MMS_HUMS_COUNTER_CORRESPONDENCE_AC_LEVEL'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.davMmsHumsCsnForFsc'),
          value: 'DAV_MMS_HUMS_CSN_FOR_FSC'
        },
        catalogArea: CatalogConstantsService.CAT_DASSAULT
      },
      {
        isProperty: true,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.unitOfIssue'),
          value: 'UNIT_OF_ISSUE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC
      }
    ];
    toReturn = toReturn.concat(this.addToCatalogLogisitict());
    toReturn = toReturn.concat(this.addToCatalogHumanResources());
    toReturn = toReturn.concat(this.addToCatalogPurchaseContract());

    return toReturn;
  }

  private addToCatalogPurchaseContract(): CatalogNameInterface[] {
    const currentCatalog = CatalogConstantsService.CAT_PURCHASE_CONTRACT;

    return [
      this.createCatalogElement('pctContractStatus', 'PCT_CONTRACT_STATUS', currentCatalog),
      this.createCatalogElement('pctContractSliceType', 'PCT_CONTRACT_SLICE_TYPE', currentCatalog),
      this.createCatalogElement('pctContractSliceStatus', 'PCT_CONTRACT_SLICE_STATUS', currentCatalog),
      this.createCatalogElement('pctContractItemType', 'PCT_CONTRACT_ITEM_TYPE', currentCatalog)
    ];
  }

  private addToCatalogHumanResources(): CatalogNameInterface[] {
    const currentCatalog = CatalogConstantsService.CAT_HR;

    return [
      this.createCatalogElement('absenceStatus', 'HR_ABSENCE_STATUS', currentCatalog),
      this.createCatalogElement('absenceType', 'HR_ABSENCE_TYPE', currentCatalog),
      this.createCatalogElement('categoryLevel', 'HR_CATEGORY_LEVEL', currentCatalog),
      this.createCatalogElement('contractType', 'HR_CONTRACT_TYPE', currentCatalog),
      this.createCatalogElement('evaluationType', 'HR_EVALUATION_TYPE', currentCatalog),
      this.createCatalogElement('eventType', 'HR_EVENT_TYPE', currentCatalog),
      this.createCatalogElement('expenseType', 'HR_EXPENSE_TYPE', currentCatalog),
      this.createCatalogElement('hourlyCostDayType', 'HR_HC_DAY_TYPE', currentCatalog),
      this.createCatalogElement('qualificationType', 'HR_QUALIFICATION_TYPE', currentCatalog),
      this.createCatalogElement('salaryPeriod', 'HR_SALARY_PERIOD', currentCatalog),
      this.createCatalogElement('trainingAskedBy', 'HR_TRAINING_ASKED_BY', currentCatalog),
      this.createCatalogElement('hrCategoryType', 'HR_CATEGORY_TYPE', currentCatalog),
      this.createCatalogElement('documentEmployeeCategory', 'HR_DOCUMENT_EMPLOYEE_CATEGORY', currentCatalog),
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.contract'), value: 'CONTRACT' },
        catalogArea: 'HR',
        component: ContractComponent,
        componentName: 'ContractComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.workTemplate'), value: 'WORK_TEMPLATE' },
        catalogArea: 'HR',
        component: WorkTemplateComponent,
        componentName: 'WorkTemplateComponent',
        isCreateEnabled: true
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.qualification'),
          value: CatalogConstantsService.CAT_NAME_QUALIFICATION
        },
        catalogArea: 'HR',
        component: QualificationComponent,
        componentName: 'QualificationComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.publicHoliday'), value: 'PUBLIC_HOLIDAY' },
        catalogArea: 'HR',
        component: PublicHolidayComponent,
        componentName: 'PublicHolidayComponent'
      }
    ];
  }

  private addToCatalogLogisitict(): CatalogNameInterface[] {
    const currentCatalog = CatalogConstantsService.CAT_LOGISTIC;

    return [
      this.createCatalogElement('companyType', 'MM_COMPANY_TYPE', currentCatalog),
      this.createCatalogElement('stockOwner', 'MM_STOCK_OWNER', currentCatalog),
      this.createCatalogElement('valuationGroupCode', 'MM_VALUATION_GROUP_CODE', currentCatalog),
      this.createCatalogElement('warehouseType', 'MM_WAREHOUSE_TYPE', currentCatalog),
      this.createCatalogElement('purchaseCategory', 'PURCHASE_CATEGORY', currentCatalog),
      this.createCatalogElement('purchaseContractType', 'PURCHASE_CONTRACT_TYPE', currentCatalog),
      this.createCatalogElement('purchaseType', 'PURCHASE_TYPE', currentCatalog),
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.storageBinType'),
          value: 'STORAGE_BIN_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageBinTypeComponent,
        componentName: 'StorageBinTypeComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.warehouseAreaType'),
          value: 'WAREHOUSE_AREA_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageBinTypeComponent,
        componentName: 'StorageBinTypeComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.workshopAreaType'),
          value: 'WORKSHOP_AREA_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageBinTypeComponent,
        componentName: 'StorageBinTypeComponent'
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.stockType'), value: 'STOCK_TYPE' },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StockTypeComponent,
        componentName: 'StockTypeComponent',
        isCreateEnabled: true
      },
      {
        isProperty: false,
        catalogList: { label: this.getInstantTranslation('catalogConstants.valuationGroup'), value: 'VALUATION_GROUP' },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: ValuationGroupComponent,
        componentName: 'ValuationGroupComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.storageCondition'),
          value: 'STORAGE_CONDITION'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageConditionComponent,
        componentName: 'StorageConditionComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.receiptType'),
          value: 'RECEIPT_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: ReceiptTypeComponent,
        componentName: 'ReceiptTypeComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.shipmentType'),
          value: 'SHIPMENT_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: ShipmentTypeComponent,
        componentName: 'ShipmentType'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.typesOfMovementType'),
          value: 'TYPES_OF_MOVEMENT_TYPE'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StockMovementTypeComponent,
        componentName: 'TypesOfMovementType'
      },
      this.createCatalogElement('movementCategory', 'MM_MOVEMENT_CATEGORY', currentCatalog),
      this.createCatalogElement('warehouseCategory', 'MM_WAREHOUSE_CATEGORY', currentCatalog),
      this.createCatalogElement('workshopType', 'MM_WORKSHOP_TYPE', currentCatalog),
      this.createCatalogElement('warehouseAreaCategory', 'MM_WAREHOUSE_AREA_CATEGORY', currentCatalog),
      this.createCatalogElement('deliveryCategory', 'MM_DELIVERY_CATEGORY', currentCatalog),
      this.createCatalogElement('deliveryElementType', 'MM_DELIVERY_ELEMENT_TYPE', currentCatalog),
      this.createCatalogElement('logisticalCriticality', 'MM_LOGISTICAL_CRITICALITY', currentCatalog),
      this.createCatalogElement('packageType', 'MM_PACKAGE_TYPE', currentCatalog),
      this.createCatalogElement('packageStatus', 'MM_PACKAGE_STATUS', currentCatalog),
      this.createCatalogElement('receiptFolderStatus', 'MM_RECEIPT_FOLDER_STATUS', currentCatalog),
      this.createCatalogElement('shipmentFolderStatus', 'MM_SHIPMENT_FOLDER_STATUS', currentCatalog),
      this.createCatalogElement('transferFolderStatus', 'MM_TRANSFER_FOLDER_STATUS', currentCatalog),
      this.createCatalogElement('litigationFolderStatus', 'MM_LITIGATION_FOLDER_STATUS', currentCatalog),
      this.createCatalogElement('boxEquipmentStatus', 'MM_BOX_EQUIPMENT_STATUS', currentCatalog),
      this.createCatalogElement('batchEquipmentStatus', 'MM_BATCH_EQUIPMENT_STATUS', currentCatalog),
      this.createCatalogElement('logisticalOperationStatus', 'MM_LOGISTICAL_OPERATION_STATUS', currentCatalog),
      this.createCatalogElement('procurementRequestStatus', 'MM_PROCUREMENT_REQUEST_STATUS', currentCatalog),
      this.createCatalogElement('logisticalOperation', 'MM_LOGISTICAL_OPERATION', currentCatalog),
      this.createCatalogElement('litigationCategory', 'MM_LITIGATION_CATEGORY', currentCatalog),
      this.createCatalogElement('litigationElementType', 'MM_LITIGATION_ELEMENT_TYPE', currentCatalog),
      this.createCatalogElement('litigationActionStatus', 'MM_LITIGATION_ACTION_STATUS', currentCatalog),
      this.createCatalogElement('workshopAreaCategory', 'MM_WORKSHOP_AREA_CATEGORY', currentCatalog),
      this.createCatalogElement('serviceType', 'MM_SERVICE_TYPE', currentCatalog),
      // TODO : find corresponding component
      /* {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.dfReceipt'),
          value: 'MM_DF_RECEIPT'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageBinTypeComponent,
        componentName: 'StorageBinTypeComponent'
      },
      {
        isProperty: false,
        catalogList: {
          label: this.getInstantTranslation('catalogConstants.dfShipment'),
          value: 'MM_DF_SHIPMENT'
        },
        catalogArea: CatalogConstantsService.CAT_LOGISTIC,
        component: StorageBinTypeComponent,
        componentName: 'StorageBinTypeComponent'
      }, */
      this.createCatalogElement('procurementRequestType', 'MM_PROCUREMENT_REQUEST_TYPE', currentCatalog)
    ];
  }

  private createCatalogElement(name: string, value: string, area: string): CatalogNameInterface {
    return {
      isProperty: true,
      catalogList: {
        label: this.getInstantTranslation(`catalogConstants.${name}`),
        value
      },
      catalogArea: area
    };
  }

  private getInstantTranslation(label?: string): string {
    return this.translateService.instant(label as string);
  }
}
