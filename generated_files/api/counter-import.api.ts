import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class CounterImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/counter_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importCountersFromExcel: string = super.appendToBaseUrl('/import_counters_from_excel');


	public constructor() {
		super(CounterImportApi.baseUrl);
	}

}