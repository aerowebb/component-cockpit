import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtSalaryApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_salary';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');


	public constructor() {
		super(BidtSalaryApi.baseUrl);
	}

}