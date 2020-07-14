import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class EmployeeImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/employee_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importEmployeeFromExcel: string = super.appendToBaseUrl('/import_employee_from_excel');


	public constructor() {
		super(EmployeeImportApi.baseUrl);
	}

}