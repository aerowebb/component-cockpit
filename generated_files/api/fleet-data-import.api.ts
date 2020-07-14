import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FleetDataImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/fleet_data_import';

	// public readonly importFleetDataFromExcel: string = super.appendToBaseUrl('/import_fleet_data_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly setUpUCounterValue: string = super.appendToBaseUrl('/set_up_u_counter_value');


	public constructor() {
		super(FleetDataImportApi.baseUrl);
	}

}