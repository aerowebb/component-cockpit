import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class E5XMappingApi extends AbstractApi {

	private static readonly baseUrl: string = '/e5_x_mapping';

	// public readonly findE5XMappingRowsByMandant: string = super.appendToBaseUrl('/find_e_5_x_mapping_rows_by_mandant');

	// public readonly findE5XEventTypesByFmdEventType: string = super.appendToBaseUrl('/find_e_5_x_event_types_by_fmd_event_type');

	// public readonly getE5XRefCodeByE5XFieldIdAndAwRefName: string = super.appendToBaseUrl('/get_e_5_x_ref_code_by_e_5_x_field_id_and_aw_ref_name');

	// public readonly getE5XRefCodeByE5XFieldIdAndAwRefCode: string = super.appendToBaseUrl('/get_e_5_x_ref_code_by_e_5_x_field_id_and_aw_ref_code');

	// public readonly getAwRefNameByE5xFieldIdAndAwRefCode: string = super.appendToBaseUrl('/get_aw_ref_name_by_e_5x_field_id_and_aw_ref_code');


	public constructor() {
		super(E5XMappingApi.baseUrl);
	}

}