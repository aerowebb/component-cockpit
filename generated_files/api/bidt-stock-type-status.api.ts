import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtStockTypeStatusApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_stock_type_status';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByStockTypeId: string = super.appendToBaseUrl('/find_by_stock_type_id');

	// public readonly deleteByStockTypeId: string = super.appendToBaseUrl('/delete_by_stock_type_id');


	public constructor() {
		super(BidtStockTypeStatusApi.baseUrl);
	}

}