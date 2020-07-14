import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class E5XMappingImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/e5_x_mapping_import';

	// public readonly importE5XMappingFromExcel: string = super.appendToBaseUrl('/import_e_5_x_mapping_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');


	public constructor() {
		super(E5XMappingImportApi.baseUrl);
	}

}