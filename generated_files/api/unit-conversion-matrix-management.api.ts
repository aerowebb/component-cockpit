import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class UnitConversionMatrixManagementApi extends AbstractApi {

	private static readonly baseUrl: string = '/unit_conversion_matrix_management';

	// public readonly getUnitEquivalentValueBySourceUnitAndValue: string = super.appendToBaseUrl('/get_unit_equivalent_value_by_source_unit_and_value');

	// public readonly getMaxEquivalentFromValues: string = super.appendToBaseUrl('/get_max_equivalent_from_values');

	// public readonly getUnitCodesWithoutFhEquivalentFromList: string = super.appendToBaseUrl('/get_unit_codes_without_fh_equivalent_from_list');

	// public readonly getUnitConversionMatrix: string = super.appendToBaseUrl('/get_unit_conversion_matrix');

	// public readonly getFhEquivalentByUnitAndUnitValue: string = super.appendToBaseUrl('/get_fh_equivalent_by_unit_and_unit_value');


	public constructor() {
		super(UnitConversionMatrixManagementApi.baseUrl);
	}

}