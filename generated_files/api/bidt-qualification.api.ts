import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtQualificationApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_qualification';

	// public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

	// public readonly findByMandantAndQualificationCode: string = super.appendToBaseUrl('/find_by_mandant_and_qualification_code');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');


	public constructor() {
		super(BidtQualificationApi.baseUrl);
	}

}