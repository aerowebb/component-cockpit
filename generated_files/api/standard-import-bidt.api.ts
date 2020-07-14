import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class StandardImportBidtApi extends AbstractApi {

	private static readonly baseUrl: string = '/standard_import_bidt';

	// public readonly importEmployeeFromExcel: string = super.appendToBaseUrl('/import_employee_from_excel');

	// public readonly importMaterialFromExcel: string = super.appendToBaseUrl('/import_material_from_excel');

	// public readonly getImportEmployeeXLS: string = super.appendToBaseUrl('/get_import_employee_xls');

	// public readonly getImportMaterialXLS: string = super.appendToBaseUrl('/get_import_material_xls');


	public constructor() {
		super(StandardImportBidtApi.baseUrl);
	}

}