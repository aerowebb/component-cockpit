import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class WorkflowImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/workflow_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importWorkflowFromExcel: string = super.appendToBaseUrl('/import_workflow_from_excel');


	public constructor() {
		super(WorkflowImportApi.baseUrl);
	}

}