import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class UsageImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/usage_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importUsagesFromExcel: string = super.appendToBaseUrl('/import_usages_from_excel');


	public constructor() {
		super(UsageImportApi.baseUrl);
	}

}