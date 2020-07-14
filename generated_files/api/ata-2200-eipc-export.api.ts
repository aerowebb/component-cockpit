import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class Ata2200EipcExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/ata2200_eipc_export';

	// public readonly exportDetailPartsList: string = super.appendToBaseUrl('/export_detail_parts_list');


	public constructor() {
		super(Ata2200EipcExportApi.baseUrl);
	}

}