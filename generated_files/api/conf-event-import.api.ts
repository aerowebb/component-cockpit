import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ConfEventImportApi extends AbstractApi {

	private static readonly baseUrl: string = '/conf_event_import';

	// public readonly importConfEvent: string = super.appendToBaseUrl('/import_conf_event');

	// public readonly getXSD: string = super.appendToBaseUrl('/get_xsd');


	public constructor() {
		super(ConfEventImportApi.baseUrl);
	}

}