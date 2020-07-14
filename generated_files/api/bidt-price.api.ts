import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtPriceApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_price';

	// public readonly findByProduct: string = super.appendToBaseUrl('/find_by_product');

	// public readonly findByValuationGroupCodeAndProductCode: string = super.appendToBaseUrl('/find_by_valuation_group_code_and_product_code');

	// public readonly findByValuationGroupAndProduct: string = super.appendToBaseUrl('/find_by_valuation_group_and_product');

	// public readonly deleteByProduct: string = super.appendToBaseUrl('/delete_by_product');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByValuationGroupId: string = super.appendToBaseUrl('/find_by_valuation_group_id');

	// public readonly deleteByValuationGroupId: string = super.appendToBaseUrl('/delete_by_valuation_group_id');


	public constructor() {
		super(BidtPriceApi.baseUrl);
	}

}