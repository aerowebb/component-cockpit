import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class E5XFmdExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/e5_x_fmd_export';

	// public readonly generateE5XFileFromFMD: string = super.appendToBaseUrl('/generate_e_5_x_file_from_fmd');


	public constructor() {
		super(E5XFmdExportApi.baseUrl);
	}

}