import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtStorageBinTypeApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_storage_bin_type';

	// public readonly findAll: string = super.appendToBaseUrl('/find_all');

	// public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');


	public constructor() {
		super(BidtStorageBinTypeApi.baseUrl);
	}

}