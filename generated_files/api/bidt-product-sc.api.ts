import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtProductScApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_product_sc';

	// public readonly findByProduct: string = super.appendToBaseUrl('/find_by_product');

	// public readonly deleteByProduct: string = super.appendToBaseUrl('/delete_by_product');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByStorageConditionId: string = super.appendToBaseUrl('/find_by_storage_condition_id');

	// public readonly deleteByStorageConditionId: string = super.appendToBaseUrl('/delete_by_storage_condition_id');


	public constructor() {
		super(BidtProductScApi.baseUrl);
	}

}