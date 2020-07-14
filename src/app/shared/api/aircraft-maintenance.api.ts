import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class AircraftMaintenanceApi extends AbstractApi {
  private static readonly baseUrl: string = '/aircraft_maintenance';

  public readonly calculateCostOfBireOperation: string = super.appendToBaseUrl('/calculate_cost_of_bire_operation');

  public readonly getWorkOrdersForLogbookUpdate: string = super.appendToBaseUrl(
    '/get_work_order_structure_logbook_update'
  );

  public readonly getEmployeeQualificationText: string = super.appendToBaseUrl('/get_employee_qualifications_text');

  public readonly findBidmWorkOrderByMandantAndWoCode: string = super.appendToBaseUrl(
    '/find_bidm_work_order_by_mandant_and_wo_code'
  );

  // public readonly findBidmWorkOrdersAssignedToEmployee: string = super.appendToBaseUrl('/find_bidm_work_orders_assigned_to_employee');

  // public readonly findBidmWorkOrdersPerformedByEmployee: string = super.appendToBaseUrl('/find_bidm_work_orders_performed_by_employee');

  // public readonly generateBidmWorkOrderAndHierarchy: string = super.appendToBaseUrl('/generate_bidm_work_order_and_hierarchy');

  // public readonly getBidmOperationsByTaskAndRelatedTasks: string = super.appendToBaseUrl('/get_bidm_operations_by_task_and_related_tasks');

  // public readonly calculateStdWorkOrderTheoreticalDuration: string = super.appendToBaseUrl('/calculate_std_work_order_theoretical_duration');

  // public readonly calculateStdWorkOrderTheoreticalWorkload: string = super.appendToBaseUrl('/calculate_std_work_order_theoretical_workload');

  // public readonly calculateStdWorkOrderTheoreticalCost: string = super.appendToBaseUrl('/calculate_std_work_order_theoretical_cost');

  // public readonly calculateStdWorkOrderAnalyticalCost: string = super.appendToBaseUrl('/calculate_std_work_order_analytical_cost');

  // public readonly calculateStdWorkOrderLaborProgress: string = super.appendToBaseUrl('/calculate_std_work_order_labor_progress');

  // public readonly calculateStdOperationLaborProgress: string = super.appendToBaseUrl('/calculate_std_operation_labor_progress');

  // public readonly calculateStdWorkOrderMaterialCost: string = super.appendToBaseUrl('/calculate_std_work_order_material_cost');

  // public readonly calculateStdPurchaseRequestTheoreticalCost: string = super.appendToBaseUrl('/calculate_std_purchase_request_theoretical_cost');

  // public readonly getSubcontractingPurchaseRequestDataByWorkOrder: string = super.appendToBaseUrl('/get_subcontracting_purchase_request_data_by_work_order');

  // public readonly getSubcontractingPurchaseRequestDataByOperation: string = super.appendToBaseUrl('/get_subcontracting_purchase_request_data_by_operation');

  // public readonly getBidmWorkOrdersSonsByBidmWorkOrderPk: string = super.appendToBaseUrl('/get_bidm_work_orders_sons_by_bidm_work_order_pk');

  public readonly getBidmWorkOrdersStructureByProject: string = super.appendToBaseUrl(
    '/get_bidm_work_orders_structure_by_project'
  );

  public readonly getBidmWorkOrdersStructure: string = super.appendToBaseUrl('/get_bidm_work_orders_structure');

  // public readonly getTheoreticalBireTasksByWorkOrder: string = super.appendToBaseUrl('/get_theoretical_bire_tasks_by_work_order');

  public readonly updateMaintenancePlanFromWorkOrder: string = super.appendToBaseUrl(
    '/update_maintenance_plan_from_work_order'
  );

  public readonly updateLogbookFromWorkOrderInput: string = super.appendToBaseUrl(
    '/update_logbook_from_work_order_input'
  );

  public readonly initializeUpdateLogbookFromWorkOrderInput: string = super.appendToBaseUrl(
    '/initiaize_update_logbook_from_work_order_input'
  );

  public readonly deleteLogbookNotificationFromWorkOrder: string = super.appendToBaseUrl(
    '/delete_logbook_notification_from_work_order'
  );

  // public readonly findBidmWorkOrdersByBsdeProjectNumberAndInvId: string = super.appendToBaseUrl('/find_bidm_work_orders_by_bsde_project_number_and_inv_id');

  public readonly findBidmDocumentsByProject: string = super.appendToBaseUrl('/find_bidm_documents_by_project');

  public readonly removeBidmDocument: string = super.appendToBaseUrl('/remove_bidm_document');

  public readonly createBidmDocument: string = super.appendToBaseUrl('/create_bidm_document');

  public readonly findBidmWorkOrdersByProject: string = super.appendToBaseUrl('/find_bidm_work_orders_by_project');

  public readonly findBidmWorkOrder: string = super.appendToBaseUrl('/find_bidm_work_order');

  public readonly findBidmWorkOrdersByAssignedTo: string = super.appendToBaseUrl(
    '/find_bidm_work_orders_by_assigned_to'
  );

  public readonly initializeWorksManagement: string = super.appendToBaseUrl('/initialize_works_management');

  // public readonly findBidmWorkOrdersByPerformedBy: string = super.appendToBaseUrl('/find_bidm_work_orders_by_performed_by');

  // public readonly findBidmWorkOrdersByCheckedBy: string = super.appendToBaseUrl('/find_bidm_work_orders_by_checked_by');

  // public readonly findTopBidmWorkOrdersByProject: string = super.appendToBaseUrl('/find_top_bidm_work_orders_by_project');

  // public readonly findBidmWorkOrdersByCriteria: string = super.appendToBaseUrl('/find_bidm_work_orders_by_criteria');

  public readonly updateBidmWorkOrder: string = super.appendToBaseUrl('/update_bidm_work_order');

  public readonly setWoToBeConfirmed: string = super.appendToBaseUrl('/set_wo_to_be_confirmed');

  public readonly unsetWoToBeConfirmed: string = super.appendToBaseUrl('/unset_wo_to_be_confirmed');

  public readonly removeBidmWorkOrder: string = super.appendToBaseUrl('/remove_bidm_work_order');

  public readonly removeBidmWorkOrderList: string = super.appendToBaseUrl('/remove_bidm_work_order_list');

  public readonly moveWorkOrdersToProject: string = super.appendToBaseUrl('/move_work_orders_to_project');

  // public readonly removeBidmWorkOrdersByProject: string = super.appendToBaseUrl('/remove_bidm_work_orders_by_project');

  public readonly updateBidmOperation: string = super.appendToBaseUrl('/update_bidm_operation');

  // public readonly removeBidmOperation: string = super.appendToBaseUrl('/remove_bidm_operation');

  // public readonly createOrUpdateBidmOperation: string = super.appendToBaseUrl('/create_or_update_bidm_operation');

  public readonly updateBidmWorkOrders: string = super.appendToBaseUrl('/update_bidm_work_orders');

  public readonly createOrUpdateBidmWorkOrder: string = super.appendToBaseUrl('/create_or_update_bidm_work_order');

  // public readonly findBidmDocumentsByProjectAndCategory: string = super.appendToBaseUrl('/find_bidm_documents_by_project_and_category');

  // public readonly findBidmDocumentsByProjectWithoutFindings: string = super.appendToBaseUrl('/find_bidm_documents_by_project_without_findings');

  // public readonly updateNameAndDescriptionOfBidmDocument: string = super.appendToBaseUrl('/update_name_and_description_of_bidm_document');

  // public readonly findBidmDocumentContentByDocumentId: string = super.appendToBaseUrl('/find_bidm_document_content_by_document_id');

  // public readonly findWorkScopedBidmWorkOrdersByProject: string = super.appendToBaseUrl('/find_work_scoped_bidm_work_orders_by_project');

  public readonly createBidmWorkOrder: string = super.appendToBaseUrl('/create_bidm_work_order');

  // public readonly generatePurchasingForWP: string = super.appendToBaseUrl('/generate_purchasing_for_wp');

  // public readonly generatePurchasingForWO: string = super.appendToBaseUrl('/generate_purchasing_for_wo');

  // public readonly generatePurchasingForOP: string = super.appendToBaseUrl('/generate_purchasing_for_op');

  // public readonly findBireTasksRelatedToTask: string = super.appendToBaseUrl('/find_bire_tasks_related_to_task');

  // public readonly findBireTasksRelatedToTasks: string = super.appendToBaseUrl('/find_bire_tasks_related_to_tasks');

  // public readonly findBidmOperation: string = super.appendToBaseUrl('/find_bidm_operation');

  // public readonly findBidmOperationsByTask: string = super.appendToBaseUrl('/find_bidm_operations_by_task');

  // public readonly getBidmOperationsByEvolution: string = super.appendToBaseUrl('/get_bidm_operations_by_evolution');

  public readonly findBidmOperationsByWorkOrder: string = super.appendToBaseUrl('/find_bidm_operations_by_work_order');

  // public readonly calculateStdTaskDuration: string = super.appendToBaseUrl('/calculate_std_task_duration');

  // public readonly calculatePerfTaskDuration: string = super.appendToBaseUrl('/calculate_perf_task_duration');

  // public readonly calculatePerfTaskElapsed: string = super.appendToBaseUrl('/calculate_perf_task_elapsed');

  public readonly calculatePerfWorkOrderDuration: string = super.appendToBaseUrl('/calculate_perf_work_order_duration');

  public readonly findBidmDocumentsByWorkOrder: string = super.appendToBaseUrl('/find_bidm_documents_by_work_order');

  // public readonly calculatePerfWorkOrderElapsed: string = super.appendToBaseUrl('/calculate_perf_work_order_elapsed');

  // public readonly calculateStdWorkOrderLaborCost: string = super.appendToBaseUrl('/calculate_std_work_order_labor_cost');

  // public readonly calculateStdPurchaseRequestCost: string = super.appendToBaseUrl('/calculate_std_purchase_request_cost');

  // public readonly calculateWorkOrderCost: string = super.appendToBaseUrl('/calculate_work_order_cost');

  // public readonly calculateProjectCost: string = super.appendToBaseUrl('/calculate_project_cost');

  // public readonly calculateCostAndDuration: string = super.appendToBaseUrl('/calculate_cost_and_duration');

  // public readonly aggregateWorkOrderStatus: string = super.appendToBaseUrl('/aggregate_work_order_status');

  public readonly calculateWorkOrderStatus: string = super.appendToBaseUrl('/calculate_work_order_status');

  public readonly calculateAndUpdateBidmWorkOrderStatus: string = super.appendToBaseUrl(
    '/calculate_and_update_bidm_work_order_status'
  );

  public readonly openBidmWorkOrder: string = super.appendToBaseUrl('/open_bidm_work_order');

  // public readonly calculateTaskStatus: string = super.appendToBaseUrl('/calculate_task_status');

  // public readonly calculatePurchaseRequestStatus: string = super.appendToBaseUrl('/calculate_purchase_request_status');

  // public readonly getWorkOrderStatusHierarchy: string = super.appendToBaseUrl('/get_work_order_status_hierarchy');

  public readonly getSubcontractingTypeByTask: string = super.appendToBaseUrl('/get_subcontracting_type_by_task');

  // public readonly getSubcontractingTypeByProject: string = super.appendToBaseUrl('/get_subcontracting_type_by_project');

  // public readonly getWorkOrderObjects: string = super.appendToBaseUrl('/get_work_order_objects');

  // public readonly createBidmConfControl: string = super.appendToBaseUrl('/create_bidm_conf_control');

  // public readonly findBidmConfControlsByProject: string = super.appendToBaseUrl('/find_bidm_conf_controls_by_project');

  // public readonly findBidmFindingsByEquipmentCode: string = super.appendToBaseUrl('/find_bidm_findings_by_equipment_code');

  // public readonly findBidmFindingsByProjectId: string = super.appendToBaseUrl('/find_bidm_findings_by_project_id');

  // public readonly findBidmFindingsByOperation: string = super.appendToBaseUrl('/find_bidm_findings_by_operation');

  // public readonly findBidmDocumentsByFinding: string = super.appendToBaseUrl('/find_bidm_documents_by_finding');

  // public readonly createBidmFinding: string = super.appendToBaseUrl('/create_bidm_finding');

  // public readonly updateBidmFinding: string = super.appendToBaseUrl('/update_bidm_finding');

  // public readonly removeBidmFinding: string = super.appendToBaseUrl('/remove_bidm_finding');

  // public readonly createBidmWoAttribute: string = super.appendToBaseUrl('/create_bidm_wo_attribute');

  public readonly findBidmWoAttributesByWorkOrder: string = super.appendToBaseUrl(
    '/find_bidm_wo_attributes_by_work_order'
  );

  // public readonly getDefectContextAsText: string = super.appendToBaseUrl('/get_defect_context_as_text');

  // public readonly getDefectComponents: string = super.appendToBaseUrl('/get_defect_components');

  // public readonly createBidmTimeTracking: string = super.appendToBaseUrl('/create_bidm_time_tracking');

  // public readonly findBidmTimeTrackingsByWorkOrder: string = super.appendToBaseUrl('/find_bidm_time_trackings_by_work_order');

  // public readonly findBidmTimeTrackingsByOperation: string = super.appendToBaseUrl('/find_bidm_time_trackings_by_operation');

  // public readonly updateBidmTimeTracking: string = super.appendToBaseUrl('/update_bidm_time_tracking');

  public readonly removeBidmTimeTracking: string = super.appendToBaseUrl('/remove_bidm_time_tracking');

  // public readonly getStockMovementsByProject: string = super.appendToBaseUrl('/get_stock_movements_by_project');

  // public readonly getStockLocations: string = super.appendToBaseUrl('/get_stock_locations');

  public readonly findBidmWorkOrdersByCriteriaForOVS: string = super.appendToBaseUrl(
    '/find_bidm_work_orders_by_criteria_for_ovs'
  );

  public readonly findBidmWorkOrdersByCriteria: string = super.appendToBaseUrl('/find_bidm_work_orders_by_criteria');

  public readonly getAirmWorkOrderTypeList: string = super.appendToBaseUrl('/get_airm_work_order_type_list');

  public readonly getAirmProjectStatusList: string = super.appendToBaseUrl('/get_airm_project_status_list');

  public readonly generateAPRSCertificateForACRSEvent: string = super.appendToBaseUrl(
    '/generate_aprs_certificate_from_acrs_event'
  );

  public readonly generateEASACertificateFromACRSEvent: string = super.appendToBaseUrl(
    '/generate_easa_certificate_from_acrs_event'
  );

  public readonly findBidmWorkOrderData: string = super.appendToBaseUrl('/find_bidm_work_order_data');

  public readonly recordAllEvents: string = super.appendToBaseUrl('/record_all_events');

  public readonly getProgressFromOperationStatus: string = super.appendToBaseUrl('/get_progress_from_operation_status');

  public readonly fetchBidmTimeTrackings: string = super.appendToBaseUrl('/find_bidm_time_trackings');

  public readonly saveBidmTimeTracking: string = super.appendToBaseUrl('/save_bidm_time_tracking');

  public readonly getOperationDurationTotalByWorkOrder: string = super.appendToBaseUrl(
    '/get_operation_duration_total_by_work_order'
  );

  public readonly createProcurementRequest: string = super.appendToBaseUrl('/create_procurement_request');

  public readonly initializeProcurementRequest: string = super.appendToBaseUrl(
    '/initialize_procurement_request_from_operations'
  );

  public constructor() {
    super(AircraftMaintenanceApi.baseUrl);
  }
}
