import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class AttributeValuesImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/attribute_values_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importAttributeValuesFromExcel: string = super.appendToBaseUrl('/import_attribute_values_from_excel');


	public constructor() {
		super(AttributeValuesImportApi.baseUrl);
	}

}