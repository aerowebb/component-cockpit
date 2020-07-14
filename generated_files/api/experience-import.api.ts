import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ExperienceImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/experience_import';

	// public readonly getXLS: string = super.appendToBaseUrl('/get_xls');

	// public readonly importExperiencesFromExcel: string = super.appendToBaseUrl('/import_experiences_from_excel');


	public constructor() {
		super(ExperienceImportApi.baseUrl);
	}

}