import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtControlApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_control';

	// public readonly findAll: string = super.appendToBaseUrl('/find_all');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByControlGroupId: string = super.appendToBaseUrl('/find_by_control_group_id');

	// public readonly deleteByControlGroupId: string = super.appendToBaseUrl('/delete_by_control_group_id');


	public constructor() {
		super(BidtControlApi.baseUrl);
	}

}