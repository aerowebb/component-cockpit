import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class MaintenancePlanApi extends AbstractApi {
  private static readonly baseUrl: string = '/maintenance_plan';

  // public readonly exportForecastAssignmentsOfMaintenancePlan: string = super.appendToBaseUrl('/export_forecast_assignments_of_maintenance_plan');

  // public readonly getManHour: string = super.appendToBaseUrl('/get_man_hour');

  // public readonly getTotalCost: string = super.appendToBaseUrl('/get_total_cost');

  // public readonly getConfigurableAssetRowsOfMaintenancePlanByFamilyVariant: string = super.appendToBaseUrl('/get_configurable_asset_rows_of_maintenance_plan_by_family_variant');

  // public readonly calculateFleetMaintenancePlan: string = super.appendToBaseUrl('/calculate_fleet_maintenance_plan');

  // public readonly calculateAssetMaintenancePlan: string = super.appendToBaseUrl('/calculate_asset_maintenance_plan');

  // public readonly calculateMaintenancePlanEndDate: string = super.appendToBaseUrl('/calculate_maintenance_plan_end_date');

  // public readonly refreshElementsOfMaintenancePlan: string = super.appendToBaseUrl('/refresh_elements_of_maintenance_plan');

  // public readonly exportEventsOfMaintenancePlan: string = super.appendToBaseUrl('/export_events_of_maintenance_plan');

  // public readonly getAllQualifications: string = super.appendToBaseUrl('/get_all_qualifications');

  // public readonly getOperationsByPeriod: string = super.appendToBaseUrl('/get_operations_by_period');

  // public readonly isProjectInitialized: string = super.appendToBaseUrl('/is_project_initialized');

  // public readonly planifyAllBsdeScheduledEvents: string = super.appendToBaseUrl('/planify_all_bsde_scheduled_events');

  // public readonly moveBsdeScheduledEvent: string = super.appendToBaseUrl('/move_bsde_scheduled_event');

  // public readonly optimizeBsdeScheduledEvents: string = super.appendToBaseUrl('/optimize_bsde_scheduled_events');

  // public readonly regenerateWorkPackage: string = super.appendToBaseUrl('/regenerate_work_package');

  // public readonly camoGenerateWorkPackage: string = super.appendToBaseUrl('/camo_generate_work_package');

  // public readonly camoGenerateWorkPackage: string = super.appendToBaseUrl('/camo_generate_work_package');

  // public readonly camoGenerateWorkPackage: string = super.appendToBaseUrl('/camo_generate_work_package');

  // public readonly camoGenerateWorkOrder: string = super.appendToBaseUrl('/camo_generate_work_order');

  // public readonly camoGenerateWorkOrder: string = super.appendToBaseUrl('/camo_generate_work_order');

  public readonly createWorkPackageFromEvent: string = super.appendToBaseUrl('/create_work_package_from_event');

  public readonly createOrUpdateDefectTargetWorkOrder: string = super.appendToBaseUrl(
    '/create_or_update_defect_target_work_order'
  );

  public readonly findDefectTargetWorkOrder: string = super.appendToBaseUrl('/find_defect_target_work_order');

  public readonly findDefectTargetWorkPackage: string = super.appendToBaseUrl('/find_defect_target_work_package');

  // Schedule Maintenance Plan Apis

  public readonly loadAssetBaseMaintenancePlan: string = super.appendToBaseUrl('/load_asset_base_maintenance_plan');

  public readonly getBaseAssetMaintenancePlanStructure: string = super.appendToBaseUrl(
    '/get_base_asset_maintenance_plan_structure'
  );

  public readonly compareAmpWithOmp: string = super.appendToBaseUrl('/compare_amp_with_omp');

  public readonly approveCustomizeBaseMp: string = super.appendToBaseUrl('/approve_customize_base_mp');

  public readonly autoSelectMpTasksAlternatives: string = super.appendToBaseUrl('/auto_select_mp_tasks_alternatives');

  public readonly findReferencesForAssetMp: string = super.appendToBaseUrl('/find_references_for_asset_mp');

  public readonly addTaskBaseMp: string = super.appendToBaseUrl('/add_task_base_mp');

  public readonly removeTaskBaseMp: string = super.appendToBaseUrl('/remove_task_base_mp');

  public readonly deactivateTaskBaseMp: string = super.appendToBaseUrl('/deactivate_task_base_mp');

  public readonly activateTaskBaseMp: string = super.appendToBaseUrl('/activate_task_base_mp');

  public readonly getAllCountersBaseMp: string = super.appendToBaseUrl('/get_all_counters_base_mp');

  public readonly saveTaskCounterBaseMp: string = super.appendToBaseUrl('save_task_counter_base_mp');

  public readonly deleteTaskCounterBaseMp: string = super.appendToBaseUrl('delete_task_counter_base_mp');

  public readonly findReferencesForPeriodicity: string = super.appendToBaseUrl('find_references_for_periodicity');

  public readonly initMaintenanceForecastingCache: string = super.appendToBaseUrl('init_maintenance_forecasting_cache');

  public readonly clearMaintenanceForecastingCache: string = super.appendToBaseUrl(
    'clear_maintenance_forecasting_cache'
  );

  public readonly loadMaintenanceForecastingWithLocalRefreshOption: string = super.appendToBaseUrl(
    'load_maintenance_forecasting_with_local_refresh_option'
  );

  public readonly loadMaintenanceForecastingWithFromDbOption: string = super.appendToBaseUrl(
    'load_maintenance_forecasting_with_from_db_option'
  );

  public readonly loadMaintenanceForecastingWithForecasterOption: string = super.appendToBaseUrl(
    'load_maintenance_forecasting_with_local_forecaster_option'
  );

  public readonly loadMaintenanceForecastingWithOptimizerOption: string = super.appendToBaseUrl(
    'load_maintenance_forecasting_with_optimizer_option'
  );

  public readonly getWorkPackageWhereDefectIsAffected: string = super.appendToBaseUrl(
    'get_work_package_where_defect_is_affected'
  );

  public readonly getWorkPackageWhereScheduledEventIsAffected: string = super.appendToBaseUrl(
    'get_work_package_where_scheduled_event_is_affected'
  );

  public readonly getWorkPackageWhereUnscheduledEventIsAffected: string = super.appendToBaseUrl(
    'get_work_package_where_unscheduled_event_is_affected'
  );

  public readonly geAllMaintenanceForecastingCustomer: string = super.appendToBaseUrl(
    'get_all_maintenance_forecasting_customer'
  );

  public readonly geAllMaintenanceForecastingSite: string = super.appendToBaseUrl(
    'get_all_maintenance_forecasting_site'
  );

  public readonly isForecastProjectLocked: string = super.appendToBaseUrl('is_forecast_project_locked');

  public readonly findAllFamilyVariantByUcMfoNonRoutineEvent: string = super.appendToBaseUrl(
    'find_all_family_variant_by_uc_mfo_non_routine_event'
  );

  public readonly getAllMaintenanceForecastingFlightUsage: string = super.appendToBaseUrl(
    'get_all_maintenance_forecasting_flight_usage'
  );

  public readonly addBsdeEventSnChangeToWorkPackage: string = super.appendToBaseUrl(
    'add_bsde_event_sn_change_to_work_package'
  );

  public readonly addBsdeScheduledEventToWorkPackage: string = super.appendToBaseUrl(
    'add_bsde_scheduled_event_to_work_package'
  );

  public readonly addBsdeUnscheduledEventEvolutionToWorkPackage: string = super.appendToBaseUrl(
    'add_bsde_unscheduled_event_evolution_to_work_package'
  );

  public readonly addBsdeUnscheduledEventTaskToWorkPackage: string = super.appendToBaseUrl(
    'add_bsde_unscheduled_event_task_to_work_package'
  );

  public readonly addDeferredDefectEventToWorkPackage: string = super.appendToBaseUrl(
    'add_deferred_defect_event_to_work_package'
  );

  public readonly removeBsdeEventSnChangeFromWorkPackage: string = super.appendToBaseUrl(
    'remove_bsde_event_sn_change_from_work_package'
  );

  public readonly removeBsdeScheduledEventFromWorkPackage: string = super.appendToBaseUrl(
    'remove_bsde_scheduled_event_from_work_package'
  );

  public readonly removeBsdeUnscheduledEventEvolutionFromWorkPackage: string = super.appendToBaseUrl(
    'remove_bsde_unscheduled_event_evolution_from_work_package'
  );

  public readonly removeBsdeUnscheduledEventTaskFromWorkPackage: string = super.appendToBaseUrl(
    'remove_bsde_unscheduled_event_task_from_work_package'
  );

  public readonly removeDeferredDefectEventFromWorkPackage: string = super.appendToBaseUrl(
    'remove_deferred_defect_event_from_work_package'
  );

  public readonly selectMaintenancePlanTask: string = super.appendToBaseUrl('/select_maintenance_plan_task');

  public readonly updateMaintenanceForecasting: string = super.appendToBaseUrl('/update_maintenance_forecasting');

  public constructor() {
    super(MaintenancePlanApi.baseUrl);
  }
}
