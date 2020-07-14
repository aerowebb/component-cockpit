import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class TaskHistoryApi extends AbstractApi {

	private static readonly baseUrl: string = '/task_history';

	// public readonly findHBireTaskAttributes: string = super.appendToBaseUrl('/find_h_bire_task_attributes');

	// public readonly findHBireOperationAttributes: string = super.appendToBaseUrl('/find_h_bire_operation_attributes');


	public constructor() {
		super(TaskHistoryApi.baseUrl);
	}

}