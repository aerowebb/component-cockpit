import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtExternalUserApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_external_user';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');


	public constructor() {
		super(BidtExternalUserApi.baseUrl);
	}

}