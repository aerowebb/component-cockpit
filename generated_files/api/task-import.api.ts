import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class TaskImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/task_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importTaskFromExcel: string = super.appendToBaseUrl('/import_task_from_excel');


	public constructor() {
		super(TaskImportApi.baseUrl);
	}

}