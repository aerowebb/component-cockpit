import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ProjectManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/project_management';

  // public readonly findBsdeTargetsSelectedByItemAndItemFatherAndCon figurationNumberAndProjectId: string = super.appendToBaseUrl('/find_bsde_targets_selected_by_item_and_item_father_and_configuration_number_and_project_id');
  public readonly findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode: string = super.appendToBaseUrl(
    '/find_bsde_availabilities_by_project_and_availability_type_and_availability_code'
  );
  public readonly findBsdeProjectsByProjectCriteria: string = super.appendToBaseUrl(
    '/find_bsde_projects_by_project_criteria'
  );
  // public readonly removeBsdeMcEvolutionsByProjectId: string = super.appendToBaseUrl('/remove_bsde_mc_evolutions_by_project_id');
  // public readonly findBsdeInventorysByProjectIdAndPnAndSn: string = super.appendToBaseUrl('/find_bsde_inventorys_by_project_id_and_pn_and_sn');
  // public readonly removeBsdeTargetsByProjectIdAndItem: string = super.appendToBaseUrl('/remove_bsde_targets_by_project_id_and_item');
  // public readonly removeBsdeConfigurationsByProjectId: string = super.appendToBaseUrl('/remove_bsde_configurations_by_project_id');
  // public readonly findBsdeConfigurationsByProjectId: string = super.appendToBaseUrl('/find_bsde_configurations_by_project_id');
  // public readonly removeBsdeDecisionByInventoryAndProjectId: string = super.appendToBaseUrl('/remove_bsde_decision_by_inventory_and_project_id');
  // public readonly findBsdeAttributesByAttributeName: string = super.appendToBaseUrl('/find_bsde_attributes_by_attribute_name');

  public readonly findBsdeProjectAttributesByProject: string = super.appendToBaseUrl(
    '/find_bsde_project_attributes_by_project'
  );

  // public readonly findBsdeInventoryCountersByInventory: string = super.appendToBaseUrl('/find_bsde_inventory_counters_by_inventory');
  // public readonly removeBsdeInventoryCountersByInventory: string = super.appendToBaseUrl('/remove_bsde_inventory_counters_by_inventory');
  // public readonly removeBsdeWorkOrderByInventoryAndProjectId: string = super.appendToBaseUrl('/remove_bsde_work_order_by_inventory_and_project_id');
  // public readonly unlockBsdeProjectLogbooksBySession: string = super.appendToBaseUrl('/unlock_bsde_project_logbooks_by_session');
  // public readonly removeBsdeMaintenancePlansByProjectId: string = super.appendToBaseUrl('/remove_bsde_maintenance_plans_by_project_id');
  // public readonly findBsdeMaintenancePlansByProjectId: string = super.appendToBaseUrl('/find_bsde_maintenance_plans_by_project_id');
  // public readonly findBsdeProjectTaskCountersByProjectId: string = super.appendToBaseUrl('/find_bsde_project_task_counters_by_project_id');
  // public readonly updateTargetIsSelectedOfBsdeTarget: string = super.appendToBaseUrl('/update_target_is_selected_of_bsde_target');
  // public readonly removeBsdeScheduledEventsByProjectId: string = super.appendToBaseUrl('/remove_bsde_scheduled_events_by_project_id');
  // public readonly findBsdeScheduledEventsByProjectId: string = super.appendToBaseUrl('/find_bsde_scheduled_events_by_project_id');
  // public readonly findBsdeEventEventsByEventEventId: string = super.appendToBaseUrl('/find_bsde_event_events_by_event_event_id');
  // public readonly findBsdeEvolutionsByProjectIdAndConfigurableItem: string = super.appendToBaseUrl('/find_bsde_evolutions_by_project_id_and_configurable_item');

  // public readonly removeBsdeEvolutionsByProjectAndConfigurableItem: string = super.appendToBaseUrl('/remove_bsde_evolutions_by_project_and_configurable_item');

  // public readonly findBsdeInventoryAttributesByNameAndValue: string = super.appendToBaseUrl('/find_bsde_inventory_attributes_by_name_and_value');

  // public readonly findBsdeInventorysByItemAndProjectId: string = super.appendToBaseUrl('/find_bsde_inventorys_by_item_and_project_id');

  // public readonly findBsdeReportContentOfBsdeReport: string = super.appendToBaseUrl('/find_bsde_report_content_of_bsde_report');

  // public readonly findBsdeReportsByLogisticsReportCode: string = super.appendToBaseUrl('/find_bsde_reports_by_logistics_report_code');

  // public readonly findBsdeDocumentContentOfBsdeDocument: string = super.appendToBaseUrl('/find_bsde_document_content_of_bsde_document');

  public readonly findBsdeProjectAttributeByProjectId: string = super.appendToBaseUrl(
    '/find_bsde_project_attribute_by_project_id'
  );

  // public readonly getAttributeBooleanValueOfDecision: string = super.appendToBaseUrl('/get_attribute_boolean_value_of_decision');

  // public readonly getAttributeBooleanValueOfInventory: string = super.appendToBaseUrl('/get_attribute_boolean_value_of_inventory');

  // public readonly setAttributeBooleanValueOfDecision: string = super.appendToBaseUrl('/set_attribute_boolean_value_of_decision');

  // public readonly setAttributeBooleanValueOfInventory: string = super.appendToBaseUrl('/set_attribute_boolean_value_of_inventory');

  // public readonly lockBsdeDecision: string = super.appendToBaseUrl('/lock_bsde_decision');

  // public readonly findBsdeAwCustom: string = super.appendToBaseUrl('/find_bsde_aw_custom');

  // public readonly findBsdeDecision: string = super.appendToBaseUrl('/find_bsde_decision');

  // public readonly createBsdeTask: string = super.appendToBaseUrl('/create_bsde_task');

  // public readonly removeBsdeTask: string = super.appendToBaseUrl('/remove_bsde_task');

  public readonly createBsdeEvent: string = super.appendToBaseUrl('/create_bsde_event');

  public readonly updateBsdeEvent: string = super.appendToBaseUrl('/update_bsde_event');

  // public readonly removeBsdeEvent: string = super.appendToBaseUrl('/remove_bsde_event');

  // public readonly findBsdeEvent: string = super.appendToBaseUrl('/find_bsde_event');

  // public readonly createBsdeReport: string = super.appendToBaseUrl('/create_bsde_report');

  // public readonly updateBsdeReport: string = super.appendToBaseUrl('/update_bsde_report');

  // public readonly removeBsdeReport: string = super.appendToBaseUrl('/remove_bsde_report');

  // public readonly findBsdeFinding: string = super.appendToBaseUrl('/find_bsde_finding');

  // public readonly createForecast: string = super.appendToBaseUrl('/create_forecast');

  public readonly findBsdeProject: string = super.appendToBaseUrl('/find_bsde_project');

  // public readonly createBsdeTarget: string = super.appendToBaseUrl('/create_bsde_target');

  // public readonly findBsdeInventoryAttributesByProjectidAndInventoryId: string = super.appendToBaseUrl('/find_bsde_inventory_attributes_by_projectid_and_inventory_id');

  // public readonly findBsdeInventorysByItemAndItemFatherAndProjectId: string = super.appendToBaseUrl('/find_bsde_inventorys_by_item_and_item_father_and_project_id');

  // public readonly findBsdeTargetsOfSelectedConfigurationByProjectId: string = super.appendToBaseUrl('/find_bsde_targets_of_selected_configuration_by_project_id');

  // public readonly removeBsdeInventorysByItemAndItemFatherAndProjectId: string = super.appendToBaseUrl('/remove_bsde_inventorys_by_item_and_item_father_and_project_id');

  public readonly createBsdeProject: string = super.appendToBaseUrl('/create_bsde_project');

  public readonly updateBsdeProject: string = super.appendToBaseUrl('/update_bsde_project');

  public readonly removeBsdeProject: string = super.appendToBaseUrl('/remove_bsde_project');
  public readonly removeComponentCockpit: string = super.appendToBaseUrl('/remove_component_cockpit');

  // public readonly findNotClosedForecastsByMandant: string = super.appendToBaseUrl('/find_not_closed_forecasts_by_mandant');

  public readonly findBsdeProjectByProjectNumber: string = super.appendToBaseUrl(
    '/find_bsde_project_by_project_number'
  );

  // public readonly findBsdeProjectsByPnAndSnCodes: string = super.appendToBaseUrl('/find_bsde_projects_by_pn_and_sn_codes');

  public readonly findBsdeProjectsByFleetId: string = super.appendToBaseUrl('/find_bsde_projects_by_fleet_id');

  // public readonly updateSelectedTargetOfProject: string = super.appendToBaseUrl('/update_selected_target_of_project');

  // public readonly updateValidityOUTOfBsdeInventory: string = super.appendToBaseUrl('/update_validity_out_of_bsde_inventory');

  // public readonly createBsdeEvolution: string = super.appendToBaseUrl('/create_bsde_evolution');

  // public readonly createBsdeMcEvolution: string = super.appendToBaseUrl('/create_bsde_mc_evolution');

  // public readonly saveBsdeMcEvolution: string = super.appendToBaseUrl('/save_bsde_mc_evolution');

  // public readonly removeBsdeEvolutionsByProjectId: string = super.appendToBaseUrl('/remove_bsde_evolutions_by_project_id');

  // public readonly findBsdeEvolutionsByProject: string = super.appendToBaseUrl('/find_bsde_evolutions_by_project');

  // public readonly findBsdeMcEvolutionsByProjectId: string = super.appendToBaseUrl('/find_bsde_mc_evolutions_by_project_id');

  // public readonly removeBsdeWorkscopesByProjectId: string = super.appendToBaseUrl('/remove_bsde_workscopes_by_project_id');

  // public readonly createBsdeWorkscope: string = super.appendToBaseUrl('/create_bsde_workscope');

  // public readonly findBsdeWorkscopesByProjectId: string = super.appendToBaseUrl('/find_bsde_workscopes_by_project_id');

  // public readonly findBsdeWorkscope: string = super.appendToBaseUrl('/find_bsde_workscope');

  // public readonly findBsdeWorkscopesByTagNumber: string = super.appendToBaseUrl('/find_bsde_workscopes_by_tag_number');

  // public readonly findBsdeInventorysByProjectId: string = super.appendToBaseUrl('/find_bsde_inventorys_by_project_id');

  // public readonly createBsdeCounter: string = super.appendToBaseUrl('/create_bsde_counter');

  // public readonly updateBsdeCounter: string = super.appendToBaseUrl('/update_bsde_counter');

  // public readonly createBsdeInventory: string = super.appendToBaseUrl('/create_bsde_inventory');

  // public readonly updateBsdeInventory: string = super.appendToBaseUrl('/update_bsde_inventory');

  // public readonly updateBsdeWorkscope: string = super.appendToBaseUrl('/update_bsde_workscope');

  // public readonly updateBsdeInventorySAPorFMData: string = super.appendToBaseUrl('/update_bsde_inventory_sa_por_fm_data');

  // public readonly removeBsdeInventorysByProjectId: string = super.appendToBaseUrl('/remove_bsde_inventorys_by_project_id');

  // public readonly removeBsdeInventory: string = super.appendToBaseUrl('/remove_bsde_inventory');

  // public readonly findBsdeInventorysByPnAndSn: string = super.appendToBaseUrl('/find_bsde_inventorys_by_pn_and_sn');

  // public readonly removeBsdeTargetsByProjectId: string = super.appendToBaseUrl('/remove_bsde_targets_by_project_id');

  // public readonly createBsdeConfiguration: string = super.appendToBaseUrl('/create_bsde_configuration');

  // public readonly saveBsdeConfiguration: string = super.appendToBaseUrl('/save_bsde_configuration');

  // public readonly findBsdeDecisionsByProjectId: string = super.appendToBaseUrl('/find_bsde_decisions_by_project_id');

  // public readonly createBsdeDecision: string = super.appendToBaseUrl('/create_bsde_decision');

  // public readonly updateBsdeDecision: string = super.appendToBaseUrl('/update_bsde_decision');

  // public readonly removeBsdeDecision: string = super.appendToBaseUrl('/remove_bsde_decision');

  // public readonly createBsdeAttribute: string = super.appendToBaseUrl('/create_bsde_attribute');

  // public readonly updateBsdeAttribute: string = super.appendToBaseUrl('/update_bsde_attribute');

  // public readonly removeBsdeAttribute: string = super.appendToBaseUrl('/remove_bsde_attribute');

  // public readonly findBsdeAttribute: string = super.appendToBaseUrl('/find_bsde_attribute');

  public readonly findBsdeAttributes: string = super.appendToBaseUrl('/find_bsde_attributes');

  public readonly createBsdeProjectAttribute: string = super.appendToBaseUrl('/create_bsde_project_attribute');

  // public readonly updateBsdeProjectAttribute: string = super.appendToBaseUrl('/update_bsde_project_attribute');

  public readonly removeBsdeProjectAttribute: string = super.appendToBaseUrl('/remove_bsde_project_attribute');

  // public readonly findBsdeProjectAttribute: string = super.appendToBaseUrl('/find_bsde_project_attribute');

  // public readonly createBsdeReturnProject: string = super.appendToBaseUrl('/create_bsde_return_project');

  // public readonly removeBsdeReturnProject: string = super.appendToBaseUrl('/remove_bsde_return_project');

  // public readonly findBsdeReturnProject: string = super.appendToBaseUrl('/find_bsde_return_project');

  // public readonly findBsdeReturnProjectsByProject: string = super.appendToBaseUrl('/find_bsde_return_projects_by_project');

  // public readonly findBireReturnReasonsByProject: string = super.appendToBaseUrl('/find_bire_return_reasons_by_project');

  // public readonly createBsdeReturnReason: string = super.appendToBaseUrl('/create_bsde_return_reason');

  // public readonly findBsdeReturnReason: string = super.appendToBaseUrl('/find_bsde_return_reason');

  // public readonly removeBsdeReturnReason: string = super.appendToBaseUrl('/remove_bsde_return_reason');

  // public readonly updateBsdeReturnReason: string = super.appendToBaseUrl('/update_bsde_return_reason');

  // public readonly createBsdeInventoryCounter: string = super.appendToBaseUrl('/create_bsde_inventory_counter');

  // public readonly updateBsdeInventoryCounter: string = super.appendToBaseUrl('/update_bsde_inventory_counter');

  // public readonly findBsdeProjectCountersByProject: string = super.appendToBaseUrl('/find_bsde_project_counters_by_project');

  // public readonly createBsdeProjectCounter: string = super.appendToBaseUrl('/create_bsde_project_counter');

  // public readonly removeBsdeProjectCounter: string = super.appendToBaseUrl('/remove_bsde_project_counter');

  // public readonly createBsdeWorkOrder: string = super.appendToBaseUrl('/create_bsde_work_order');

  // public readonly updateBsdeWorkorder: string = super.appendToBaseUrl('/update_bsde_workorder');

  // public readonly removeBsdeWorkOrder: string = super.appendToBaseUrl('/remove_bsde_work_order');

  // public readonly findBsdeWorkOrder: string = super.appendToBaseUrl('/find_bsde_work_order');

  // public readonly createBsdeOperation: string = super.appendToBaseUrl('/create_bsde_operation');

  // public readonly findBsdeOperationsByWorkOrder: string = super.appendToBaseUrl('/find_bsde_operations_by_work_order');

  // public readonly removeBsdeOperationsByWorkOrder: string = super.appendToBaseUrl('/remove_bsde_operations_by_work_order');

  // public readonly createBsdeFinding: string = super.appendToBaseUrl('/create_bsde_finding');

  // public readonly findBsdeFindingsByInventory: string = super.appendToBaseUrl('/find_bsde_findings_by_inventory');

  // public readonly removeBsdeFindingsByInventory: string = super.appendToBaseUrl('/remove_bsde_findings_by_inventory');

  // public readonly updateBsdeFinding: string = super.appendToBaseUrl('/update_bsde_finding');

  // public readonly removeBsdeFinding: string = super.appendToBaseUrl('/remove_bsde_finding');

  // public readonly lockBsdeInventory: string = super.appendToBaseUrl('/lock_bsde_inventory');

  // public readonly lockBsdeWorkOrder: string = super.appendToBaseUrl('/lock_bsde_work_order');

  // public readonly lockBsdeProjectLogbook: string = super.appendToBaseUrl('/lock_bsde_project_logbook');

  // public readonly lockBsdeProjectCM: string = super.appendToBaseUrl('/lock_bsde_project_cm');

  // public readonly findLockUserOfBsdeInventory: string = super.appendToBaseUrl('/find_lock_user_of_bsde_inventory');

  // public readonly findLockUserOfBsdeDecision: string = super.appendToBaseUrl('/find_lock_user_of_bsde_decision');

  // public readonly findLockUserOfBsdeWorkOrder: string = super.appendToBaseUrl('/find_lock_user_of_bsde_work_order');

  // public readonly findLockUserOfBsdeProjectLogbook: string = super.appendToBaseUrl('/find_lock_user_of_bsde_project_logbook');

  // public readonly findLockUserOfBsdeProjectCM: string = super.appendToBaseUrl('/find_lock_user_of_bsde_project_cm');

  // public readonly unlockBsdeInventory: string = super.appendToBaseUrl('/unlock_bsde_inventory');

  // public readonly unlockBsdeDecision: string = super.appendToBaseUrl('/unlock_bsde_decision');

  // public readonly unlockBsdeWorkOrder: string = super.appendToBaseUrl('/unlock_bsde_work_order');

  // public readonly unlockBsdeProjectLogbook: string = super.appendToBaseUrl('/unlock_bsde_project_logbook');

  // public readonly unlockBsdeProjectCM: string = super.appendToBaseUrl('/unlock_bsde_project_cm');

  // public readonly unlockBsdeInventorysBySession: string = super.appendToBaseUrl('/unlock_bsde_inventorys_by_session');

  // public readonly unlockBsdeDecisionsBySession: string = super.appendToBaseUrl('/unlock_bsde_decisions_by_session');

  // public readonly unlockBsdeWorkOrdersBySession: string = super.appendToBaseUrl('/unlock_bsde_work_orders_by_session');

  // public readonly unlockBsdeProjectCMsBySession: string = super.appendToBaseUrl('/unlock_bsde_project_c_ms_by_session');

  // public readonly removeUserSessionToProject: string = super.appendToBaseUrl('/remove_user_session_to_project');

  // public readonly findAllUserSessionsInBSDE: string = super.appendToBaseUrl('/find_all_user_sessions_in_bsde');

  // public readonly findSessionsLockingObjectsInBSDE: string = super.appendToBaseUrl('/find_sessions_locking_objects_in_bsde');

  // public readonly findBsdeAwCustoms: string = super.appendToBaseUrl('/find_bsde_aw_customs');

  // public readonly createBsdeAwCustom: string = super.appendToBaseUrl('/create_bsde_aw_custom');

  // public readonly updateBsdeAwCustom: string = super.appendToBaseUrl('/update_bsde_aw_custom');

  // public readonly findBsdeInventoryAttributesByProjectIdAndAttributeName: string = super.appendToBaseUrl('/find_bsde_inventory_attributes_by_project_id_and_attribute_name');

  // public readonly findBsdeReportsByMandantAndProjectIdAndReportCodeAndReportName: string = super.appendToBaseUrl('/find_bsde_reports_by_mandant_and_project_id_and_report_code_and_report_name');

  // public readonly removeBsdeReportsByMandantAndProjectIdAndReportCodeAndReportName: string = super.appendToBaseUrl('/remove_bsde_reports_by_mandant_and_project_id_and_report_code_and_report_name');

  // public readonly findBsdeProjectsByPnAndSnAndAttributeIdAndAttributeValue: string = super.appendToBaseUrl('/find_bsde_projects_by_pn_and_sn_and_attribute_id_and_attribute_value');

  // public readonly findBsdeTargetsByItemAndConfigurationNumberAndProjectId: string = super.appendToBaseUrl('/find_bsde_targets_by_item_and_configuration_number_and_project_id');

  // public readonly findBsdeAwCustomValue: string = super.appendToBaseUrl('/find_bsde_aw_custom_value');

  // public readonly findBsdeInventory: string = super.appendToBaseUrl('/find_bsde_inventory');

  // public readonly createBsdeMaintenancePlan: string = super.appendToBaseUrl('/create_bsde_maintenance_plan');

  // public readonly createBsdeTrendModel: string = super.appendToBaseUrl('/create_bsde_trend_model');

  // public readonly removeBsdeTrendModelsByProjectId: string = super.appendToBaseUrl('/remove_bsde_trend_models_by_project_id');

  // public readonly findBsdeTrendModelsByProjectId: string = super.appendToBaseUrl('/find_bsde_trend_models_by_project_id');

  // public readonly createBsdeProjectTaskCounter: string = super.appendToBaseUrl('/create_bsde_project_task_counter');

  // public readonly removeBsdeProjectTaskCounter: string = super.appendToBaseUrl('/remove_bsde_project_task_counter');

  public readonly createBsdeScheduledEvent: string = super.appendToBaseUrl('/create_bsde_scheduled_event');

  public readonly updateBsdeScheduledEvent: string = super.appendToBaseUrl('/update_bsde_scheduled_event');

  // public readonly findBsdeScheduledEvent: string = super.appendToBaseUrl('/find_bsde_scheduled_event');

  // public readonly findBsdeEventsByEventCriteria: string = super.appendToBaseUrl('/find_bsde_events_by_event_criteria');

  // public readonly createBsdeEventEvent: string = super.appendToBaseUrl('/create_bsde_event_event');

  // public readonly removeBsdeEventEventsByProjectId: string = super.appendToBaseUrl('/remove_bsde_event_events_by_project_id');

  // public readonly findBsdeEventEventsByProjectId: string = super.appendToBaseUrl('/find_bsde_event_events_by_project_id');

  // public readonly findBsdeEventEventsByEventId: string = super.appendToBaseUrl('/find_bsde_event_events_by_event_id');

  // public readonly createBsdeSparePart: string = super.appendToBaseUrl('/create_bsde_spare_part');

  // public readonly removeBsdeSparePartsByProjectId: string = super.appendToBaseUrl('/remove_bsde_spare_parts_by_project_id');

  // public readonly findBsdeSparePartsByProjectId: string = super.appendToBaseUrl('/find_bsde_spare_parts_by_project_id');

  // public readonly updateSapSendDateOfBsdeWorkOrder: string = super.appendToBaseUrl('/update_sap_send_date_of_bsde_work_order');

  // public readonly updateSapSendDateOfBsdeDecision: string = super.appendToBaseUrl('/update_sap_send_date_of_bsde_decision');

  // public readonly updateSapSendDateOfBsdeInventory: string = super.appendToBaseUrl('/update_sap_send_date_of_bsde_inventory');

  // public readonly updateBsdeEvolution: string = super.appendToBaseUrl('/update_bsde_evolution');

  // public readonly createBsdeInventoryAttribute: string = super.appendToBaseUrl('/create_bsde_inventory_attribute');

  // public readonly createBsdeDecisionAttribute: string = super.appendToBaseUrl('/create_bsde_decision_attribute');

  // public readonly updateBsdeInventoryAttribute: string = super.appendToBaseUrl('/update_bsde_inventory_attribute');

  // public readonly updateBsdeDecisionAttribute: string = super.appendToBaseUrl('/update_bsde_decision_attribute');

  // public readonly removeBsdeInventoryAttribute: string = super.appendToBaseUrl('/remove_bsde_inventory_attribute');

  // public readonly removeBsdeDecisionAttribute: string = super.appendToBaseUrl('/remove_bsde_decision_attribute');

  // public readonly findBsdeInventoryAttribute: string = super.appendToBaseUrl('/find_bsde_inventory_attribute');

  // public readonly findBsdeDecisionAttribute: string = super.appendToBaseUrl('/find_bsde_decision_attribute');

  // public readonly findBsdeReportsByReportCode: string = super.appendToBaseUrl('/find_bsde_reports_by_report_code');

  // public readonly createBsdeDocument: string = super.appendToBaseUrl('/create_bsde_document');

  // public readonly updateBsdeDocument: string = super.appendToBaseUrl('/update_bsde_document');

  // public readonly removeBsdeDocument: string = super.appendToBaseUrl('/remove_bsde_document');

  // public readonly findBsdeDocumentsByInventory: string = super.appendToBaseUrl('/find_bsde_documents_by_inventory');

  // public readonly findBsdeDocumentsByFinding: string = super.appendToBaseUrl('/find_bsde_documents_by_finding');

  // public readonly findBsdeDocumentsByProject: string = super.appendToBaseUrl('/find_bsde_documents_by_project');

  public readonly findBsdeProjectsByPnAndSn: string = super.appendToBaseUrl('/find_bsde_projects_by_pn_and_sn');

  // public readonly findBsdeTargetsByProjectId: string = super.appendToBaseUrl('/find_bsde_targets_by_project_id');

  // public readonly updateBsdeWorkOrder: string = super.appendToBaseUrl('/update_bsde_work_order');

  // public readonly unlockObjectsOfSession: string = super.appendToBaseUrl('/unlock_objects_of_session');

  // public readonly cleanExpiredSessions: string = super.appendToBaseUrl('/clean_expired_sessions');

  public readonly exportBsdeFindingsReportPdf: string = super.appendToBaseUrl('/export_bsde_findings_report_pdf');

  public readonly exportBidmFindingsReportPdf: string = super.appendToBaseUrl('/export_bidm_findings_report_pdf');

  public readonly createOrUpdateBsdeAvailability: string = super.appendToBaseUrl('/create_or_update_bsde_availability');

  // public readonly createBsdeAvailability: string = super.appendToBaseUrl('/create_bsde_availability');

  // public readonly updateBsdeAvailability: string = super.appendToBaseUrl('/update_bsde_availability');

  public readonly removeBsdeAvailability: string = super.appendToBaseUrl('/remove_bsde_availability');

  // public readonly getAttributeValueOfDecision: string = super.appendToBaseUrl('/get_attribute_value_of_decision');

  // public readonly getAttributeValueOfInventory: string = super.appendToBaseUrl('/get_attribute_value_of_inventory');

  // public readonly getAttributeValueOfProject: string = super.appendToBaseUrl('/get_attribute_value_of_project');

  // public readonly setAttributeValueOfDecision: string = super.appendToBaseUrl('/set_attribute_value_of_decision');

  // public readonly setAttributeValueOfInventory: string = super.appendToBaseUrl('/set_attribute_value_of_inventory');

  // public readonly setAttributeValueOfProject: string = super.appendToBaseUrl('/set_attribute_value_of_project');

  public readonly findBsdeAttributesForForecast: string = super.appendToBaseUrl(
    '/find_all_bsde_attribute_for_forecast'
  );

  public readonly findAllBsdeProjectByCriteria: string = super.appendToBaseUrl('/find_all_bsde_project_by_criteria');

  public readonly findBsdeAwCustomsForLicensing: string = super.appendToBaseUrl('/find_bsde_aw_customs_for_licensing');

  public readonly saveBsdeReturnReasonWithBsdeProject: string = super.appendToBaseUrl(
    '/save_bsde_return_reason_with_bsde_project'
  );

  public readonly synchronizeWithHR: string = super.appendToBaseUrl('/synchronize_with_hr');

  public readonly saveBsdeProject: string = super.appendToBaseUrl('/save_bsde_project');

  public readonly findBsdeAttributeList: string = super.appendToBaseUrl('/find_bsde_attributes_list');

  public constructor() {
    super(ProjectManagementApi.baseUrl);
  }
}
