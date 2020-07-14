import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class UnitConversionMatrixImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/unit_conversion_matrix_import';

	// public readonly importUnitConversionMatrixFromExcel: string = super.appendToBaseUrl('/import_unit_conversion_matrix_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');


	public constructor() {
		super(UnitConversionMatrixImportApi.baseUrl);
	}

}