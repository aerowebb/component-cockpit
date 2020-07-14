import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ADSBStatusExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/a_dsb_status_export';

	// public readonly generateXlsADSBStatus: string = super.appendToBaseUrl('/generate_xls_adsb_status');


	public constructor() {
		super(ADSBStatusExportApi.baseUrl);
	}

}