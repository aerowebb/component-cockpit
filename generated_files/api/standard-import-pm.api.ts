import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class StandardImportPmApi extends AbstractApi {

	private static readonly baseUrl: string = '/standard_import_pm';

	// public readonly getImportAtaXLS: string = super.appendToBaseUrl('/get_import_ata_xls');

	// public readonly importAtaFromExcel: string = super.appendToBaseUrl('/import_ata_from_excel');

	// public readonly getImportTaskBsdeXLS: string = super.appendToBaseUrl('/get_import_task_bsde_xls');

	// public readonly importTaskBsdeFromExcel: string = super.appendToBaseUrl('/import_task_bsde_from_excel');


	public constructor() {
		super(StandardImportPmApi.baseUrl);
	}

}