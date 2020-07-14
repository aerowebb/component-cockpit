import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class LlpSheetExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/llp_sheet_export';

	// public readonly setUserExits: string = super.appendToBaseUrl('/set_user_exits');

	// public readonly generateXlsLlpSheet: string = super.appendToBaseUrl('/generate_xls_llp_sheet');

	// public readonly calculateLifeLimitedPartStatus: string = super.appendToBaseUrl('/calculate_life_limited_part_status');


	public constructor() {
		super(LlpSheetExportApi.baseUrl);
	}

}