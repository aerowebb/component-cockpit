import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ReferentialImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/referential_import';

	// public readonly importReferentialFile: string = super.appendToBaseUrl('/import_referential_file');

	// public readonly getXSD: string = super.appendToBaseUrl('/get_xsd');


	public constructor() {
		super(ReferentialImportApi.baseUrl);
	}

}