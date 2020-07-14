import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtAbsenceApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_absence';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly deleteByEmployeeByBidtEmployeeIdId: string = super.appendToBaseUrl('/delete_by_employee_by_bidt_employee_id_id');

	// public readonly findByEmployeeByBidtEmployeeId2Id: string = super.appendToBaseUrl('/find_by_employee_by_bidt_employee_id_2_id');

	// public readonly deleteByEmployeeByBidtEmployeeId2Id: string = super.appendToBaseUrl('/delete_by_employee_by_bidt_employee_id_2_id');

	// public readonly findByEmployeeByBidtEmployeeIdId: string = super.appendToBaseUrl('/find_by_employee_by_bidt_employee_id_id');


	public constructor() {
		super(BidtAbsenceApi.baseUrl);
	}

}