import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class AtaImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/ata_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importAtasFromExcel: string = super.appendToBaseUrl('/import_atas_from_excel');


	public constructor() {
		super(AtaImportApi.baseUrl);
	}

}