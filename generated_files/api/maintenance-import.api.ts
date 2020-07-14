import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class MaintenanceImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/maintenance_import';

	// public readonly importMaintenanceFile: string = super.appendToBaseUrl('/import_maintenance_file');

	// public readonly getXSD: string = super.appendToBaseUrl('/get_xsd');


	public constructor() {
		super(MaintenanceImportApi.baseUrl);
	}

}