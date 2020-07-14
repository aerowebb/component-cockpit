import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtControlGroupApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_control_group';

	// public readonly findAll: string = super.appendToBaseUrl('/find_all');

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByFuncObjectId: string = super.appendToBaseUrl('/find_by_func_object_id');

	// public readonly deleteByFuncObjectId: string = super.appendToBaseUrl('/delete_by_func_object_id');


	public constructor() {
		super(BidtControlGroupApi.baseUrl);
	}

}