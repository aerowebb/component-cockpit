import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class StandardImportLoApi extends AbstractApi {

	private static readonly baseUrl: string = '/standard_import_lo';

	// public readonly getImportLogisticsXLS: string = super.appendToBaseUrl('/get_import_logistics_xls');

	// public readonly importLogisticsFromExcel: string = super.appendToBaseUrl('/import_logistics_from_excel');


	public constructor() {
		super(StandardImportLoApi.baseUrl);
	}

}