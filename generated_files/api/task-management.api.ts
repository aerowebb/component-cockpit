import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class TaskManagementApi extends AbstractApi {

	private static readonly baseUrl: string = '/task_management';

	// public readonly findBirePn: string = super.appendToBaseUrl('/find_bire_pn');

	// public readonly createBirePn: string = super.appendToBaseUrl('/create_bire_pn');

	// public readonly updateBirePn: string = super.appendToBaseUrl('/update_bire_pn');

	// public readonly findAllBirePns: string = super.appendToBaseUrl('/find_all_bire_pns');

	// public readonly removeBirePn: string = super.appendToBaseUrl('/remove_bire_pn');

	// public readonly createBireSmTask: string = super.appendToBaseUrl('/create_bire_sm_task');

	// public readonly updateBireSmTask: string = super.appendToBaseUrl('/update_bire_sm_task');

	// public readonly removeBireSmTask: string = super.appendToBaseUrl('/remove_bire_sm_task');

	// public readonly findBireRange: string = super.appendToBaseUrl('/find_bire_range');

	// public readonly findAllBireTasks: string = super.appendToBaseUrl('/find_all_bire_tasks');

	// public readonly removeBireTask: string = super.appendToBaseUrl('/remove_bire_task');

	// public readonly createBireTask: string = super.appendToBaseUrl('/create_bire_task');

	// public readonly updateBireTask: string = super.appendToBaseUrl('/update_bire_task');

	// public readonly findBireTask: string = super.appendToBaseUrl('/find_bire_task');

	// public readonly createBireDamage: string = super.appendToBaseUrl('/create_bire_damage');

	// public readonly removeBireDamage: string = super.appendToBaseUrl('/remove_bire_damage');

	// public readonly updateBireDamage: string = super.appendToBaseUrl('/update_bire_damage');

	// public readonly createBireTil: string = super.appendToBaseUrl('/create_bire_til');

	// public readonly updateBireTil: string = super.appendToBaseUrl('/update_bire_til');

	// public readonly findBireTil: string = super.appendToBaseUrl('/find_bire_til');

	// public readonly findAllBireTils: string = super.appendToBaseUrl('/find_all_bire_tils');

	// public readonly removeBireTil: string = super.appendToBaseUrl('/remove_bire_til');

	// public readonly createBireRange: string = super.appendToBaseUrl('/create_bire_range');

	// public readonly updateBireRange: string = super.appendToBaseUrl('/update_bire_range');

	// public readonly removeBireRange: string = super.appendToBaseUrl('/remove_bire_range');

	// public readonly findBireDamage: string = super.appendToBaseUrl('/find_bire_damage');

	// public readonly createBirePlanPn: string = super.appendToBaseUrl('/create_bire_plan_pn');

	// public readonly updateBirePlanPn: string = super.appendToBaseUrl('/update_bire_plan_pn');

	// public readonly removeBirePlanPn: string = super.appendToBaseUrl('/remove_bire_plan_pn');

	// public readonly findBirePlanItem: string = super.appendToBaseUrl('/find_bire_plan_item');

	// public readonly findBirePlanPn: string = super.appendToBaseUrl('/find_bire_plan_pn');

	// public readonly createBireQualifVariant: string = super.appendToBaseUrl('/create_bire_qualif_variant');

	// public readonly removeBireQualifVariant: string = super.appendToBaseUrl('/remove_bire_qualif_variant');

	// public readonly createBireReturnReason: string = super.appendToBaseUrl('/create_bire_return_reason');

	// public readonly updateBireReturnReason: string = super.appendToBaseUrl('/update_bire_return_reason');

	// public readonly findBireReturnReasonsByItem: string = super.appendToBaseUrl('/find_bire_return_reasons_by_item');

	// public readonly findBireReturnReason: string = super.appendToBaseUrl('/find_bire_return_reason');

	// public readonly findAllBireReturnReasons: string = super.appendToBaseUrl('/find_all_bire_return_reasons');

	// public readonly removeBireReturnReason: string = super.appendToBaseUrl('/remove_bire_return_reason');

	// public readonly createBireReturnItem: string = super.appendToBaseUrl('/create_bire_return_item');

	// public readonly removeBireReturnItem: string = super.appendToBaseUrl('/remove_bire_return_item');

	// public readonly findBireReturnItem: string = super.appendToBaseUrl('/find_bire_return_item');

	// public readonly findBireTaskOperationsByTask: string = super.appendToBaseUrl('/find_bire_task_operations_by_task');

	// public readonly removeBireTaskOperationsByTask: string = super.appendToBaseUrl('/remove_bire_task_operations_by_task');

	// public readonly createBireTaskEvolution: string = super.appendToBaseUrl('/create_bire_task_evolution');

	// public readonly removeBireTaskEvolution: string = super.appendToBaseUrl('/remove_bire_task_evolution');

	// public readonly findBireTaskEvolutionsByTask: string = super.appendToBaseUrl('/find_bire_task_evolutions_by_task');

	// public readonly findAllBireSmTasks: string = super.appendToBaseUrl('/find_all_bire_sm_tasks');

	// public readonly findBireSmTasksByTask: string = super.appendToBaseUrl('/find_bire_sm_tasks_by_task');

	// public readonly findBireSmTasksByShopManual: string = super.appendToBaseUrl('/find_bire_sm_tasks_by_shop_manual');

	// public readonly findBireDamagesByItemAndPnList: string = super.appendToBaseUrl('/find_bire_damages_by_item_and_pn_list');

	// public readonly findBireTasksByItem: string = super.appendToBaseUrl('/find_bire_tasks_by_item');

	// public readonly findMaintainedItemsByTask: string = super.appendToBaseUrl('/find_maintained_items_by_task');

	// public readonly findBireOperation: string = super.appendToBaseUrl('/find_bire_operation');

	// public readonly findBireTaskGroup: string = super.appendToBaseUrl('/find_bire_task_group');

	// public readonly findAllBireOperations: string = super.appendToBaseUrl('/find_all_bire_operations');

	// public readonly createBireOperation: string = super.appendToBaseUrl('/create_bire_operation');

	// public readonly updateBireOperation: string = super.appendToBaseUrl('/update_bire_operation');

	// public readonly removeBireDocTask: string = super.appendToBaseUrl('/remove_bire_doc_task');

	// public readonly removeBireDocOperation: string = super.appendToBaseUrl('/remove_bire_doc_operation');

	// public readonly createBireDocTask: string = super.appendToBaseUrl('/create_bire_doc_task');

	// public readonly createBireDocOperation: string = super.appendToBaseUrl('/create_bire_doc_operation');

	// public readonly calculateCostOfBireTask: string = super.appendToBaseUrl('/calculate_cost_of_bire_task');

	// public readonly calculateCostOfBireOperation: string = super.appendToBaseUrl('/calculate_cost_of_bire_operation');

	// public readonly findBireDocTaskByTask: string = super.appendToBaseUrl('/find_bire_doc_task_by_task');

	// public readonly findBireDocOperationByOperation: string = super.appendToBaseUrl('/find_bire_doc_operation_by_operation');

	// public readonly createBireTaskItem: string = super.appendToBaseUrl('/create_bire_task_item');

	// public readonly updateBireTaskItem: string = super.appendToBaseUrl('/update_bire_task_item');

	// public readonly removeBireDamageItemsByItemVersion: string = super.appendToBaseUrl('/remove_bire_damage_items_by_item_version');

	// public readonly removeBireLocalisationItemsByItemVersion: string = super.appendToBaseUrl('/remove_bire_localisation_items_by_item_version');

	// public readonly findBireLocalisationItemsByItemVersion: string = super.appendToBaseUrl('/find_bire_localisation_items_by_item_version');

	// public readonly removeBireQualifVariantsByVariant: string = super.appendToBaseUrl('/remove_bire_qualif_variants_by_variant');

	// public readonly findBireQualificationsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_qualifications_by_search_criteria');

	// public readonly removeBireDamLocTasksByItemVersion: string = super.appendToBaseUrl('/remove_bire_dam_loc_tasks_by_item_version');

	// public readonly findBireOperationsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_operations_by_search_criteria');

	// public readonly removeBireOperationPnsByOperation: string = super.appendToBaseUrl('/remove_bire_operation_pns_by_operation');

	// public readonly findBirePlanTaskCountersByPlanCode: string = super.appendToBaseUrl('/find_bire_plan_task_counters_by_plan_code');

	// public readonly removeBireTaskItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_task_items_by_family_and_variant_codes');

	// public readonly findBireTrendTaskCountersByModelCode: string = super.appendToBaseUrl('/find_bire_trend_task_counters_by_model_code');

	// public readonly removeBireTaskOperationsByOperation: string = super.appendToBaseUrl('/remove_bire_task_operations_by_operation');

	// public readonly findBireLocalisationItemsByItemAndPnList: string = super.appendToBaseUrl('/find_bire_localisation_items_by_item_and_pn_list');

	// public readonly findBireTaskItemsByItemAndTaskCode: string = super.appendToBaseUrl('/find_bire_task_items_by_item_and_task_code');

	// public readonly findBireTaskItemsByItemAndTaskItemTypeCode: string = super.appendToBaseUrl('/find_bire_task_items_by_item_and_task_item_type_code');

	// public readonly findBireTaskItemsByTaskAndTaskItemTypeCode: string = super.appendToBaseUrl('/find_bire_task_items_by_task_and_task_item_type_code');

	// public readonly updateBireTaskTask: string = super.appendToBaseUrl('/update_bire_task_task');

	// public readonly removeBireTaskItem: string = super.appendToBaseUrl('/remove_bire_task_item');

	// public readonly removeBireTaskItemsByTask: string = super.appendToBaseUrl('/remove_bire_task_items_by_task');

	// public readonly findBireTaskItemsByItemVersion: string = super.appendToBaseUrl('/find_bire_task_items_by_item_version');

	// public readonly findBireTaskItemsByItem: string = super.appendToBaseUrl('/find_bire_task_items_by_item');

	// public readonly findBireTaskItemsByTask: string = super.appendToBaseUrl('/find_bire_task_items_by_task');

	// public readonly createBireTaskOperation: string = super.appendToBaseUrl('/create_bire_task_operation');

	// public readonly removeBireTaskOperation: string = super.appendToBaseUrl('/remove_bire_task_operation');

	// public readonly createBireLocalisationCode: string = super.appendToBaseUrl('/create_bire_localisation_code');

	// public readonly findAllBireDamages: string = super.appendToBaseUrl('/find_all_bire_damages');

	// public readonly findAllBireLocalisationCodes: string = super.appendToBaseUrl('/find_all_bire_localisation_codes');

	// public readonly removeBireLocalisationCode: string = super.appendToBaseUrl('/remove_bire_localisation_code');

	// public readonly createBireDamageItem: string = super.appendToBaseUrl('/create_bire_damage_item');

	// public readonly findBireDamageItemsByItemVersion: string = super.appendToBaseUrl('/find_bire_damage_items_by_item_version');

	// public readonly findBireDamageItemsByItem: string = super.appendToBaseUrl('/find_bire_damage_items_by_item');

	// public readonly removeBireDamageItem: string = super.appendToBaseUrl('/remove_bire_damage_item');

	// public readonly createBireLocalisationItem: string = super.appendToBaseUrl('/create_bire_localisation_item');

	// public readonly updateBireLocalisationItem: string = super.appendToBaseUrl('/update_bire_localisation_item');

	// public readonly removeBireLocalisationItem: string = super.appendToBaseUrl('/remove_bire_localisation_item');

	// public readonly createBireTilSite: string = super.appendToBaseUrl('/create_bire_til_site');

	// public readonly updateBireTilSite: string = super.appendToBaseUrl('/update_bire_til_site');

	// public readonly removeBireTilSite: string = super.appendToBaseUrl('/remove_bire_til_site');

	// public readonly findBireTilSitesBySite: string = super.appendToBaseUrl('/find_bire_til_sites_by_site');

	// public readonly createBireQualifTask: string = super.appendToBaseUrl('/create_bire_qualif_task');

	// public readonly removeBireQualifTask: string = super.appendToBaseUrl('/remove_bire_qualif_task');

	// public readonly removeBireQualifTasksByTask: string = super.appendToBaseUrl('/remove_bire_qualif_tasks_by_task');

	// public readonly createBireQualification: string = super.appendToBaseUrl('/create_bire_qualification');

	// public readonly updateBireQualification: string = super.appendToBaseUrl('/update_bire_qualification');

	// public readonly removeBireQualification: string = super.appendToBaseUrl('/remove_bire_qualification');

	// public readonly findAllBireQualificationDatas: string = super.appendToBaseUrl('/find_all_bire_qualification_datas');

	// public readonly findBireQualification: string = super.appendToBaseUrl('/find_bire_qualification');

	// public readonly createBireTaskGroup: string = super.appendToBaseUrl('/create_bire_task_group');

	// public readonly updateBireTaskGroup: string = super.appendToBaseUrl('/update_bire_task_group');

	// public readonly removeBireTaskGroup: string = super.appendToBaseUrl('/remove_bire_task_group');

	// public readonly createBireTilItem: string = super.appendToBaseUrl('/create_bire_til_item');

	// public readonly removeBireTilItem: string = super.appendToBaseUrl('/remove_bire_til_item');

	// public readonly removeBireTilItemsByItem: string = super.appendToBaseUrl('/remove_bire_til_items_by_item');

	// public readonly findBireTilItemsByItem: string = super.appendToBaseUrl('/find_bire_til_items_by_item');

	// public readonly findBireTilTasksByTask: string = super.appendToBaseUrl('/find_bire_til_tasks_by_task');

	// public readonly findBireLocalisationCode: string = super.appendToBaseUrl('/find_bire_localisation_code');

	// public readonly findBireDamagesByTask: string = super.appendToBaseUrl('/find_bire_damages_by_task');

	// public readonly findBireLocalisationCodesByTask: string = super.appendToBaseUrl('/find_bire_localisation_codes_by_task');

	// public readonly findBireDamagesByItem: string = super.appendToBaseUrl('/find_bire_damages_by_item');

	// public readonly findBireLocalisationCodesByItem: string = super.appendToBaseUrl('/find_bire_localisation_codes_by_item');

	public readonly findAllBireTaskGroups: string = super.appendToBaseUrl('/find_all_bire_task_groups');

	// public readonly createBireDamLocTask: string = super.appendToBaseUrl('/create_bire_dam_loc_task');

	// public readonly removeBireDamLocTask: string = super.appendToBaseUrl('/remove_bire_dam_loc_task');

	// public readonly findBireDamLocTasksByItemVersion: string = super.appendToBaseUrl('/find_bire_dam_loc_tasks_by_item_version');

	// public readonly findBireOperationsByTask: string = super.appendToBaseUrl('/find_bire_operations_by_task');

	// public readonly removeBireOperation: string = super.appendToBaseUrl('/remove_bire_operation');

	// public readonly findAllBireRanges: string = super.appendToBaseUrl('/find_all_bire_ranges');

	// public readonly findBirePnsByOperation: string = super.appendToBaseUrl('/find_bire_pns_by_operation');

	// public readonly findBireOperationPnsByOperation: string = super.appendToBaseUrl('/find_bire_operation_pns_by_operation');

	// public readonly createBireOperationPn: string = super.appendToBaseUrl('/create_bire_operation_pn');

	// public readonly updateBireOperationPn: string = super.appendToBaseUrl('/update_bire_operation_pn');

	// public readonly removeBireOperationPn: string = super.appendToBaseUrl('/remove_bire_operation_pn');

	// public readonly findBireTasksByCriteria: string = super.appendToBaseUrl('/find_bire_tasks_by_criteria');

	// public readonly findBireTasksByCriteria: string = super.appendToBaseUrl('/find_bire_tasks_by_criteria');

	// public readonly findBireVisitsByCriteria: string = super.appendToBaseUrl('/find_bire_visits_by_criteria');

	// public readonly findBireVisitsByCriteria: string = super.appendToBaseUrl('/find_bire_visits_by_criteria');

	// public readonly findBireMaintenancePlansByItem: string = super.appendToBaseUrl('/find_bire_maintenance_plans_by_item');

	// public readonly findBireMaintenancePlansByPn: string = super.appendToBaseUrl('/find_bire_maintenance_plans_by_pn');

	// public readonly findAllBireMaintenancePlans: string = super.appendToBaseUrl('/find_all_bire_maintenance_plans');

	// public readonly findBireMaintenancePlan: string = super.appendToBaseUrl('/find_bire_maintenance_plan');

	// public readonly createBireMaintenancePlan: string = super.appendToBaseUrl('/create_bire_maintenance_plan');

	// public readonly updateBireMaintenancePlan: string = super.appendToBaseUrl('/update_bire_maintenance_plan');

	// public readonly removeBireMaintenancePlan: string = super.appendToBaseUrl('/remove_bire_maintenance_plan');

	// public readonly findBireTrendModel: string = super.appendToBaseUrl('/find_bire_trend_model');

	// public readonly findBireTrendModelsByModelCode: string = super.appendToBaseUrl('/find_bire_trend_models_by_model_code');

	// public readonly findAllBireTrendModels: string = super.appendToBaseUrl('/find_all_bire_trend_models');

	// public readonly createBireTrendModel: string = super.appendToBaseUrl('/create_bire_trend_model');

	// public readonly updateBireTrendModel: string = super.appendToBaseUrl('/update_bire_trend_model');

	// public readonly removeBireTrendModel: string = super.appendToBaseUrl('/remove_bire_trend_model');

	// public readonly createBirePlanItem: string = super.appendToBaseUrl('/create_bire_plan_item');

	// public readonly updateBirePlanItem: string = super.appendToBaseUrl('/update_bire_plan_item');

	// public readonly removeBirePlanItem: string = super.appendToBaseUrl('/remove_bire_plan_item');

	// public readonly findAllBirePlanItems: string = super.appendToBaseUrl('/find_all_bire_plan_items');

	// public readonly findAllBirePlanPns: string = super.appendToBaseUrl('/find_all_bire_plan_pns');

	// public readonly findBirePlanItemsByPlanCode: string = super.appendToBaseUrl('/find_bire_plan_items_by_plan_code');

	// public readonly findBirePlanPnsByPlanCode: string = super.appendToBaseUrl('/find_bire_plan_pns_by_plan_code');

	// public readonly findBirePlanItemsByItem: string = super.appendToBaseUrl('/find_bire_plan_items_by_item');

	// public readonly findBirePlanPnsByPn: string = super.appendToBaseUrl('/find_bire_plan_pns_by_pn');

	// public readonly removeBirePlanTaskCountersByPlan: string = super.appendToBaseUrl('/remove_bire_plan_task_counters_by_plan');

	// public readonly removeBirePlanItemsByPlan: string = super.appendToBaseUrl('/remove_bire_plan_items_by_plan');

	// public readonly removeBirePlanPnsByPlan: string = super.appendToBaseUrl('/remove_bire_plan_pns_by_plan');

	// public readonly createBirePlanTaskCounter: string = super.appendToBaseUrl('/create_bire_plan_task_counter');

	// public readonly findBireTasksByItemAndPnAndRepairCenterAndTaskTypeCodesWithMaintainsType: string = super.appendToBaseUrl('/find_bire_tasks_by_item_and_pn_and_repair_center_and_task_type_codes_with_maintains_type');

	// public readonly findBireTasksByItemAndPnListAndRepairCenterAndTaskTypeCodesWithMaintainsType: string = super.appendToBaseUrl('/find_bire_tasks_by_item_and_pn_list_and_repair_center_and_task_type_codes_with_maintains_type');

	// public readonly findBireTasksByFamilyCodeAndStructureTypeAndVariantCodeWithAllDependencies: string = super.appendToBaseUrl('/find_bire_tasks_by_family_code_and_structure_type_and_variant_code_with_all_dependencies');

	// public readonly findBirePnsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_pns_by_search_criteria');

	// public readonly findBireTasksByEvolutionAndRepairCenterCodeWithPerformsType: string = super.appendToBaseUrl('/find_bire_tasks_by_evolution_and_repair_center_code_with_performs_type');

	// public readonly findBireTaskItemsByItemAndTaskAndTaskItemTypeCodes: string = super.appendToBaseUrl('/find_bire_task_items_by_item_and_task_and_task_item_type_codes');

	// public readonly findBireLocalisationItemsByItemAndLocalisationAndPnCodes: string = super.appendToBaseUrl('/find_bire_localisation_items_by_item_and_localisation_and_pn_codes');

	// public readonly findBireTasksByItemAndTaskTypeAndRepairCenterCode: string = super.appendToBaseUrl('/find_bire_tasks_by_item_and_task_type_and_repair_center_code');

	// public readonly removeBireMaintenancePlanItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_maintenance_plan_items_by_family_and_variant_codes');

	// public readonly removeBireTaskItemsByTaskAndFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_task_items_by_task_and_family_and_variant_codes');

	// public readonly findApplicableMaintenancePlanCodeByRecommendedPlanCode: string = super.appendToBaseUrl('/find_applicable_maintenance_plan_code_by_recommended_plan_code');

	// public readonly findBireReportsByFamilyAndVariantCodesAndTaskReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_family_and_variant_codes_and_task_report_code');

	// public readonly findBireReportsByFamilyAndVariantCodesAndMaintenanceReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_family_and_variant_codes_and_maintenance_report_code');

	// public readonly updateBirePlanTaskCounter: string = super.appendToBaseUrl('/update_bire_plan_task_counter');

	// public readonly removeBirePlanTaskCounter: string = super.appendToBaseUrl('/remove_bire_plan_task_counter');

	// public readonly createBireTrendTaskCounter: string = super.appendToBaseUrl('/create_bire_trend_task_counter');

	// public readonly removeBireTrendTaskCounter: string = super.appendToBaseUrl('/remove_bire_trend_task_counter');

	// public readonly removeBireTaskItemsByItem: string = super.appendToBaseUrl('/remove_bire_task_items_by_item');

	// public readonly createBireTrendItem: string = super.appendToBaseUrl('/create_bire_trend_item');

	// public readonly removeBireTrendItem: string = super.appendToBaseUrl('/remove_bire_trend_item');

	// public readonly findAllBireTrendItems: string = super.appendToBaseUrl('/find_all_bire_trend_items');

	// public readonly findBireTrendItem: string = super.appendToBaseUrl('/find_bire_trend_item');

	// public readonly findBireTrendItemsByModelCode: string = super.appendToBaseUrl('/find_bire_trend_items_by_model_code');

	// public readonly findBireTrendItemsByItem: string = super.appendToBaseUrl('/find_bire_trend_items_by_item');

	// public readonly removeBireTrendItemByModelCode: string = super.appendToBaseUrl('/remove_bire_trend_item_by_model_code');

	// public readonly createBireTaskTask: string = super.appendToBaseUrl('/create_bire_task_task');

	// public readonly removeBireTaskTask: string = super.appendToBaseUrl('/remove_bire_task_task');

	// public readonly removeBireTaskTasksByTask: string = super.appendToBaseUrl('/remove_bire_task_tasks_by_task');

	// public readonly removeBireSmTasksByTask: string = super.appendToBaseUrl('/remove_bire_sm_tasks_by_task');

	// public readonly findBireTaskTasksByTask: string = super.appendToBaseUrl('/find_bire_task_tasks_by_task');

	// public readonly findBireTaskTasksByTaskTask: string = super.appendToBaseUrl('/find_bire_task_tasks_by_task_task');

	// public readonly createBireShopManual: string = super.appendToBaseUrl('/create_bire_shop_manual');

	// public readonly updateBireShopManual: string = super.appendToBaseUrl('/update_bire_shop_manual');

	// public readonly removeBireShopManual: string = super.appendToBaseUrl('/remove_bire_shop_manual');

	// public readonly removeBireTrendTask: string = super.appendToBaseUrl('/remove_bire_trend_task');

	// public readonly removeBireReturnReasons: string = super.appendToBaseUrl('/remove_bire_return_reasons');

	// public readonly findAllBireShopManuals: string = super.appendToBaseUrl('/find_all_bire_shop_manuals');

	// public readonly findBireShopManual: string = super.appendToBaseUrl('/find_bire_shop_manual');

	// public readonly createBireTilTask: string = super.appendToBaseUrl('/create_bire_til_task');

	// public readonly removeBireTilTask: string = super.appendToBaseUrl('/remove_bire_til_task');

	// public readonly removeBireTaskEvolutionsByTask: string = super.appendToBaseUrl('/remove_bire_task_evolutions_by_task');

	// public readonly findBirePlanTaskCountersByTask: string = super.appendToBaseUrl('/find_bire_plan_task_counters_by_task');

	// public readonly createBireOperationAttribute: string = super.appendToBaseUrl('/create_bire_operation_attribute');

	// public readonly findBireOperationAttributeData: string = super.appendToBaseUrl('/find_bire_operation_attribute_data');

	// public readonly removeBireOperationAttribute: string = super.appendToBaseUrl('/remove_bire_operation_attribute');

	// public readonly updateBireOperationAttribute: string = super.appendToBaseUrl('/update_bire_operation_attribute');

	// public readonly createBireTaskAttribute: string = super.appendToBaseUrl('/create_bire_task_attribute');

	// public readonly findBireTaskAttributeData: string = super.appendToBaseUrl('/find_bire_task_attribute_data');

	// public readonly removeBireTaskAttribute: string = super.appendToBaseUrl('/remove_bire_task_attribute');

	// public readonly getTasksStructure: string = super.appendToBaseUrl('/get_tasks_structure');

	// public readonly updateBireTaskAttribute: string = super.appendToBaseUrl('/update_bire_task_attribute');

	// public readonly findBireTaskAttributesByTask: string = super.appendToBaseUrl('/find_bire_task_attributes_by_task');

	// public readonly findBirePlanAttributesByPlanCode: string = super.appendToBaseUrl('/find_bire_plan_attributes_by_plan_code');

	// public readonly findBirePlanAttribute: string = super.appendToBaseUrl('/find_bire_plan_attribute');

	// public readonly removeBirePlanAttribute: string = super.appendToBaseUrl('/remove_bire_plan_attribute');

	// public readonly createBirePlanAttribute: string = super.appendToBaseUrl('/create_bire_plan_attribute');

	// public readonly updateBirePlanAttribute: string = super.appendToBaseUrl('/update_bire_plan_attribute');

	// public readonly getLastRevisionOfMaintenancePlan: string = super.appendToBaseUrl('/get_last_revision_of_maintenance_plan');

	// public readonly upgradeBireMaintenancePlanData: string = super.appendToBaseUrl('/upgrade_bire_maintenance_plan_data');

	// public readonly findBireDamagesByCriteria: string = super.appendToBaseUrl('/find_bire_damages_by_criteria');

	// public readonly findBireReturnReasonsByCriteria: string = super.appendToBaseUrl('/find_bire_return_reasons_by_criteria');

	// public readonly getTasksListFromEvolution: string = super.appendToBaseUrl('/get_tasks_list_from_evolution');

	// public readonly findBireOperationsByPNList: string = super.appendToBaseUrl('/find_bire_operations_by_pn_list');

	// public readonly findBireTasksByTaskAndTaskLinkCode: string = super.appendToBaseUrl('/find_bire_tasks_by_task_and_task_link_code');

	// public readonly findBireTasksByTaskTaskAndTaskLinkCode: string = super.appendToBaseUrl('/find_bire_tasks_by_task_task_and_task_link_code');

	// public readonly findBireTaskEvolutionsByEvolution: string = super.appendToBaseUrl('/find_bire_task_evolutions_by_evolution');

	// public readonly findBireOperationAttributesByOperation: string = super.appendToBaseUrl('/find_bire_operation_attributes_by_operation');

	// public readonly findBireMaintenancePlansByCriteria: string = super.appendToBaseUrl('/find_bire_maintenance_plans_by_criteria');

	// public readonly checkAndReturnNewRevisionNumberByMaintenancePlan: string = super.appendToBaseUrl('/check_and_return_new_revision_number_by_maintenance_plan');

	// public readonly getPreviousRMPRevisionOfMaintenancePlan: string = super.appendToBaseUrl('/get_previous_rmp_revision_of_maintenance_plan');

	// public readonly findBireLocalisationCodesByCriteria: string = super.appendToBaseUrl('/find_bire_localisation_codes_by_criteria');

	// public readonly updateQualificationCodeOfTaskMaintenance: string = super.appendToBaseUrl('/update_qualification_code_of_task_maintenance');


	public constructor() {
		super(TaskManagementApi.baseUrl);
	}

}