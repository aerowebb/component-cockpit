import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class TaskBusinessApi extends AbstractApi {

	private static readonly baseUrl: string = '/task_business';

	// public readonly filterBireTasksByTaskTypes: string = super.appendToBaseUrl('/filter_bire_tasks_by_task_types');

	// public readonly addTaskNotificationDataFields: string = super.appendToBaseUrl('/add_task_notification_data_fields');

	// public readonly checkTaskStructure: string = super.appendToBaseUrl('/check_task_structure');

	// public readonly calculateLabourByQualification: string = super.appendToBaseUrl('/calculate_labour_by_qualification');

	// public readonly getAllTasksRecursivelyByTask: string = super.appendToBaseUrl('/get_all_tasks_recursively_by_task');

	// public readonly compareMaintenancePlans: string = super.appendToBaseUrl('/compare_maintenance_plans');

	// public readonly compareMaintenancePlans: string = super.appendToBaseUrl('/compare_maintenance_plans');

	// public readonly compareMaintenancePlans: string = super.appendToBaseUrl('/compare_maintenance_plans');

	// public readonly getMaintenanceProgram: string = super.appendToBaseUrl('/get_maintenance_program');

	// public readonly generateAMPFromRMP: string = super.appendToBaseUrl('/generate_amp_from_rmp');

	// public readonly addTaskNotificationDataFieldsByList: string = super.appendToBaseUrl('/add_task_notification_data_fields_by_list');

	// public readonly getPlanTaskPeriodicityDetailListByPlanCode: string = super.appendToBaseUrl('/get_plan_task_periodicity_detail_list_by_plan_code');

	// public readonly applyPreviousAMPCustomizationOnAMP: string = super.appendToBaseUrl('/apply_previous_amp_customization_on_amp');


	public constructor() {
		super(TaskBusinessApi.baseUrl);
	}

}