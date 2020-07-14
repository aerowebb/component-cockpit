import { ComponentAccessRight } from '../types/component-access-right.interface';

import { BidoFunctionTypeConstants } from './bido-function-type-constants';
import { BidoProfileConstants } from './bido-profile-constants';

export class ComponentConstants {
  /**************************************************************************
   * Airworthiness control module
   *************************************************************************/
  public static readonly MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM = 'AirworthinessControlForAssetFormComponent';
  public static readonly MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM = 'AirworthinessControlForFleetFormComponent';
  public static readonly MAI_AIRWORTHINESS_CONTROL_SEARCH = 'AirworthinessControlSearchComponent';
  public static readonly MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM = 'ScheduleMaintenanceFormComponent';
  public static readonly MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH = 'ScheduleMaintenanceSearchComponent';

  /**************************************************************************
   * Applicable Configuration module
   *************************************************************************/
  public static readonly ENG_APPLICABLE_CONFIGURATION_FORM = 'ApplicableConfigurationFormComponent';
  public static readonly ENG_APPLICABLE_CONFIGURATION_SEARCH = 'ApplicableConfigurationSearchComponent';

  /**************************************************************************
   * Collaborative Cockpit module
   *************************************************************************/
  public static readonly COL_DATA_ENRICHMENT_FORM = 'DataEnrichmentFormComponent';
  public static readonly COL_ENGINEERING_DATA_EXCHANGE_SEARCH = 'EngineeringDataExchangeSearchComponent';
  public static readonly COL_FLEET_DATA_EXCHANGE = 'FleetDataExchangeComponent';
  public static readonly COL_FLIGHT_DATA_EXCHANGE = 'FlightDataExchangeComponent';
  public static readonly COL_HR_DATA_EXCHANGE = 'HrDataExchangeComponent';
  public static readonly COL_LOGISTIC_DATA_EXCHANGE = 'LogisticDataExchangeComponent';
  public static readonly COL_PART_NUMBER_EXPORT_FORM = 'PartNumberExportFormComponent';
  public static readonly COL_XML_DATA_LOADING_FORM = 'XmlDataLoadingFormComponent';
  public static readonly COL_SBAD_EXPORT_FORM = 'SbAdExportFormComponent';

  public static readonly DAS_REFERENTIAL = 'ReferentialDashboardSearchComponent';

  /**************************************************************************
   * Configuration Diagram module
   *************************************************************************/
  public static readonly ENG_CONFIGURATION_DIAGRAM_FORM = 'ConfigurationDiagramFormComponent';
  public static readonly ENG_CONFIGURATION_DIAGRAM_SEARCH = 'ConfigurationDiagramSearchComponent';

  /**************************************************************************
   * Forecast maintenance module
   *************************************************************************/
  public static readonly MAI_FORECAST_FORM = 'ForecastFormComponent';
  public static readonly MAI_FORECAST_SEARCH = 'ForecastSearchComponent';

  /**************************************************************************
   * Task module
   *************************************************************************/
  public static readonly ENG_TASK_FORM = 'TaskFormComponent';
  public static readonly ENG_TASK_SEARCH = 'TaskSearchComponent';

  /**************************************************************************
   * Administration module
   *************************************************************************/
  public static readonly ADM_BUSINESS_PARTNER_SEARCH = 'BusinessPartnerSearchComponent';
  public static readonly ADM_BUSINESS_PARTNER_FORM = 'BusinessPartnerFormComponent';
  public static readonly ADM_CONTACT_SEARCH = 'ContactSearchComponent';
  public static readonly ADM_CONTACT_FORM = 'ContactFormComponent';
  public static readonly ADM_CATALOG = 'CatalogComponent';
  public static readonly ADM_SITE_SEARCH = 'SiteSearchComponent';
  public static readonly ADM_SITE_FORM = 'SiteFormComponent';
  public static readonly ADM_EVENT_SUBSCRIPTION_FORM = 'EventSubscriptonFormComponent';
  public static readonly ADM_EVENT_SUBSCRIPTION_SEARCH = 'EventSubscriptionComponent';
  public static readonly ADM_CATALOG_EVENT_CONTEXT_FORM = 'EventContextFormComponent';
  public static readonly ADM_CATALOG_EVENT_SYMPTOM_FORM = 'EventSymptomFormComponent';
  public static readonly ADM_CATALOG_WORK_TEMPLATE_FORM = 'WorkTemplateFormComponent';
  public static readonly ADM_WAREHOUSE_SEARCH = 'WarehouseSearchComponent';
  public static readonly ADM_WAREHOUSE_FORM = 'WarehouseFormComponent';
  public static readonly ADM_WORKSHOP_FORM = 'WorkshopFormComponent';
  public static readonly ADM_WORKSHOP_SEARCH = 'WorkshopSearchComponent';
  public static readonly ADM_ENTERPRISE_DEFINITION = 'EnterpriseDefinitionComponent';
  public static readonly ADM_ENTERPRISE_MAP = 'EnterpriseMapComponent';
  public static readonly ADM_PROFILES_SEARCH = 'ProfilesSearchComponent';
  public static readonly ADM_PROFILES_FORM = 'ProfilesFormComponent';
  public static readonly ADM_USERS_SEARCH = 'UsersSearchComponent';
  public static readonly ADM_USERS_FORM = 'UsersFormComponent';
  public static readonly ADM_ATTRIBUTES_SEARCH = 'AttributesSearchComponent';
  public static readonly ADM_ATTRIBUTES_FORM = 'AttributesFormComponent';
  public static readonly ADM_BACKGROUND_JOBS = 'BackgroundJobsComponent';
  public static readonly ADM_MONITORING = 'MonitoringFormComponent';
  public static readonly ADM_SETTINGS_FORM = 'SettingsFormComponent';
  public static readonly ADM_STOCK_TYPE_FORM = 'StockTypeFormComponent';
  public static readonly ADM_WORKFLOW_MANAGEMENT_SEARCH = 'WorkflowManagementSearchComponent';
  public static readonly ADM_WORKFLOW_MANAGEMENT_FORM = 'WorkflowManagementFormComponent';
  public static readonly ADM_LICENSING_SEARCH = 'LicensingSearchComponent';
  public static readonly ADM_TODO_LIST_SEARCH = 'TodoListSearchComponent';

  /**************************************************************************
   * Engineering Managament module
   *************************************************************************/
  public static readonly ENG_EVOLUTION_FORM = 'EvolutionFormComponent';
  public static readonly ENG_EVOLUTION_SEARCH = 'EvolutionSearchComponent';
  public static readonly ENG_FAMILY_FORM = 'FamilyFormComponent';
  public static readonly ENG_FAMILY_SEARCH = 'FamilySearchComponent';
  public static readonly ENG_FUNCTIONAL_LOCATION_FORM = 'FunctionalLocationFormComponent';
  public static readonly ENG_FUNCTIONAL_LOCATION_SEARCH = 'FunctionalLocationSearchComponent';
  public static readonly ENG_MODIFICATION_FORM = 'ModificationFormComponent';
  public static readonly ENG_MODIFICATION_SEARCH = 'ModificationSearchComponent';
  public static readonly ENG_OPERATION_FORM = 'OperationFormComponent';
  public static readonly ENG_OPERATION_SEARCH = 'OperationSearchComponent';
  public static readonly ENG_PART_NUMBER_FORM = 'PartNumberFormComponent';
  public static readonly ENG_PART_NUMBER_SEARCH = 'PartNumberSearchComponent';
  public static readonly ENG_SBAD_FORM = 'SbadFormComponent';
  public static readonly ENG_SBAD_SEARCH = 'SbadSearchComponent';
  public static readonly ENG_VISIT_FORM = 'VisitFormComponent';
  public static readonly ENG_VISIT_SEARCH = 'VisitSearchComponent';
  public static readonly ENG_MAINTENANCE_PROGRAM_SEARCH = 'MaintenanceProgramSearchComponent';
  public static readonly ENG_MAINTENANCE_PROGRAM_FORM = 'MaintenanceProgramFormComponent';
  public static readonly ENG_AIRWORTHINESS_DIRECTIVE_SEARCH = 'AirworthinessDirectiveSearchComponent';
  public static readonly ENG_AIRWORTHINESS_DIRECTIVE_FORM = 'AirworthinessDirectiveFormComponent';
  public static readonly ENG_ITEM_SEARCH = 'ItemSearchComponent';
  public static readonly ENG_ITEM_FORM = 'ItemFormComponent';
  public static readonly ENG_ITEM_PART_NUMBER_FORM = 'ItemPartNumberComponent';
  public static readonly ENG_SHOP_MANUAL = 'ShopManualComponent';
  public static readonly ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH = 'AdditionalMaintenanceGuidelineSearchComponent';
  public static readonly ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM = 'AdditionalMaintenanceGuidelineFormComponent';
  public static readonly ENG_DEA_DIA_FORM = 'DeaDiaFormComponent';
  public static readonly ENG_MAINTENANCE_PROGRAM_UPDATES_LIST = 'MaintenanceProgramUpdatesListComponent';
  public static readonly ENG_CHANGE_RECORD_FORM = 'ChangeRecordFormComponent';
  public static readonly ENG_MAI_UNIT_CONVERSION_MATRIX_SEARCH = 'UnitConversionMatrixSearchComponent';
  public static readonly ENG_MAI_UNIT_CONVERSION_MATRIX_FORM = 'UnitConversionMatrixFormComponent';
  public static readonly ENG_OPERATIONAL_CONFIGURATION_FORM = 'OperationalConfigurationFormComponent';
  public static readonly ENG_OPERATIONAL_CONFIGURATION_SEARCH = 'OperationalConfigurationSearchComponent';

  /**************************************************************************
   * Fleet Management module
   *************************************************************************/
  public static readonly FLE_AIRCRAFT_FORM = 'AircraftFormComponent';
  public static readonly FLE_AIRCRAFT_SEARCH = 'AircraftSearchComponent';
  public static readonly FLE_DEFECT_FORM = 'DefectFormComponent';
  public static readonly FLE_FDM_EVENT_FORM = 'FmdEventFormComponent';
  public static readonly FLE_EQUIPMENT_FORM = 'EquipmentFormComponent';
  public static readonly FLE_EQUIPMENT_SEARCH = 'EquipmentSearchComponent';
  public static readonly FLE_ENGINE_SEARCH = 'EngineSearchComponent';
  public static readonly FLE_ENGINE_FORM = 'EngineFormComponent';
  public static readonly FLE_EVENT_SEARCH = 'EventSearchComponent';
  public static readonly FLE_EVENT_CREATE = 'EventCreateComponent';
  public static readonly FLE_FLEET_FORM = 'FleetFormComponent';
  public static readonly FLE_FLEET_SEARCH = 'FleetSearchComponent';
  public static readonly FLE_DATA_COPY = 'FleetDataCopySearchComponent';
  public static readonly FLE_DATA_TRANSFER_SEARCH = 'FleetDataTransferSearchComponent';
  public static readonly FLE_ASSET_LOG_FORM = 'AssetLogFormComponent';
  public static readonly FLE_ASSET_MEASURE_LOG_FORM = 'AssetMeasureLogFormComponent';
  public static readonly FLE_ASSET_AT_DATE_SEARCH = 'AssetAtDateSearchComponent';
  public static readonly FLE_ASSET_AT_DATE_FORM = 'AssetAtDateFormComponent';
  public static readonly FLE_SEARCH_WORK_PACKAGE = 'SearchAllWorkPackageComponent';

  /**************************************************************************
   * Flight module
   *************************************************************************/
  public static readonly FLI_FLIGHT_FORM = 'FlightFormComponent';
  public static readonly FLI_FLIGHT_SEARCH = 'FlightSearchComponent';
  public static readonly FLI_GONOGO_VALIDATION_FORM = 'GonogoValidationFormComponent';
  public static readonly FLI_LINE_MAINTENANCE_FORM = 'LineMaintenanceFormComponent';
  public static readonly FLI_LINE_MAINTENANCE_SEARCH = 'LineMaintenanceSearchComponent';

  /**************************************************************************
   * Goods Movement module
   *************************************************************************/
  public static readonly LOG_GOODS_MOVEMENT_ABSTRACT_FORM = 'GoodsMovementAbstractFormComponent';
  public static readonly LOG_GOODS_MOVEMENT_FORM = 'GoodsMovementFormComponent';
  public static readonly LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM = 'MaterialAvailabilityWorkPackageFormComponent';
  public static readonly LOG_MATERIAL_AVAILABILITY_WORK_ORDER_FORM = 'MaterialAvailabilityWorkOrderFormComponent';
  public static readonly LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM = 'MaterialAvailabilityForecastingFormComponent';
  public static readonly LOG_GOODS_MOVEMENT_PURCHASE_REQUEST_FORM = 'GoodsMovementPurchaseRequestFormComponent';
  public static readonly LOG_GOODS_MOVEMENT_WORK_PACKAGE_FORM = 'GoodsMovementWorkPackageFormComponent';
  public static readonly LOG_GOODS_MOVEMENT_WORK_ORDER_FORM = 'GoodsMovementWorkOrderFormComponent';

  /**************************************************************************
   * Flight Operations module
   *************************************************************************/
  public static readonly FLI_OPERATION_SEARCH = 'FLIOperationSearchComponent';
  public static readonly FLI_FLIGHTS_MISSION_SEARCH = 'MissionSearchComponent';
  public static readonly FLI_FLIGHTS_MISSION_FORM = 'MissionFormComponent';
  public static readonly FLI_FLIGHT_SCHEDULING_FORM = 'FlightSchedulingFormComponent';
  public static readonly FLI_FLIGHT_SCHEDULING_SEARCH = 'FlightSchedulingSearchComponent';
  public static readonly FLI_RUNWAY_SCHEDULING_FORM = 'RunwaySchedulingFormComponent';
  public static readonly FLI_OPERATIONAL_CONFIGURATION_SETTLING = 'OperationalConfigurationSettlingComponent';

  /**************************************************************************
   * Human Resources module
   *************************************************************************/
  public static readonly HR_EMPLOYEE_SEARCH = 'EmployeeSearchComponent';
  public static readonly HR_EMPLOYEE_FORM = 'EmployeeFormComponent';
  public static readonly HR_STAFF_ALERT_SEARCH = 'StaffAlertSearchComponent';
  public static readonly HR_STAFF_ALERT_FORM = 'StaffAlertFormComponent';
  public static readonly HR_EMPLOYEE_PLANNING_SEARCH = 'EmployeePlanningSearchComponent';
  public static readonly HR_EMPLOYEE_PLANNING_FORM = 'EmployeePlanningFormComponent';
  public static readonly HR_VIEW_BY_COMPANY_FORM = 'ViewByCompanyFormComponent';

  /**************************************************************************
   * Logistics module
   *************************************************************************/
  public static readonly LOG_LOCAL_GOODS_RECEIPT_SEARCH = 'LocalGoodReceiptSearchComponent';
  public static readonly LOG_EXTERNAL_GOODS_RECEIPT_SEARCH = 'ExternalGoodReceiptSearchComponent';
  public static readonly LOG_GOODS_RECEIPT_SEARCH = 'GoodsReceiptSearchComponent';
  public static readonly LOG_GOODS_RECEIPT_FORM = 'GoodsReceiptFormComponent';
  public static readonly LOG_GOODS_RECEIPT_POST_FORM = 'InfoPostComponent';
  public static readonly LOG_GOODS_EXTERNAL_SHIPMENT_SEARCH = 'ExternalShipmentSearchComponent';
  public static readonly LOG_GOODS_LOCAL_SHIPMENT_SEARCH = 'LocalShipmentSearchComponent';
  public static readonly LOG_GOODS_SHIPMENT_FORM = 'ShipmentFolderFormComponent';
  public static readonly LOG_INVENTORY_WAREHOUSE_SEARCH = 'InventoryByWarehouseSearchComponent';
  public static readonly LOG_INVENTORY_WAREHOUSE_FORM = 'InventoryByWarehouseFormComponent';
  public static readonly LOG_PACKAGING_BATCH_SEARCH = 'PackagingBatchSearchComponent';
  public static readonly LOG_PACKAGING_BATCH_FORM = 'PackagingBatchFormComponent';
  public static readonly LOG_LITIGATION_FILE_SEARCH = 'LitigationFileSearchComponent';
  public static readonly LOG_LITIGATION_FILE_FORM = 'LitigationFileFormComponent';
  public static readonly LOG_MATERIAL_AVAILABILITY_FORM = 'MaterialAvailabilityFormComponent';
  public static readonly LOG_MATERIAL_FORM = 'MaterialFormComponent';
  public static readonly LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH = 'MaterialRequestManagementSearchComponent';
  public static readonly LOG_MATERIAL_REQUEST_MANAGEMENT_FORM = 'MaterialRequestManagementFormComponent';
  public static readonly LOG_MATERIAL_SEARCH = 'MaterialSearchComponent';
  public static readonly LOG_DEA_DIA_SEARCH = 'DeaDiaSearchComponent';
  public static readonly LOG_GOODS_MATERIAL_SHIPMENT_FORM = 'MaterialShipmentFormComponent';
  public static readonly LOG_MATERIAL_SELECTION = 'MaterialSelectionComponent';
  public static readonly LOG_ORDER_DOCUMENT_SEARCH = 'OrderDocumentSearchComponent';
  public static readonly LOG_ORDER_DOCUMENT_FORM = 'OrderDocumentFormComponent';
  public static readonly LOG_SALES_DOCUMENT_SEARCH = 'SalesDocumentSearchComponent';
  public static readonly LOG_SALES_DOCUMENT_FORM = 'SalesDocumentFormComponent';
  public static readonly LOG_STOCK_VALUATION_SEARCH = 'StockValuationSearchComponent';
  public static readonly LOG_STOCK_VALUATION_FORM = 'StockValuationFormComponent';
  public static readonly LOG_STOCK_ALERT_SEARCH = 'StockAlertSearchComponent';
  public static readonly LOG_STOCK_ALERT_FORM = 'StockAlertFormComponent';
  public static readonly LOG_STOCK_STATUS_FORM = 'StockStatusFormComponent';
  public static readonly LOG_STOCK_STATUS_SEARCH = 'StockStatusSearchComponent';
  public static readonly LOG_STOCK_VIEW_FORM = 'StockViewFormComponent';
  public static readonly LOG_STOCK_VIEW_SEARCH = 'StockViewSearchComponent';
  public static readonly LOG_STOCK_CONSULT_SEARCH = 'StockConsultSearchComponent';
  public static readonly LOG_STOCK_CONSULT_FORM = 'StockConsultFormComponent';
  public static readonly LOG_STOCK_MOVEMENTS_SEARCH = 'StockMovementsSearchComponent';
  public static readonly LOG_STOCK_MOVEMENTS_SEARCH_STOCKPILLING = 'StockpillingSearcComponent';
  public static readonly LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING = 'StockpillingFormComponent';
  public static readonly LOG_STOCK_MOVEMENTS_SEARCH_PICKING = 'PickingSearchComponent';
  public static readonly LOG_STOCK_MOVEMENTS_FORM_PICKING = 'PickingFormComponent';
  public static readonly LOG_STOCK_MOVEMENT_FORM = 'StockMovementFormComponent';
  public static readonly LOG_STOCK_MOVEMENTS_FORM = 'StockMovementsFormComponent';
  public static readonly LOG_PACKAGE_FORM_COMPONENT = 'PackageFormComponent';
  public static readonly LOG_PACKAGE_SEARCH_COMPONENT = 'PackageSearchComponent';
  public static readonly LOG_PROCUREMENT_REQUEST_FORM = 'ProcurementRequestFormComponent';
  public static readonly LOG_PROCUREMENT_REQUEST_SEARCH = 'ProcurementRequestSearchComponent';
  public static readonly LOG_TECHNICAL_RECEIPT_FORM = 'TechnicalReceiptFormComponent';
  public static readonly LOG_TECHNICAL_RECEIPT_SEARCH = 'TechnicalReceiptSearchComponent';
  public static readonly LOG_TOOL_MAINTENANCE_PLANNING = 'ToolMaintenancePlanningComponent';
  public static readonly LOG_TOOL_SEARCH = 'ToolSearchComponent';
  public static readonly LOG_TOOL_FORM = 'ToolFormComponent';
  public static readonly LOG_TOOLS_MAINTENANCE_STATUS_SEARCH = 'ToolsMaintenanceStatusSearchComponent';
  public static readonly LOG_TOOLS_MAINTENANCE_STATUS_FORM = 'ToolsMaintenanceStatusFormComponent';
  public static readonly LOG_TOOLS_MAINTENANCE_PLANNING_SEARCH = 'ToolsMaintenancePlanningSearchComponent';
  public static readonly LOG_TOOLS_MAINTENANCE_PLANNING_FORM = 'ToolsMaintenancePlanningFormComponent';
  public static readonly LOG_TOOLS_CONTROL_GROUND_EQUIPMENT = 'ControlGroundEquipmentSearchComponent';
  public static readonly LOG_TRANSFER_ORDER_SEARCH = 'TransferOrderSearchComponent';
  public static readonly LOG_TRANSFER_ORDER_FORM = 'TransferOrderFormComponent';
  public static readonly LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM =
    'MaterialRequestTransferOrderManagementFormComponent';
  public static readonly LOG_MANUFACTURING_BATCH_SEARCH = 'ManufacturingBatchSearchComponent';
  public static readonly LOG_MANUFACTURING_BATCH_FORM = 'ManufacturingBatchFormComponent';

  /**************************************************************************
   * Maintenance module
   *************************************************************************/
  public static readonly MAI_UNIT_CONVERSION_MATRIX = 'UnitConversionMatrixComponent';
  public static readonly MAI_ASSET_REVIEW_SEARCH = 'ARSearchComponent';
  public static readonly MAI_EXTRACT_TASKS_APPLICATIONS = 'ExtractTasksApplicationsSearchComponent';
  public static readonly MAI_ASSET_REVIEW_FORM = 'AssetReviewFormComponent';
  public static readonly MAI_COCKPIT_INSPECTION_FORM = 'CockpitInspectionFormComponent';
  public static readonly MAI_COCKPIT_WORKSCOPE_FORM = 'CockpitWorkscopeFormComponent';
  public static readonly MAI_MANAGE_CONFIGURATION_FORM = 'ManageConfigurationFormComponent';
  public static readonly MAI_MANAGE_REMOVAL_CAUSES_FORM = 'ManageRemovalCausesFormComponent';
  public static readonly MAI_MEASURE_COMPONENT = 'ComponentMeasureComponent';
  public static readonly MAI_INFO_SUB_ASSEMBLY_FORM = 'InfoSubAssemblyComponent';
  public static readonly MAI_WORK_PACKAGE_FORM = 'WorkPackageFormComponent';
  public static readonly MAI_WORK_PACKAGE_SEARCH = 'WorkPackageSearchComponent';
  public static readonly MAI_WORK_ORDER_FORM = 'WorkOrderFormComponent';
  public static readonly MAI_UPDATE_LOGBOOK_FORM = 'UpdateLogbookFormComponent';
  public static readonly MAI_CONFIGURATION_CONTROL = 'ConfigurationControlComponent';
  public static readonly MAI_CONFIGURATION_CONTROL_SEARCH = 'ConfigurationControlSearchComponent';
  public static readonly MAI_FLIGHT_OPERATIONS = 'FlightOperationsValidationComponent';
  public static readonly MAI_COMPONENT_COCKPIT_SEARCH = 'ComponentCockpitSearchComponent';
  public static readonly MAI_COMPONENT_COCKPIT_FORM = 'ComponentCockpitFormComponent';
  public static readonly MAI_COMPONENT_COCKPIT_MATRIX = 'ComponentCockpitMatrixComponent';
  public static readonly MAI_COMPONENT_WORK_PACKAGE_SCHEDULING = 'WorkPackageSchedulingComponent';
  public static readonly MAI_COMPONENT_WORKS_MANAGEMENT = 'WorksManagementFormComponent';
  public static readonly MAI_MY_JOBS_CARDS_FORM = 'MyJobsCardsFormComponent';
  public static readonly MAI_COMPONENT_COCKPIT_OPERATION_SEARCH = 'ComponentCockpitOperationSearchComponent';
  public static readonly MAI_COMPONENT_COCKPIT_OPERATION_FORM = 'ComponentCockpitOperationFormComponent';
  public static readonly MAI_WORK_ORDERS_FORM = 'WorkOrdersFormComponent';
  public static readonly MAI_WORK_ORDERS_CALENDAR_FORM = 'WorkOrdersCalendarFormComponent';
  public static readonly MAI_DIALOG_IMPORT_ORDER_DOCUMENT = 'DialogImportWorkOrderDocumentComponent';
  public static readonly MAI_DIALOG_WORK_PACKAGE_DOCUMENT = 'DialogWorkPackageDocumentComponent';
  public static readonly MAI_MATERIAL_AVAILABILITY_INDICATORS = 'MaterialAvailabilityIndicatorsComponent';
  public static readonly MAI_PROCUREMENT_REQUESTS_TABLE = 'ProcurementRequestsTableComponent';
  public static readonly MAI_ITEM_INVENTORY = 'AddEditInventoryComponent';

  /**************************************************************************
   * Purchase Contract module
   *************************************************************************/
  public static readonly PCT_TABLE_DATA_SOURCE_WITH_HISTORY = 'TableDataSourceWithHistoryComponent';
  public static readonly PCT_EXAMPLE_FORM = 'ExampleFormComponent';
  public static readonly PCT_PURCHASE_CONTRACT_FORM = 'PurchaseContractFormComponent';
  public static readonly PCT_PURCHASE_PARTNER_DIALOG_FORM = 'DialogPurchaseContractPartnerComponent';
  public static readonly PCT_SLICES_DIALOG_FORM = 'DialogPurchaseContractSliceComponent';
  public static readonly PCT_PURCHASE_CONTRACT_SEARCH = 'PurchaseContractSearchComponent';
  public static readonly PCT_PURCHASE_ELEMENT_AND_SERVICES_DIALOG_FORM = 'ElementAndServicesDialogFormComponent';

  /**************************************************************************
   * Dashboard module
   *************************************************************************/
  public static readonly DAS_WORKSHOP_HOME = 'WorkshopHomeComponent';

  /**************************************************************************
   * User rights associated to each component
   *************************************************************************/
  public static readonly USER_RIGHTS: { [componentId: string]: ComponentAccessRight } = {
    [ComponentConstants.ADM_ATTRIBUTES_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_ATTRIBUTE, BidoFunctionTypeConstants.UC_MCH_ATTRIBUTE]
    },
    [ComponentConstants.ADM_ATTRIBUTES_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_ATTRIBUTE, BidoFunctionTypeConstants.UC_MCH_ATTRIBUTE]
    },
    [ComponentConstants.ADM_BACKGROUND_JOBS]: { profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID] },
    [ComponentConstants.ADM_BUSINESS_PARTNER_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_CUSTOMER] },
    [ComponentConstants.ADM_BUSINESS_PARTNER_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_CUSTOMER] },
    [ComponentConstants.ADM_CATALOG]: {
      useCaseList: [
        BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT,
        BidoFunctionTypeConstants.UC_FM_CUSTOMER,
        BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        BidoFunctionTypeConstants.UC_FM_EVENT,
        BidoFunctionTypeConstants.UC_FM_FLIGHT,
        BidoFunctionTypeConstants.UC_FM_FMD,
        BidoFunctionTypeConstants.UC_HR_MASTER_DATA,
        BidoFunctionTypeConstants.UC_IWB_IS_DEC,
        BidoFunctionTypeConstants.UC_IWB_IS_INV,
        BidoFunctionTypeConstants.UC_IWB_TWS_DEC,
        BidoFunctionTypeConstants.UC_IWB_TWS_INV,
        BidoFunctionTypeConstants.UC_MCH_BOM,
        BidoFunctionTypeConstants.UC_MCH_TASK,
        BidoFunctionTypeConstants.UC_MFO_FORECAST,
        BidoFunctionTypeConstants.UC_MM_MASTER_DATA,
        BidoFunctionTypeConstants.UC_FM_SUBSCRIPTION,
        BidoFunctionTypeConstants.UC_IWB_DECISION_OPTIMIZER
      ],
      profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID]
    },
    [ComponentConstants.ADM_CATALOG_EVENT_CONTEXT_FORM]: {
      profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID]
    },
    [ComponentConstants.ADM_CATALOG_EVENT_SYMPTOM_FORM]: {
      profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID]
    },
    [ComponentConstants.ADM_CATALOG_WORK_TEMPLATE_FORM]: {
      profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID]
    },
    [ComponentConstants.ADM_CONTACT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_CONTACT] },
    [ComponentConstants.ADM_CONTACT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_CONTACT] },
    [ComponentConstants.ADM_ENTERPRISE_DEFINITION]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.ADM_ENTERPRISE_MAP]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.ADM_PROFILES_FORM]: { profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID] },
    [ComponentConstants.ADM_PROFILES_SEARCH]: { profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID] },
    [ComponentConstants.ADM_SITE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.ADM_SITE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.ADM_USERS_FORM]: { profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID] },
    [ComponentConstants.ADM_USERS_SEARCH]: { profileList: [BidoProfileConstants.ADMINISTRATOR_PROFILE_ID] },
    [ComponentConstants.ADM_WAREHOUSE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.ADM_WAREHOUSE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MASTER_DATA] },
    [ComponentConstants.COL_ENGINEERING_DATA_EXCHANGE_SEARCH]: {
      useCaseList: [
        BidoFunctionTypeConstants.UC_MCH_BOM,
        BidoFunctionTypeConstants.UC_MCH_LOGISTICS,
        BidoFunctionTypeConstants.UC_MCH_TASK
      ]
    },
    [ComponentConstants.COL_FLEET_DATA_EXCHANGE]: {
      useCaseList: [
        BidoFunctionTypeConstants.UC_FM_AIRCRAFT,
        BidoFunctionTypeConstants.UC_FM_EQUIPMENT,
        BidoFunctionTypeConstants.UC_FM_EVENT,
        BidoFunctionTypeConstants.UC_FM_FLIGHT,
        BidoFunctionTypeConstants.UC_FM_OPERATION
      ]
    },
    [ComponentConstants.COL_HR_DATA_EXCHANGE]: { useCaseList: [BidoFunctionTypeConstants.UC_HR_EMPLOYEE] },
    [ComponentConstants.COL_LOGISTIC_DATA_EXCHANGE]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MATERIAL] },

    [ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_APPLICABLE_CONFIGURATION_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_APPLICABLE_CONFIGURATION_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_CONFIGURATION_DIAGRAM_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_CONFIGURATION_DIAGRAM_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_EVOLUTION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_EVOLUTION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_FAMILY_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_FAMILY_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_FUNCTIONAL_LOCATION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_FUNCTIONAL_LOCATION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_ITEM_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_ITEM_PART_NUMBER_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_ITEM_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_MAINTENANCE_PROGRAM_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_MODIFICATION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_MODIFICATION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_OPERATION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_OPERATION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_PART_NUMBER_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_PART_NUMBER_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_SBAD_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_SBAD_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM] },
    [ComponentConstants.ENG_SHOP_MANUAL]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_TASK_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_TASK_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_VISIT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_VISIT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MCH_TASK] },
    [ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },
    [ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MCH_BOM]
    },

    [ComponentConstants.FLE_AIRCRAFT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRCRAFT] },
    [ComponentConstants.FLE_AIRCRAFT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRCRAFT] },
    [ComponentConstants.FLE_ASSET_AT_DATE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_ASSET_AT_DATE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_ASSET_LOG_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_ASSET_MEASURE_LOG_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_DATA_COPY]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRCRAFT, BidoFunctionTypeConstants.UC_FM_EQUIPMENT]
    },
    [ComponentConstants.FLE_DATA_TRANSFER_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_TRANSFER] },
    [ComponentConstants.FLE_DEFECT_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_CONFIGURATION, BidoFunctionTypeConstants.UC_FM_EVENT]
    },
    [ComponentConstants.FLE_FDM_EVENT_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_CONFIGURATION, BidoFunctionTypeConstants.UC_FM_EVENT]
    },
    [ComponentConstants.FLE_EQUIPMENT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_EQUIPMENT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_ENGINE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_ENGINE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.FLE_EVENT_CREATE]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_CONFIGURATION, BidoFunctionTypeConstants.UC_FM_EVENT]
    },
    [ComponentConstants.FLE_EVENT_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_CONFIGURATION, BidoFunctionTypeConstants.UC_FM_EVENT]
    },
    [ComponentConstants.FLE_FLEET_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLEET] },
    [ComponentConstants.FLE_FLEET_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLEET] },

    [ComponentConstants.FLI_FLIGHT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLIGHT] },
    [ComponentConstants.FLI_FLIGHT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLIGHT] },
    [ComponentConstants.FLI_FLIGHTS_MISSION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_MISSION] },
    [ComponentConstants.FLI_FLIGHTS_MISSION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_MISSION] },
    [ComponentConstants.FLI_GONOGO_VALIDATION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLIGHT] },
    [ComponentConstants.FLI_LINE_MAINTENANCE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLIGHT] },
    [ComponentConstants.FLI_LINE_MAINTENANCE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_FLIGHT] },
    [ComponentConstants.FLI_OPERATION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_OPERATION] },

    [ComponentConstants.HR_EMPLOYEE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_HR_EMPLOYEE] },
    [ComponentConstants.HR_EMPLOYEE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_HR_EMPLOYEE] },
    [ComponentConstants.HR_STAFF_ALERT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_HR_COCKPIT] },
    [ComponentConstants.HR_STAFF_ALERT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_HR_COCKPIT] },

    [ComponentConstants.LOG_PROCUREMENT_REQUEST_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_PROCUREMENT] },
    [ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_PROCUREMENT] },
    [ComponentConstants.LOG_GOODS_MOVEMENT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_INVENTORY_WAREHOUSE_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_IWB_IM]
    },
    [ComponentConstants.LOG_INVENTORY_WAREHOUSE_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_IWB_IM]
    },
    [ComponentConstants.LOG_MATERIAL_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MATERIAL] },
    [ComponentConstants.LOG_MATERIAL_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_MATERIAL] },
    [ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MM_MATERIAL]
    },
    [ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_MM_MATERIAL]
    },
    [ComponentConstants.LOG_ORDER_DOCUMENT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_SP_PURCHASE] },
    [ComponentConstants.LOG_ORDER_DOCUMENT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_SP_PURCHASE] },
    [ComponentConstants.LOG_STOCK_ALERT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_ALERT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_CONSULT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_CONSULT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_STATUS_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_STATUS_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_VALUATION_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_STOCK_VALUATION_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_STOCK] },
    [ComponentConstants.LOG_TOOL_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_TOOLS] },
    [ComponentConstants.LOG_TOOL_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_MM_TOOLS] },
    [ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.MAI_ASSET_REVIEW_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS] },
    [ComponentConstants.MAI_ASSET_REVIEW_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS] },
    [ComponentConstants.MAI_CONFIGURATION_CONTROL]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_EQUIPMENT] },
    [ComponentConstants.MAI_FLIGHT_OPERATIONS]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_OPERATION] },
    [ComponentConstants.MAI_UNIT_CONVERSION_MATRIX]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS] },
    [ComponentConstants.DAS_WORKSHOP_HOME]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS] },
    [ComponentConstants.MAI_COMPONENT_WORK_PACKAGE_SCHEDULING]: {
      useCaseList: [BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT]
    },
    [ComponentConstants.MAI_COMPONENT_WORKS_MANAGEMENT]: {
      useCaseList: [BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT]
    },
    [ComponentConstants.MAI_UPDATE_LOGBOOK_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS] },
    [ComponentConstants.MAI_WORK_PACKAGE_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT] },
    [ComponentConstants.MAI_WORK_PACKAGE_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_AIRM_WP_MANAGEMENT] },
    [ComponentConstants.LOG_SALES_DOCUMENT_FORM]: { useCaseList: [BidoFunctionTypeConstants.UC_SP_SALES] },
    [ComponentConstants.LOG_SALES_DOCUMENT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_SP_SALES] },
    [ComponentConstants.MAI_COMPONENT_COCKPIT_MATRIX]: {
      useCaseList: [BidoFunctionTypeConstants.UC_FM_AIRWORTHINESS]
    },
    [ComponentConstants.PCT_PURCHASE_CONTRACT_SEARCH]: { useCaseList: [BidoFunctionTypeConstants.UC_SP_PURCHASE] },
    [ComponentConstants.LOG_LITIGATION_FILE_SEARCH]: {
      useCaseList: [BidoFunctionTypeConstants.UC_IWB_IM]
    },
    [ComponentConstants.LOG_LITIGATION_FILE_FORM]: {
      useCaseList: [BidoFunctionTypeConstants.UC_IWB_IM]
    }
  };
}
