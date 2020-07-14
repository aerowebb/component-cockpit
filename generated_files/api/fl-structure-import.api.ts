import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FlStructureImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/fl_structure_import';

	// public readonly importFlStructureFromExcel: string = super.appendToBaseUrl('/import_fl_structure_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');


	public constructor() {
		super(FlStructureImportApi.baseUrl);
	}

}