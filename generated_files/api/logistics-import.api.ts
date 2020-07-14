import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class LogisticsImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/logistics_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importLogisticsFromExcel: string = super.appendToBaseUrl('/import_logistics_from_excel');


	public constructor() {
		super(LogisticsImportApi.baseUrl);
	}

}