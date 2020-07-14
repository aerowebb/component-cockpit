import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ProjectBusinessApi extends AbstractApi {

	private static readonly baseUrl: string = '/project_business';

	// public readonly getDECISION_FILTER_FOR_INSPECTION_AND_SENTENCING_NOTIFICATIONAsString: string = super.appendToBaseUrl('/get_decision___filter___for___inspection___and___sentencing___notification_as_string');

	// public readonly getAttributeBooleanValueOfDecision: string = super.appendToBaseUrl('/get_attribute_boolean_value_of_decision');

	// public readonly getAttributeBooleanValueOfInventory: string = super.appendToBaseUrl('/get_attribute_boolean_value_of_inventory');

	// public readonly setAttributeBooleanValueOfDecision: string = super.appendToBaseUrl('/set_attribute_boolean_value_of_decision');

	// public readonly setAttributeBooleanValueOfInventory: string = super.appendToBaseUrl('/set_attribute_boolean_value_of_inventory');

	// public readonly isTechnicalWorkscopeNotificationExportAuthorized: string = super.appendToBaseUrl('/is_technical_workscope_notification_export_authorized');

	// public readonly getProjectSite: string = super.appendToBaseUrl('/get_project_site');

	// public readonly removeAllObjectNumbersFromInventory: string = super.appendToBaseUrl('/remove_all_object_numbers_from_inventory');

	// public readonly getObjectNumbersOfInventoryAsString: string = super.appendToBaseUrl('/get_object_numbers_of_inventory_as_string');

	// public readonly refreshInventoriesMapByItemAndItemFather: string = super.appendToBaseUrl('/refresh_inventories_map_by_item_and_item_father');

	// public readonly getDECISION_FILTER_FOR_TECHNICAL_WORKSCOPE_NOTIFICATIONAsString: string = super.appendToBaseUrl('/get_decision___filter___for___technical___workscope___notification_as_string');

	// public readonly isInspectionAndSentencingNotificationExportAuthorized: string = super.appendToBaseUrl('/is_inspection_and_sentencing_notification_export_authorized');

	// public readonly getAttributeValueOfDecision: string = super.appendToBaseUrl('/get_attribute_value_of_decision');

	// public readonly getAttributeValueOfInventory: string = super.appendToBaseUrl('/get_attribute_value_of_inventory');

	// public readonly getAttributeValueOfProject: string = super.appendToBaseUrl('/get_attribute_value_of_project');

	// public readonly setAttributeValueOfDecision: string = super.appendToBaseUrl('/set_attribute_value_of_decision');

	// public readonly setAttributeValueOfInventory: string = super.appendToBaseUrl('/set_attribute_value_of_inventory');

	// public readonly setAttributeValueOfProject: string = super.appendToBaseUrl('/set_attribute_value_of_project');

	// public readonly getProjectWbsElement: string = super.appendToBaseUrl('/get_project_wbs_element');

	// public readonly getProjectCustomerName: string = super.appendToBaseUrl('/get_project_customer_name');

	// public readonly findLockUserOfWorkOrder: string = super.appendToBaseUrl('/find_lock_user_of_work_order');

	// public readonly findLockUserOfDecision: string = super.appendToBaseUrl('/find_lock_user_of_decision');

	// public readonly findLockUserOfMultiInventory: string = super.appendToBaseUrl('/find_lock_user_of_multi_inventory');

	// public readonly findLockUserOfSingleInventory: string = super.appendToBaseUrl('/find_lock_user_of_single_inventory');

	// public readonly addObjectNumberToInventory: string = super.appendToBaseUrl('/add_object_number_to_inventory');

	// public readonly removeObjectNumberFromInventory: string = super.appendToBaseUrl('/remove_object_number_from_inventory');

	// public readonly getObjectNumberOfInventory: string = super.appendToBaseUrl('/get_object_number_of_inventory');

	// public readonly findBsdeInventoriesOfProject: string = super.appendToBaseUrl('/find_bsde_inventories_of_project');

	// public readonly getProjectWithTheSameKey: string = super.appendToBaseUrl('/get_project_with_the_same_key');

	// public readonly findBsdeWorkOrdersOfProject: string = super.appendToBaseUrl('/find_bsde_work_orders_of_project');

	// public readonly generateInventoryCard: string = super.appendToBaseUrl('/generate_inventory_card');

	// public readonly getItemReportData: string = super.appendToBaseUrl('/get_item_report_data');


	public constructor() {
		super(ProjectBusinessApi.baseUrl);
	}

}