import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class E5XMappingExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/e5_x_mapping_export';

	// public readonly generateXlsE5XMapping: string = super.appendToBaseUrl('/generate_xls_e_5_x_mapping');


	public constructor() {
		super(E5XMappingExportApi.baseUrl);
	}

}