import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtPnAlternativeApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_pn_alternative';

	// public readonly findByPn: string = super.appendToBaseUrl('/find_by_pn');

	// public readonly removeByPn: string = super.appendToBaseUrl('/remove_by_pn');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');


	public constructor() {
		super(BidtPnAlternativeApi.baseUrl);
	}

}