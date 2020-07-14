import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class MissionImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/mission_import';

	// public readonly importMissionFromXML: string = super.appendToBaseUrl('/import_mission_from_xml');

	// public readonly importMissionFromExcel: string = super.appendToBaseUrl('/import_mission_from_excel');

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly getXSD: string = super.appendToBaseUrl('/get_xsd');


	public constructor() {
		super(MissionImportApi.baseUrl);
	}

}