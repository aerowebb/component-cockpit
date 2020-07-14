import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtStockMvtAttributeApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_stock_mvt_attribute';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly deleteByStockMvtId: string = super.appendToBaseUrl('/delete_by_stock_mvt_id');

	// public readonly findByStockMvtId: string = super.appendToBaseUrl('/find_by_stock_mvt_id');


	public constructor() {
		super(BidtStockMvtAttributeApi.baseUrl);
	}

}