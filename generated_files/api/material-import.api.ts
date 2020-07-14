import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class MaterialImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/material_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importMaterialFromExcel: string = super.appendToBaseUrl('/import_material_from_excel');


	public constructor() {
		super(MaterialImportApi.baseUrl);
	}

}