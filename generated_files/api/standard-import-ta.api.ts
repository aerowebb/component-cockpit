import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class StandardImportTaApi extends AbstractApi {

	private static readonly baseUrl: string = '/standard_import_ta';

	// public readonly importMaintenanceFile: string = super.appendToBaseUrl('/import_maintenance_file');

	// public readonly getMaintenanceImportXSD: string = super.appendToBaseUrl('/get_maintenance_import_xsd');

	// public readonly getImportTaskBireXLS: string = super.appendToBaseUrl('/get_import_task_bire_xls');

	// public readonly importTaskBireFromExcel: string = super.appendToBaseUrl('/import_task_bire_from_excel');


	public constructor() {
		super(StandardImportTaApi.baseUrl);
	}

}