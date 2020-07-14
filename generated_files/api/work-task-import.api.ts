import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class WorkTaskImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/work_task_import';

	// public readonly importWorkTaskFromExcel: string = super.appendToBaseUrl('/import_work_task_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');


	public constructor() {
		super(WorkTaskImportApi.baseUrl);
	}

}