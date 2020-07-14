import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class IpcImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/ipc_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importIPCFromExcel: string = super.appendToBaseUrl('/import_ipc_from_excel');


	public constructor() {
		super(IpcImportApi.baseUrl);
	}

}