import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FleetExportApi extends AbstractApi {

	private static readonly baseUrl: string = '/fleet_export';

	// public readonly exportAssetData: string = super.appendToBaseUrl('/export_asset_data');


	public constructor() {
		super(FleetExportApi.baseUrl);
	}

}