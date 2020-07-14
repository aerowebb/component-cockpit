import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtWhpSbApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_whp_sb';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByStorageBinId: string = super.appendToBaseUrl('/find_by_storage_bin_id');

	// public readonly deleteByStorageBinId: string = super.appendToBaseUrl('/delete_by_storage_bin_id');

	// public readonly findByWarehouseProductId: string = super.appendToBaseUrl('/find_by_warehouse_product_id');

	// public readonly deleteByWarehouseProductId: string = super.appendToBaseUrl('/delete_by_warehouse_product_id');


	public constructor() {
		super(BidtWhpSbApi.baseUrl);
	}

}