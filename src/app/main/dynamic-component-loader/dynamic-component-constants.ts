// tslint:disable:max-line-length
import { ComponentConstants } from '../../shared/constants/component-constants';

import { DynamicComponentManifest } from './dynamic-component-manifest.interface';

export class DynamicComponentsConstants {
  // This array defines which "componentId" maps to which lazy-loaded module.
  public static readonly MANIFEST: DynamicComponentManifest[] = [
    {
      componentId: 'HomeComponent',
      path: 'dynamic-home-component',
      loadChildren: './home/home.module#HomeModule'
    },

    /**************************************************************************
     * Airworthiness Control
     *************************************************************************/
    {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
      path: 'dynamic-maintenance-airworthiness-control-for-asset-form-component',
      loadChildren: './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
    },
    {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM,
      path: 'dynamic-maintenance-airworthiness-control-for-fleet-form-component',
      loadChildren: './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
    },
    {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SEARCH,
      path: 'dynamic-maintenance-airworthiness-control-search-component',
      loadChildren: './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
    },
    {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
      path: 'dynamic-maintenance-schedule-maintenance-form-component',
      loadChildren: './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
    },
    {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH,
      path: 'dynamic-maintenance-schedule-maintenance-search-component',
      loadChildren: './maintenance/airworthiness-control/airworthiness-control.module#AirworthinessControlModule'
    },

    /**************************************************************************
     * Applicable Configuration
     *************************************************************************/
    {
      componentId: ComponentConstants.ENG_APPLICABLE_CONFIGURATION_FORM,
      path: 'dynamic-engineering-management-applicable-configuration-form-component',
      loadChildren:
        './engineering-management/applicable-configuration/applicable-configuration.module#ApplicableConfigurationModule'
    },
    {
      componentId: ComponentConstants.ENG_APPLICABLE_CONFIGURATION_SEARCH,
      path: 'dynamic-engineering-management-applicable-configuration-search-component',
      loadChildren:
        './engineering-management/applicable-configuration/applicable-configuration.module#ApplicableConfigurationModule'
    },

    /**************************************************************************
     * Collaborative Cockpit
     *************************************************************************/
    {
      componentId: ComponentConstants.COL_DATA_ENRICHMENT_FORM,
      path: 'dynamic-data-enrichment-form-component',
      loadChildren: './collaborative-cockpit/data-enrichment/data-enrichment.module#DataEnrichmentModule'
    },
    {
      componentId: ComponentConstants.COL_ENGINEERING_DATA_EXCHANGE_SEARCH,
      path: 'dynamic-engineering-data-exchange-search-component',
      loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
    },
    {
      componentId: ComponentConstants.COL_FLEET_DATA_EXCHANGE,
      path: 'dynamic-fleet-data-exchange-component',
      loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
    },
    {
      componentId: ComponentConstants.COL_FLIGHT_DATA_EXCHANGE,
      path: 'dynamic-flight-data-exchange-component',
      loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
    },
    {
      componentId: ComponentConstants.COL_HR_DATA_EXCHANGE,
      path: 'dynamic-hr-data-exchange-component',
      loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
    },
    {
      componentId: ComponentConstants.COL_LOGISTIC_DATA_EXCHANGE,
      path: 'dynamic-logistic-data-exchange-component',
      loadChildren: './collaborative-cockpit/collaborative-cockpit.module#CollaborativeCockpitModule'
    },
    {
      componentId: ComponentConstants.COL_PART_NUMBER_EXPORT_FORM,
      path: 'dynamic-part-number-export-form-component',
      loadChildren: './collaborative-cockpit/part-number-export/part-number-export.module#PartNumberExportModule'
    },
    {
      componentId: ComponentConstants.COL_XML_DATA_LOADING_FORM,
      path: 'dynamic-xml-data-loading-component',
      loadChildren: './collaborative-cockpit/xml-data-loading/xml-data-loading.module#XmlDataLoadingModule'
    },
    {
      componentId: ComponentConstants.COL_SBAD_EXPORT_FORM,
      path: 'dynamic-sbad-export-form-component',
      loadChildren: './collaborative-cockpit/sbad-export/sbad-export.module#SbadExportModule'
    },

    /**************************************************************************
     * Configuration Diagram
     *************************************************************************/
    {
      componentId: ComponentConstants.ENG_CONFIGURATION_DIAGRAM_FORM,
      path: 'dynamic-engineering-management-configuration-diagram-form-component',
      loadChildren:
        './engineering-management/configuration-diagram/configuration-diagram.module#ConfigurationDiagramModule'
    },
    {
      componentId: ComponentConstants.ENG_CONFIGURATION_DIAGRAM_SEARCH,
      path: 'dynamic-engineering-management-configuration-diagram-search-component',
      loadChildren:
        './engineering-management/configuration-diagram/configuration-diagram.module#ConfigurationDiagramModule'
    },

    /**************************************************************************
     * Employee Planning
     *************************************************************************/
    {
      componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_FORM,
      path: 'dynamic-human-resources-employee-planning-form-component',
      loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
    },
    {
      componentId: ComponentConstants.HR_EMPLOYEE_PLANNING_SEARCH,
      path: 'dynamic-human-resources-employee-planning-search-component',
      loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
    },
    {
      componentId: ComponentConstants.HR_VIEW_BY_COMPANY_FORM,
      path: 'dynamic-human-resources-view-by-company-form-component',
      loadChildren: './human-resources/employee-planning/employee-planning.module#EmployeePlanningModule'
    },

    /**************************************************************************
     * Flight
     *************************************************************************/
    {
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      path: 'dynamic-flight-operations-flight-form-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },
    {
      componentId: ComponentConstants.FLI_FLIGHT_SEARCH,
      path: 'dynamic-flight-operations-flight-search-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },
    {
      componentId: ComponentConstants.FLI_GONOGO_VALIDATION_FORM,
      path: 'dynamic-flight-operations-gonogo-validation-form-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },
    {
      componentId: ComponentConstants.FLI_LINE_MAINTENANCE_FORM,
      path: 'dynamic-flight-operations-line-maintenance-form-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },
    {
      componentId: ComponentConstants.FLI_LINE_MAINTENANCE_SEARCH,
      path: 'dynamic-flight-operations-line-maintenance-search-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },
    {
      componentId: ComponentConstants.FLI_FLIGHT_SCHEDULING_FORM,
      path: 'dynamic-flight-operations-flight-scheduling-form-component',
      loadChildren: './flight-operations/flight-scheduling/flight-scheduling.module#FlightSchedulingModule'
    },
    {
      componentId: ComponentConstants.FLI_FLIGHT_SCHEDULING_SEARCH,
      path: 'dynamic-flight-operations-flight-scheduling-search-component',
      loadChildren: './flight-operations/flight-scheduling/flight-scheduling.module#FlightSchedulingModule'
    },
    {
      componentId: ComponentConstants.FLI_OPERATIONAL_CONFIGURATION_SETTLING,
      path: 'dynamic-flight-operations-operational-configuration-settling-component',
      loadChildren: './flight-operations/flight/flight.module#FlightModule'
    },

    /**************************************************************************
     * Forecast maintenance
     *************************************************************************/
    {
      componentId: ComponentConstants.MAI_FORECAST_FORM,
      path: 'dynamic-maintenance-forecast-form-component',
      loadChildren: './maintenance/forecast/forecast.module#ForecastModule'
    },
    {
      componentId: ComponentConstants.MAI_FORECAST_SEARCH,
      path: 'dynamic-maintenance-forecast-search-component',
      loadChildren: './maintenance/forecast/forecast.module#ForecastModule'
    },

    /**************************************************************************
     * Goods Movement
     *************************************************************************/
    {
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_FORM,
      path: 'dynamic-logistics-goods-movement-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM,
      path: 'dynamic-material-availability-work-package-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_WORK_ORDER_FORM,
      path: 'dynamic-material-availability-work-order-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM,
      path: 'dynamic-material-availability-forecasting-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_PURCHASE_REQUEST_FORM,
      path: 'dynamic-goods-movement-purchase-request-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_WORK_PACKAGE_FORM,
      path: 'dynamic-goods-movement-work-package-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
      path: 'dynamic-goods-movement-work-order-form-component',
      loadChildren: './logistics/goods-movement/goods-movement.module#GoodsMovementModule'
    },

    /**************************************************************************
     * Material Availability
     *************************************************************************/
    {
      componentId: ComponentConstants.LOG_MATERIAL_AVAILABILITY_FORM,
      path: 'dynamic-material-availability-form-component',
      loadChildren: './logistics/material-availability/material-availability.module#MaterialAvailabilityModule'
    },
    /**************************************************************************
     * Task
     *************************************************************************/
    {
      componentId: ComponentConstants.ENG_TASK_FORM,
      path: 'dynamic-engineering-management-task-form-component',
      loadChildren: './engineering-management/task/task.module#TaskModule'
    },
    {
      componentId: ComponentConstants.ENG_TASK_SEARCH,
      path: 'dynamic-engineering-management-task-search-component',
      loadChildren: './engineering-management/task/task.module#TaskModule'
    },

    /**************************************************************************
     * Administration
     *************************************************************************/

    /* Business Partner */
    {
      componentId: ComponentConstants.ADM_BUSINESS_PARTNER_FORM,
      path: 'dynamic-administration-business-partner-form-component',
      loadChildren: './administration/business-partner/business-partner.module#BusinessPartnerModule'
    },
    {
      componentId: ComponentConstants.ADM_BUSINESS_PARTNER_SEARCH,
      path: 'dynamic-administration-business-partner-search-component',
      loadChildren: './administration/business-partner/business-partner.module#BusinessPartnerModule'
    },

    /* Contact */
    {
      componentId: ComponentConstants.ADM_CONTACT_FORM,
      path: 'dynamic-administration-contact-form-component',
      loadChildren: './administration/contact/contact.module#ContactModule'
    },
    {
      componentId: ComponentConstants.ADM_CONTACT_SEARCH,
      path: 'dynamic-administration-contact-search-component',
      loadChildren: './administration/contact/contact.module#ContactModule'
    },

    /* Enterprise definition */
    {
      componentId: ComponentConstants.ADM_ENTERPRISE_DEFINITION,
      path: 'dynamic-administration-enterprise-definition-component',
      loadChildren: './administration/enterprise-definition/enterprise-definition.module#EnterpriseDefinitionModule'
    },

    /* Enterprise map */
    {
      componentId: ComponentConstants.ADM_ENTERPRISE_MAP,
      path: 'dynamic-administration-enterprise-map-component',
      loadChildren: './administration/enterprise-map/enterprise-map.module#EnterpriseMapModule'
    },

    /* Event subscription */
    {
      componentId: ComponentConstants.ADM_EVENT_SUBSCRIPTION_FORM,
      path: 'dynamic-administration-event-subscription-form-component',
      loadChildren: './administration/event-subscription/event-subscription.module#EventSubscriptionModule'
    },
    {
      componentId: ComponentConstants.ADM_EVENT_SUBSCRIPTION_SEARCH,
      path: 'dynamic-administration-event-partner-search-component',
      loadChildren: './administration/event-subscription/event-subscription.module#EventSubscriptionModule'
    },

    /* Site */
    {
      componentId: ComponentConstants.ADM_SITE_SEARCH,
      path: 'dynamic-administration-site-search-component',
      loadChildren: './administration/site/site.module#SiteModule'
    },
    {
      componentId: ComponentConstants.ADM_SITE_FORM,
      path: 'dynamic-administration-site-form-component',
      loadChildren: './administration/site/site.module#SiteModule'
    },

    /* Warehouse */
    {
      componentId: ComponentConstants.ADM_WAREHOUSE_SEARCH,
      path: 'dynamic-administration-warehouse-search-component',
      loadChildren: './administration/warehouse/warehouse.module#WarehouseModule'
    },
    {
      componentId: ComponentConstants.ADM_WAREHOUSE_FORM,
      path: 'dynamic-administration-warehouse-form-component',
      loadChildren: './administration/warehouse/warehouse.module#WarehouseModule'
    },

    /* Workshop */
    {
      componentId: ComponentConstants.ADM_WORKSHOP_SEARCH,
      path: 'dynamic-administration-workshop-search-component',
      loadChildren: './administration/workshop/workshop.module#WorkshopModule'
    },
    {
      componentId: ComponentConstants.ADM_WORKSHOP_FORM,
      path: 'dynamic-administration-workshop-form-component',
      loadChildren: './administration/workshop/workshop.module#WorkshopModule'
    },

    {
      componentId: ComponentConstants.ADM_CATALOG,
      path: 'dynamic-contact-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_CATALOG_WORK_TEMPLATE_FORM,
      path: 'dynamic-work-template-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_CATALOG_EVENT_CONTEXT_FORM,
      path: 'dynamic-event-context-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_CATALOG_EVENT_SYMPTOM_FORM,
      path: 'dynamic-event-symptom-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_PROFILES_FORM,
      path: 'dynamic-profiles-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_PROFILES_SEARCH,
      path: 'dynamic-profiles-search-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_USERS_SEARCH,
      path: 'dynamic-users-search-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_USERS_FORM,
      path: 'dynamic-users-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_ATTRIBUTES_SEARCH,
      path: 'dynamic-administration-attributes-search-component',
      loadChildren: './administration/attributes/attributes.module#AttributesModule'
    },
    {
      componentId: ComponentConstants.ADM_ATTRIBUTES_FORM,
      path: 'dynamic-administration-attributes-form-component',
      loadChildren: './administration/attributes/attributes.module#AttributesModule'
    },
    {
      componentId: ComponentConstants.ADM_BACKGROUND_JOBS,
      path: 'dynamic-administration-background-jobs-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_SETTINGS_FORM,
      path: 'dynamic-administration-settings-form-component',
      loadChildren: './administration/settings/settings.module#SettingsModule'
    },
    {
      componentId: ComponentConstants.ADM_STOCK_TYPE_FORM,
      path: 'dynamic-administration-stock-type-form-component',
      loadChildren: './administration/administration.module#AdministrationModule'
    },
    {
      componentId: ComponentConstants.ADM_WORKFLOW_MANAGEMENT_SEARCH,
      path: 'dynamic-administration-workflow-management-search-component',
      loadChildren: './administration/workflow-management/workflow-management.module#WorkflowManagementModule'
    },
    {
      componentId: ComponentConstants.ADM_WORKFLOW_MANAGEMENT_FORM,
      path: 'dynamic-administration-workflow-management-form-component',
      loadChildren: './administration/workflow-management/workflow-management.module#WorkflowManagementModule'
    },
    {
      componentId: ComponentConstants.ADM_MONITORING,
      path: 'dynamic-monitoring-form-component',
      loadChildren: './administration/monitoring/monitoring.module#MonitoringModule'
    },
    {
      componentId: ComponentConstants.ADM_LICENSING_SEARCH,
      path: 'dynamic-licensing-search-component',
      loadChildren: './administration/licensing/licensing.module#LicensingModule'
    },
    {
      componentId: ComponentConstants.ADM_TODO_LIST_SEARCH,
      path: 'dynamic-todo-list-search-component',
      loadChildren: './administration/todo-list/todo-list.module#TodoListModule'
    },

    /**************************************************************************
     * Engineering Managament
     *************************************************************************/

    /* Operation */
    {
      componentId: 'OperationFormComponent',
      path: 'dynamic-engineering-management-operation-form-component',
      loadChildren: './engineering-management/operation/operation.module#OperationModule'
    },
    {
      componentId: 'OperationSearchComponent',
      path: 'dynamic-engineering-management-operation-search-component',
      loadChildren: './engineering-management/operation/operation.module#OperationModule'
    },

    {
      componentId: 'EvolutionFormComponent',
      path: 'dynamic-evolution-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'EvolutionSearchComponent',
      path: 'dynamic-evolution-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'FamilyFormComponent',
      path: 'dynamic-family-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'FamilySearchComponent',
      path: 'dynamic-family-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'FunctionalLocationFormComponent',
      path: 'dynamic-functional-location-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'FunctionalLocationSearchComponent',
      path: 'dynamic-functional-location-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'ModificationFormComponent',
      path: 'dynamic-modification-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'ModificationSearchComponent',
      path: 'dynamic-modification-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'PartNumberFormComponent',
      path: 'dynamic-part-number-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'PartNumberSearchComponent',
      path: 'dynamic-part-number-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_DEA_DIA_FORM,
      path: 'dynamic-dea-dia-form-component',
      loadChildren: './engineering-management/dea-dia/dea-dia.module#DeaDiaModule'
    },
    {
      componentId: ComponentConstants.LOG_DEA_DIA_SEARCH,
      path: 'dynamic-dea-dia-search-component',
      loadChildren: './engineering-management/dea-dia/dea-dia.module#DeaDiaModule'
    },
    {
      componentId: 'SbadFormComponent',
      path: 'dynamic-sbad-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_SBAD_SEARCH,
      path: 'dynamic-sbad-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'VisitFormComponent',
      path: 'dynamic-visit-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: 'VisitSearchComponent',
      path: 'dynamic-visit-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_SEARCH,
      path: 'dynamic-maintenance-program-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
      path: 'dynamic-maintenance-program-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_UPDATES_LIST,
      path: 'dynamic-maintenance-program-updates-list-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_SEARCH,
      path: 'dynamic-additional-maintenance-guideline-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM,
      path: 'dynamic-additional-maintenance-guideline-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_SEARCH,
      path: 'dynamic-airworthiness-directive-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM,
      path: 'dynamic-airworthiness-directive-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_ITEM_SEARCH,
      path: 'dynamic-engineering-management-item-search-component',
      loadChildren: './engineering-management/item/item.module#ItemModule'
    },
    {
      componentId: ComponentConstants.ENG_ITEM_FORM,
      path: 'dynamic-engineering-management-item-form-component',
      loadChildren: './engineering-management/item/item.module#ItemModule'
    },
    {
      componentId: ComponentConstants.ENG_ITEM_PART_NUMBER_FORM,
      path: 'dynamic-engineering-management-item-part-number-component',
      loadChildren:
        './engineering-management/item-part-number-form/item-part-number-form.module#ItemPartNumberFormModule'
    },
    {
      componentId: ComponentConstants.ENG_SHOP_MANUAL,
      path: 'dynamic-engineering-management-shop-manual-component',
      loadChildren: './engineering-management/shop-manual/shop-manual.module#ShopManualModule'
    },
    {
      componentId: ComponentConstants.ENG_MAI_UNIT_CONVERSION_MATRIX_SEARCH,
      path: 'dynamic-unit-conversion-matrix-search-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_MAI_UNIT_CONVERSION_MATRIX_FORM,
      path: 'dynamic-unit-conversion-matrix-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },
    {
      componentId: ComponentConstants.ENG_CHANGE_RECORD_FORM,
      path: 'dynamic-change-record-form-component',
      loadChildren: './engineering-management/engineering-management.module#EngineeringManagamentModule'
    },

    /**************************************************************************
     * Fleet Management
     *************************************************************************/
    {
      componentId: ComponentConstants.FLE_FDM_EVENT_FORM,
      path: 'dynamic-fdm-event-form-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_DEFECT_FORM,
      path: 'dynamic-defect-form-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },

    {
      componentId: ComponentConstants.LOG_TOOL_SEARCH,
      path: 'dynamic-fleet-management-tool-search-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOL_FORM,
      path: 'dynamic-fleet-management-tool-form-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
      path: 'dynamic-transfer-order-form-component',
      loadChildren: './logistics/transfer-order/transfer-order.module#TransferOrderModule'
    },
    {
      componentId: ComponentConstants.LOG_TRANSFER_ORDER_SEARCH,
      path: 'dynamic-transfer-order-search-component',
      loadChildren: './logistics/transfer-order/transfer-order.module#TransferOrderModule'
    },
    {
      componentId: ComponentConstants.FLE_AIRCRAFT_SEARCH,
      path: 'dynamic-fleet-management-aircraft-search-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      path: 'dynamic-fleet-management-aircraft-form-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_ENGINE_SEARCH,
      path: 'dynamic-fleet-management-engine-search-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      path: 'dynamic-fleet-management-engine-form-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_EQUIPMENT_SEARCH,
      path: 'dynamic-fleet-management-equipment-search-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      path: 'dynamic-fleet-management-equipment-form-component',
      loadChildren: './fleet-management/asset/asset.module#AssetModule'
    },
    {
      componentId: ComponentConstants.FLE_EVENT_SEARCH,
      path: 'dynamic-event-search-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      path: 'dynamic-event-create-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'FleetSearchComponent',
      path: 'dynamic-fleet-search-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'FleetFormComponent',
      path: 'dynamic-fleet-form-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'InstallAssetComponent',
      path: 'dynamic-install-asset-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'RemoveAssetComponent',
      path: 'dynamic-remove-asset-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_DATA_COPY,
      path: 'dynamic-fleet-data-copy-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_DATA_TRANSFER_SEARCH,
      path: 'dynamic-fleet-data-transfer-search-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_ASSET_LOG_FORM,
      path: 'dynamic-asset-log-form-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_ASSET_MEASURE_LOG_FORM,
      path: 'dynamic-asset-measure-log-form-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'AssetMaintenancePlanComponent',
      path: 'dynamic-asset-maintenance-plan-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: 'FunctionalLocationAssignmentComponent',
      path: 'dynamic-functional-location-assignment-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },
    {
      componentId: ComponentConstants.FLE_ASSET_AT_DATE_SEARCH,
      path: 'dynamic-asset-at-date-search-component',
      loadChildren: './fleet-management/asset-at-date/asset-at-date.module#AssetAtDateModule'
    },
    {
      componentId: ComponentConstants.FLE_ASSET_AT_DATE_FORM,
      path: 'dynamic-asset-at-date-form-component',
      loadChildren: './fleet-management/asset-at-date/asset-at-date.module#AssetAtDateModule'
    },

    /**************************************************************************
     * Flight Operations
     *************************************************************************/
    {
      componentId: 'FLIOperationSearchComponent',
      path: 'dynamic-operation-search-component',
      loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
    },
    {
      componentId: 'MissionSearchComponent',
      path: 'dynamic-mission-search-component',
      loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
    },
    {
      componentId: 'MissionFormComponent',
      path: 'dynamic-mission-form-component',
      loadChildren: './flight-operations/flight-operations.module#FlightOperationsModule'
    },
    {
      componentId: ComponentConstants.FLI_RUNWAY_SCHEDULING_FORM,
      path: 'dynamic-runway-scheduling-component',
      loadChildren: './flight-operations/runway-scheduling/runway-scheduling.module#RunwaySchedulingModule'
    },

    /**************************************************************************
     *  Human Resources
     *************************************************************************/
    {
      componentId: 'EmployeeSearchComponent',
      path: 'dynamic-employee-search-component',
      loadChildren: './human-resources/human-resources.module#HumanResourcesModule'
    },
    {
      componentId: 'EmployeeFormComponent',
      path: 'dynamic-employee-form-component',
      loadChildren: './human-resources/human-resources.module#HumanResourcesModule'
    },
    {
      componentId: ComponentConstants.HR_STAFF_ALERT_SEARCH,
      path: 'dynamic-staff-alert-search-component',
      loadChildren: './human-resources/staff-alert/staff-alert.module#StaffAlertModule'
    },
    {
      componentId: ComponentConstants.HR_STAFF_ALERT_FORM,
      path: 'dynamic-staff-alert-form-component',
      loadChildren: './human-resources/staff-alert/staff-alert.module#StaffAlertModule'
    },

    /**************************************************************************
     *  Logistics
     *************************************************************************/
    {
      componentId: 'MaterialSearchComponent',
      path: 'dynamic-material-search-component',
      loadChildren: './logistics/material/material.module#MaterialModule'
    },
    {
      componentId: 'MaterialFormComponent',
      path: 'dynamic-material-form-component',
      loadChildren: './logistics/material/material.module#MaterialModule'
    },
    {
      componentId: 'InventoryByWarehouseSearchComponent',
      path: 'dynamic-logistics-inventory-by-warehouse-search-component',
      loadChildren: './logistics/inventory-by-warehouse/inventory-by-warehouse.module#InventoryByWareHouseModule'
    },
    {
      componentId: 'InventoryByWarehouseFormComponent',
      path: 'dynamic-logistics-inventory-by-warehouse-form-component',
      loadChildren: './logistics/inventory-by-warehouse/inventory-by-warehouse.module#InventoryByWareHouseModule'
    },
    {
      componentId: ComponentConstants.LOG_LOCAL_GOODS_RECEIPT_SEARCH,
      path: 'dynamic-local-goods-receipt-search-component',
      loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
    },
    {
      componentId: ComponentConstants.LOG_EXTERNAL_GOODS_RECEIPT_SEARCH,
      path: 'dynamic-external-goods-receipt-search-component',
      loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
      path: 'dynamic-goods-receipt-search-component',
      loadChildren: './logistics/goods-receipt/goods-receipt.module#GoodsReceiptModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_EXTERNAL_SHIPMENT_SEARCH,
      path: 'dynamic-local-shipment-search-component',
      loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_LOCAL_SHIPMENT_SEARCH,
      path: 'dynamic-external-shipment-search-component',
      loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_SHIPMENT_FORM,
      path: 'dynamic-shipment-folder-form-component',
      loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
    },
    {
      componentId: ComponentConstants.LOG_GOODS_MATERIAL_SHIPMENT_FORM,
      path: 'dynamic-material-shipment-form-component',
      loadChildren: './logistics/shipment-folder/shipment-folder.module#ShipmentFolderModule'
    },
    {
      componentId: ComponentConstants.LOG_PACKAGE_SEARCH_COMPONENT,
      path: 'dynamic-package-search-component',
      loadChildren: './logistics/package/package.module#PackageModule'
    },
    {
      componentId: ComponentConstants.LOG_PACKAGE_FORM_COMPONENT,
      path: 'dynamic-package-form-component',
      loadChildren: './logistics/package/package.module#PackageModule'
    },
    {
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_SEARCH,
      path: 'dynamic-packaging-batch-search-component',
      loadChildren: './logistics/packaging-batch/packaging-batch.module#PackagingBatchModule'
    },
    {
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      path: 'dynamic-packaging-batch-search-component',
      loadChildren: './logistics/packaging-batch/packaging-batch.module#PackagingBatchModule'
    },
    {
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_SEARCH,
      path: 'dynamic-procurement-request-search-component',
      loadChildren: './logistics/procurement-request/procurement-request.module#ProcurementRequestModule'
    },
    {
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      path: 'dynamic-procurement-request-form-component',
      loadChildren: './logistics/procurement-request/procurement-request.module#ProcurementRequestModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_VALUATION_SEARCH,
      path: 'dynamic-stock-valuation-search-component',
      loadChildren: './logistics/stock-valuation/stock-valuation.module#StockValuationModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_VALUATION_FORM,
      path: 'dynamic-stock-valuation-form-component',
      loadChildren: './logistics/stock-valuation/stock-valuation.module#StockValuationModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_ALERT_SEARCH,
      path: 'dynamic-stock-alert-search-component',
      loadChildren: './logistics/stock-alert/stock-alert.module#StockAlertModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_ALERT_FORM,
      path: 'dynamic-stock-alert-form-component',
      loadChildren: './logistics/stock-alert/stock-alert.module#StockAlertModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_STATUS_FORM,
      path: 'dynamic-stock-status-form-component',
      loadChildren: './logistics/stock-status/stock-status.module#StockStatusModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_STATUS_SEARCH,
      path: 'dynamic-stock-status-search-component',
      loadChildren: './logistics/stock-status/stock-status.module#StockStatusModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_CONSULT_SEARCH,
      path: 'dynamic-stock-consult-search-component',
      loadChildren: './logistics/stock-consult/stock-consult.module#StockConsultModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_CONSULT_FORM,
      path: 'dynamic-stock-consult-form-component',
      loadChildren: './logistics/stock-consult/stock-consult.module#StockConsultModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_SEARCH,
      path: 'dynamic-stock-movements-search-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_SEARCH_PICKING,
      path: 'dynamic-stock-movements-search-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_SEARCH_STOCKPILLING,
      path: 'dynamic-stock-movements-search-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING,
      path: 'dynamic-stock-movements-form-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM_PICKING,
      path: 'dynamic-stock-movements-form-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
      path: 'dynamic-stock-movements-form-component',
      loadChildren: './logistics/stock-movements/stock-movements.module#StockMovementsModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_MOVEMENT_FORM,
      path: 'dynamic-stock-movement-form-component',
      loadChildren: './logistics/stock-movement/stock-movement.module#StockMovementModule'
    },
    {
      componentId: ComponentConstants.LOG_ORDER_DOCUMENT_SEARCH,
      path: 'dynamic-order-document-search-component',
      loadChildren: './logistics/order-document/order-document.module#OrderDocumentModule'
    },
    {
      componentId: ComponentConstants.LOG_ORDER_DOCUMENT_FORM,
      path: 'dynamic-order-document-form-component',
      loadChildren: './logistics/order-document/order-document.module#OrderDocumentModule'
    },
    {
      componentId: ComponentConstants.LOG_SALES_DOCUMENT_SEARCH,
      path: 'dynamic-sales-document-search-component',
      loadChildren: './logistics/sales-document/sales-document.module#SalesDocumentModule'
    },
    {
      componentId: ComponentConstants.LOG_SALES_DOCUMENT_FORM,
      path: 'dynamic-sales-document-form-component',
      loadChildren: './logistics/sales-document/sales-document.module#SalesDocumentModule'
    },
    {
      componentId: ComponentConstants.LOG_TECHNICAL_RECEIPT_SEARCH,
      path: 'dynamic-technical-receipt-search-component',
      loadChildren: './logistics/technical-receipt/technical-receipt.module#TechnicalReceiptModule'
    },
    {
      componentId: ComponentConstants.LOG_TECHNICAL_RECEIPT_FORM,
      path: 'dynamic-technical-receipt-form-component',
      loadChildren: './logistics/technical-receipt/technical-receipt.module#TechnicalReceiptModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_STATUS_SEARCH,
      path: 'dynamic-tools-maintenance-status-search-component',
      loadChildren: './logistics/tools-maintenance-status/tools-maintenance-status.module#ToolsMaintenanceStatusModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_STATUS_FORM,
      path: 'dynamic-tools-maintenance-status-form-component',
      loadChildren: './logistics/tools-maintenance-status/tools-maintenance-status.module#ToolsMaintenanceStatusModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_SEARCH,
      path: 'dynamic-tools-maintenance-planning-search-component',
      loadChildren:
        './logistics/tools-maintenance-planning/tools-maintenance-planning.module#ToolsMaintenancePlanningModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
      path: 'dynamic-tools-maintenance-planning-form-component',
      loadChildren:
        './logistics/tools-maintenance-planning/tools-maintenance-planning.module#ToolsMaintenancePlanningModule'
    },
    {
      componentId: ComponentConstants.LOG_TOOLS_CONTROL_GROUND_EQUIPMENT,
      path: 'dynamic-control-ground-equipment-component',
      loadChildren: './logistics/control-ground-equipment/control-ground-equipment.module#ControlGroundEquipmentModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
      path: 'dynamic-material-request-management-search-component',
      loadChildren:
        './logistics/material-request-management/material-request-management.module#MaterialRequestManagementModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
      path: 'dynamic-material-request-management-form-component',
      loadChildren:
        './logistics/material-request-management/material-request-management.module#MaterialRequestManagementModule'
    },
    {
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
      path: 'dynamic-material-request-transfer-order-management-form-component',
      loadChildren:
        './logistics/material-request-transfer-order-management/material-request-transfer-order-management.module#MaterialRequestTransferOrderManagementModule'
    },
    {
      componentId: ComponentConstants.LOG_LITIGATION_FILE_SEARCH,
      path: 'dynamic-litigation-file-search-component',
      loadChildren: './logistics/litigation-file/litigation-file.module#LitigationFileModule'
    },
    {
      componentId: ComponentConstants.LOG_LITIGATION_FILE_FORM,
      path: 'dynamic-litigation-file-form-component',
      loadChildren: './logistics/litigation-file/litigation-file.module#LitigationFileModule'
    },
    {
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_SEARCH,
      path: 'dynamic-manufacturing-batch-search-component',
      loadChildren: './logistics/manufacturing-batch/manufacturing-batch.module#ManufacturingBatchModule'
    },
    {
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      path: 'dynamic-manufacturing-batch-form-component',
      loadChildren: './logistics/manufacturing-batch/manufacturing-batch.module#ManufacturingBatchModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_VIEW_SEARCH,
      path: 'dynamic-stock-view-search-component',
      loadChildren: './logistics/stock-view/stock-view.module#StockViewModule'
    },
    {
      componentId: ComponentConstants.LOG_STOCK_VIEW_FORM,
      path: 'dynamic-stock-view-form-component',
      loadChildren: './logistics/stock-view/stock-view.module#StockViewModule'
    },

    /**************************************************************************
     *  Maintenance
     *************************************************************************/

    {
      componentId: 'UnitConversionMatrixComponent',
      path: 'dynamic-unit-conversion-matrix-component',
      loadChildren: './maintenance/maintenance.module#MaintenanceModule'
    },
    {
      componentId: ComponentConstants.DAS_WORKSHOP_HOME,
      path: 'dynamic-workshop-home-component',
      loadChildren: './maintenance/maintenance.module#MaintenanceModule'
    },
    {
      componentId: ComponentConstants.DAS_REFERENTIAL,
      path: 'dynamic-referential-dashboard-component',
      loadChildren: './maintenance/maintenance.module#MaintenanceModule'
    },
    {
      componentId: ComponentConstants.MAI_ASSET_REVIEW_SEARCH,
      path: 'dynamic-asset-review-search-component',
      loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
    },
    {
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      path: 'dynamic-asset-review-form-component',
      loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
    },
    {
      componentId: ComponentConstants.MAI_EXTRACT_TASKS_APPLICATIONS,
      path: 'dynamic-extract-tasks-applications-component',
      loadChildren:
        './maintenance/extract-tasks-applications/extract-tasks-applications.module#ExtractTasksApplicationsModule'
    },
    {
      componentId: ComponentConstants.MAI_FLIGHT_OPERATIONS,
      path: 'dynamic-flight-operations-validation-component',
      loadChildren: './maintenance/asset-review/asset-review.module#AssetReviewModule'
    },
    {
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL_SEARCH,
      path: 'dynamic-configuration-control-search-component',
      loadChildren: './maintenance/configuration-control/configuration-control.module#ConfigurationControlModule'
    },
    /* Work Package */
    {
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      path: 'work-package-form-component',
      loadChildren: './maintenance/work-package/work-package.module#WorkPackageModule'
    },
    {
      componentId: ComponentConstants.MAI_WORK_PACKAGE_SEARCH,
      path: 'work-package-search-component',
      loadChildren: './maintenance/work-package/work-package.module#WorkPackageModule'
    },
    {
      componentId: ComponentConstants.MAI_WORK_ORDERS_FORM,
      path: 'work-orders-form-component',
      loadChildren: './maintenance/work-orders/work-orders.module#WorkOrdersModule'
    },
    {
      componentId: ComponentConstants.MAI_WORK_ORDERS_CALENDAR_FORM,
      path: 'work-orders-calendar-form-component',
      loadChildren: './maintenance/work-orders-calendar/work-orders-calendar.module#WorkOrdersCalendarModule'
    },
    {
      componentId: ComponentConstants.MAI_UPDATE_LOGBOOK_FORM,
      path: 'dynamic-update-logbook-form-component',
      loadChildren: './maintenance/update-logbook/update-logbook.module#UpdateLogbookModule'
    },
    {
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      path: 'dynamic-configuration-control-component',
      loadChildren: './maintenance/configuration-control/configuration-control.module#ConfigurationControlModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_WORK_PACKAGE_SCHEDULING,
      path: 'dynamic-work-package-scheduling-component',
      loadChildren: './maintenance/maintenance.module#MaintenanceModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_WORKS_MANAGEMENT,
      path: 'dynamic-works-management-component',
      loadChildren: './maintenance/works-management/works-management.module#WorksManagementModule'
    },

    /* Component Cockpit  */
    {
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_FORM,
      path: 'dynamic-maintenance-component-cockpit-form-component',
      loadChildren: './maintenance/component-cockpit/component-cockpit.module#ComponentCockpitModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_SEARCH,
      path: 'dynamic-maintenance-component-cockpit-search-component',
      loadChildren: './maintenance/component-cockpit/component-cockpit.module#ComponentCockpitModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_MATRIX,
      path: 'dynamic-component-cockpit-matrix-component',
      loadChildren:
        './maintenance/component-cockpit-matrix/component-cockpit-matrix.module#ComponentCockpitMatrixModule'
    },
    {
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      path: 'work-order-form-component',
      loadChildren: './maintenance/work-order/work-order.module#WorkOrderModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_SEARCH,
      path: 'dynamic-component-cockpit-operation-component',
      loadChildren:
        './maintenance/component-cockpit-operation/component-cockpit-operation.module#ComponentCockpitOperationModule'
    },
    {
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_FORM,
      path: 'dynamic-component-cockpit-operation-form-component',
      loadChildren:
        './maintenance/component-cockpit-operation/component-cockpit-operation.module#ComponentCockpitOperationModule'
    },
    {
      componentId: ComponentConstants.MAI_COCKPIT_INSPECTION_FORM,
      path: 'dynamic-cockpit-inspection-form-component',
      loadChildren: './maintenance/cockpit-inspection/cockpit-inspection.module#CockpitInspectionModule'
    },
    {
      componentId: ComponentConstants.MAI_COCKPIT_WORKSCOPE_FORM,
      path: 'dynamic-cockpit-workscope-form-component',
      loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
    },
    {
      componentId: ComponentConstants.MAI_INFO_SUB_ASSEMBLY_FORM,
      path: 'dynamic-item-sub-assembly-form-component',
      loadChildren: './maintenance/cockpit-inspection/cockpit-inspection.module#CockpitInspectionModule'
    },
    {
      componentId: ComponentConstants.MAI_ITEM_INVENTORY,
      path: 'dynamic-item-inventory-form-component',
      loadChildren: '../shared/components/add-edit-inventory/add-edit-inventory.module#AddEditInventoryModule'
    },
    {
      componentId: ComponentConstants.MAI_MANAGE_CONFIGURATION_FORM,
      path: 'dynamic-manage-configuration-form-component',
      loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
    },
    {
      componentId: ComponentConstants.MAI_MANAGE_REMOVAL_CAUSES_FORM,
      path: 'dynamic-manage-removal-cause-form-component',
      loadChildren: './maintenance/cockpit-workscope/cockpit-workscope.module#CockpitWorkscopeModule'
    },
    {
      componentId: ComponentConstants.MAI_MEASURE_COMPONENT,
      path: 'dynamic-mesaure-component',
      loadChildren: '../shared/components/component-measure/component-measure.module#ComponentMeasureModule'
    },

    /* My Job Cards */
    {
      componentId: ComponentConstants.MAI_MY_JOBS_CARDS_FORM,
      path: 'dynamic-my-jobs-cards-form-component',
      loadChildren: './maintenance/my-jobs-cards/my-jobs-cards.module#MyJobsCardsModule'
    },

    /* Purchase & Contract */
    {
      componentId: ComponentConstants.PCT_PURCHASE_CONTRACT_FORM,
      path: 'dynamic-purchase-contract-form-component',
      loadChildren:
        '../modules/purchase-contract/components/purchase-contract/purchase-contract.module#PurchaseContractModule'
    },
    {
      componentId: ComponentConstants.PCT_PURCHASE_CONTRACT_SEARCH,
      path: 'dynamic-purchase-contract-search-component',
      loadChildren:
        '../modules/purchase-contract/components/purchase-contract/purchase-contract.module#PurchaseContractModule'
    },

    /* Work package global search */
    {
      componentId: ComponentConstants.FLE_SEARCH_WORK_PACKAGE,
      path: 'dynamic-search-work-package-component',
      loadChildren: './fleet-management/fleet-management.module#FleetManagementModule'
    },

    {
      componentId: ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_FORM,
      path: 'dynamic-engineering-management-operational-configuration-form-component',
      loadChildren:
        './engineering-management/operational-configuration/operational-configuration.module#OperationalConfigurationModule'
    },
    {
      componentId: ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_SEARCH,
      path: 'dynamic-engineering-management-operational-configuration-search-component',
      loadChildren:
        './engineering-management/operational-configuration/operational-configuration.module#OperationalConfigurationModule'
    }
  ];
}
