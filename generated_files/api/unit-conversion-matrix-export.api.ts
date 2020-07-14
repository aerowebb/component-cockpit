import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class UnitConversionMatrixExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/unit_conversion_matrix_export';

	// public readonly generateXlsUnitConversionMatrix: string = super.appendToBaseUrl('/generate_xls_unit_conversion_matrix');


	public constructor() {
		super(UnitConversionMatrixExportApi.baseUrl);
	}

}