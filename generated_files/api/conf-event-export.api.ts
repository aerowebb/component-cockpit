import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ConfEventExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/conf_event_export';

	// public readonly exportConfEvent: string = super.appendToBaseUrl('/export_conf_event');


	public constructor() {
		super(ConfEventExportApi.baseUrl);
	}

}