import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class AirworthinessManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/airworthiness_management';

  // public readonly findBireMaintenancePlanByEquipment: string = super.appendToBaseUrl('/find_bire_maintenance_plan_by_equipment');

  // public readonly findBidoMaintenancePlanByEquipment: string = super.appendToBaseUrl('/find_bido_maintenance_plan_by_equipment');

  public readonly findBidoMaintenancePlanByPlanCode: string = super.appendToBaseUrl(
    '/find_bido_maintenance_plan_by_plan_code'
  );

  // public readonly findBireItemsAssociatedWithMaintenanceProgram: string = super.appendToBaseUrl('/find_bire_items_associated_with_maintenance_program');

  // public readonly findBirePnsAssociatedWithMaintenanceProgram: string = super.appendToBaseUrl('/find_bire_pns_associated_with_maintenance_program');

  // public readonly findAssetsEligibleToAirworthiness: string = super.appendToBaseUrl('/find_assets_eligible_to_airworthiness');

  public readonly findAllAssetWithBidoMaintenancePlan: string = super.appendToBaseUrl(
    '/find_assets_with_bido_maintenance_plan'
  );

  public readonly findBidoEquipmentsEligibleToMaintenancePlan: string = super.appendToBaseUrl(
    '/find_bido_equipments_eligible_to_maintenance_plan'
  );

  // public readonly getUnitEquivalentValueBySourceUnitAndValue: string = super.appendToBaseUrl('/get_unit_equivalent_value_by_source_unit_and_value');

  // public readonly getUnitCodesWithoutFhEquivalentByRemainingText: string = super.appendToBaseUrl('/get_unit_codes_without_fh_equivalent_by_remaining_text');

  // public readonly applyTask: string = super.appendToBaseUrl('/apply_task');

  // public readonly reloadMeasures: string = super.appendToBaseUrl('/reload_measures');

  // public readonly addCounter: string = super.appendToBaseUrl('/add_counter');

  // public readonly removeCounter: string = super.appendToBaseUrl('/remove_counter');

  // public readonly findBidoEquipmentsByCriteria: string = super.appendToBaseUrl('/find_bido_equipments_by_criteria');

  // public readonly initializeMaintenancePlan: string = super.appendToBaseUrl('/initialize_maintenance_plan');

  // public readonly initializeMaintenancePlan: string = super.appendToBaseUrl('/initialize_maintenance_plan');

  public readonly autoSelectMaintenancePlanTasks: string = super.appendToBaseUrl('/auto_select_maintenance_plan_tasks');

  // public readonly reloadEquipmentEvolutions: string = super.appendToBaseUrl('/reload_equipment_evolutions');

  // public readonly customizePeriodicity: string = super.appendToBaseUrl('/customize_periodicity');

  // public readonly setSelectedMaintenancePlanTask: string = super.appendToBaseUrl('/set_selected_maintenance_plan_task');

  // public readonly updateTaskApplicationDate: string = super.appendToBaseUrl('/update_task_application_date');

  // public readonly includeMaintenancePlanTask: string = super.appendToBaseUrl('/include_maintenance_plan_task');

  // public readonly excludeMaintenancePlanTask: string = super.appendToBaseUrl('/exclude_maintenance_plan_task');

  // public readonly addMaintenancePlanTask: string = super.appendToBaseUrl('/add_maintenance_plan_task');

  // public readonly removeMaintenancePlanTask: string = super.appendToBaseUrl('/remove_maintenance_plan_task');

  // public readonly upgradeMaintenancePlan: string = super.appendToBaseUrl('/upgrade_maintenance_plan');

  // public readonly setMPCustomizationStatus: string = super.appendToBaseUrl('/set_mp_customization_status');

  public readonly updateMaintenancePlans: string = super.appendToBaseUrl('/update_maintenance_plans');

  // public readonly getRemainingEquivalentByUnit: string = super.appendToBaseUrl('/get_remaining_equivalent_by_unit');

  // public readonly getMaxEquivalentFromValues: string = super.appendToBaseUrl('/get_max_equivalent_from_values');

  public readonly findAllAircraftUpcomingEvent: string = super.appendToBaseUrl('/find_all_aircraft_upcoming_event');

  public readonly saveAssetAssignedToMaintenancePlan: string = super.appendToBaseUrl(
    '/save_asset_assign_to_maintenance_plan'
  );

  public readonly controlEvolutionsInterdependenceForScheduleMaintenanceInput: string = super.appendToBaseUrl(
    '/control_evolutions_interdependence_for_schedule_maintenance'
  );

  public readonly createWorkPackage: string = super.appendToBaseUrl('/create_work_package');

  public readonly initializeScheduleMaintenance: string = super.appendToBaseUrl('/init_schedule_maintenance');

  public readonly initializeMaintenancePlanStructure: string = super.appendToBaseUrl(
    '/init_maintenance_plan_structure'
  );

  public readonly generateAirworthinessControlTable: string = super.appendToBaseUrl(
    '/generate_airworthiness_control_table'
  );

  public readonly checkEquipmentForAirworthinessControl: string = super.appendToBaseUrl(
    '/check_equipment_for_airworthiness_control'
  );

  public readonly getCsnLabelForAirworthinessControl: string = super.appendToBaseUrl(
    '/get_csn_label_for_airworthiness_control'
  );

  public readonly getTsnLabelForAirworthinessControl: string = super.appendToBaseUrl(
    '/get_tsn_label_for_airworthiness_control'
  );

  public readonly computePotentialForAirworthinessControlInput: string = super.appendToBaseUrl(
    '/compute_potential_for_airworthiness_control_input'
  );

  public readonly computeRemainingForAd: string = super.appendToBaseUrl('/compute_remaining_for_ad');

  public readonly computeRemainingForDefect: string = super.appendToBaseUrl('/compute_remaining_for_defect');

  public readonly computeRemainingForDocument: string = super.appendToBaseUrl('/compute_remaining_for_document');

  public readonly computeRemainingForLlp: string = super.appendToBaseUrl('/compute_remaining_for_llp');

  public readonly computeRemainingForTask: string = super.appendToBaseUrl('/compute_remaining_for_task');

  public readonly generateWorkPackageList: string = super.appendToBaseUrl('/generate_work_package_list');

  public readonly controlBaseMaintenanceSelection: string = super.appendToBaseUrl(
    '/control_base_maintenance_selection'
  );

  public readonly removeFromWorkPackage: string = super.appendToBaseUrl('/remove_from_work_package');

  public readonly addToWorkPackage: string = super.appendToBaseUrl('/add_to_work_package');

  public readonly counterListFromMaintenancePlan: string = super.appendToBaseUrl('/counter_list_from_maintenance_plan');

  public readonly taskGroupListFromMaintenancePlan: string = super.appendToBaseUrl(
    '/task_group_list_from_maintenance_plan'
  );

  public readonly getAssetCsnFromMaintenancePlan: string = super.appendToBaseUrl(
    '/get_asset_csn_from_maintenance_plan'
  );

  public readonly getAssetTsnFromMaintenancePlan: string = super.appendToBaseUrl(
    '/get_asset_tsn_from_maintenance_plan'
  );

  public readonly getTaskApplicationHistory: string = super.appendToBaseUrl('/get_task_application_history');

  public readonly saveTaskApplication: string = super.appendToBaseUrl('/save_task_application');

  public readonly getAllCounterFromMaintenancePlanInput: string = super.appendToBaseUrl(
    '/get_all_counter_from_maintenance_plan'
  );

  public readonly saveTaskCounter: string = super.appendToBaseUrl('/save_task_counter');

  public readonly getWorkPackageList: string = super.appendToBaseUrl('/get_work_package_list');

  public readonly getPotentialEquivalentValues: string = super.appendToBaseUrl('/get_potential_equivalent_values');

  public readonly exportDueList: string = super.appendToBaseUrl('/export_due_list');

  public readonly createAcrsEvent: string = super.appendToBaseUrl('/create_acrs_event');

  public readonly getAssetDefectList: string = super.appendToBaseUrl('/get_asset_defect_list');

  public readonly closeAssetDefect: string = super.appendToBaseUrl('/close_defect');

  public readonly associateDefectsAcrsEvent: string = super.appendToBaseUrl('/associate_defects_acrs_event');

  public readonly getAssetFlightList: string = super.appendToBaseUrl('/get_asset_flight_list');

  public readonly getAssetPostponedWorkOrderList: string = super.appendToBaseUrl(
    '/get_asset_postponed_work_order_list'
  );

  public readonly getAssetUpcomingEventsPotentialUnit: string = super.appendToBaseUrl(
    '/get_asset_upcoming_events_potential_unit'
  );

  public readonly getAssetAirworthinessDocuments: string = super.appendToBaseUrl('/get_asset_airwothiness_documents');

  public readonly getAssetReviewTabsData: string = super.appendToBaseUrl('/get_asset_review_tabs_data');

  public readonly findWorkOrderOriginDetails: string = super.appendToBaseUrl('/find_work_order_origin_data');

  public readonly clearAirworthinessControlCache: string = super.appendToBaseUrl('/clear_airworthiness_control_cache');

  public readonly clearScheduleMaintenanceCache: string = super.appendToBaseUrl('/clear_schedule_maintenance_cache');

  public readonly findCsnAndTsnValues: string = super.appendToBaseUrl('/find_csn_and_tsn_values');

  public readonly findAllAssetForAirworthinessControl: string = super.appendToBaseUrl(
    '/find_all_asset_for_airworthiness_control'
  );

  public readonly findAMPsCompliantToItemOrPn: string = super.appendToBaseUrl('/find_amps_compliant_to_item_or_pn');

  public readonly applyTaskForScheduleMaintenance: string = super.appendToBaseUrl(
    '/apply_task_for_schedule_maintenance'
  );

  public readonly updateTaskApplicationDateForScheduleMaintenance: string = super.appendToBaseUrl(
    '/update_task_application_date_for_schedule_maintenance'
  );

  public readonly findAllAssetForTools: string = super.appendToBaseUrl('/find_all_asset_for_tools');

  public readonly getOperationalStatusMap: string = super.appendToBaseUrl('/get_operational_status_map');

  public readonly applyTaskForFlight: string = super.appendToBaseUrl('/apply_task_for_flight');

  public readonly calculateBidmProjectStatus: string = super.appendToBaseUrl('/calculate_bidm_project_status');

  public readonly extractTasksApplicationsFromAssetCodeListAndTaskKeyList: string = super.appendToBaseUrl(
    '/extract_tasks_applications_from_asset_code_and_task_key_list'
  );

  public constructor() {
    super(AirworthinessManagementApi.baseUrl);
  }
}
