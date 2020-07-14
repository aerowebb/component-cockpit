import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtLaborTemplateHoursApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_labor_template_hours';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByLaborTemplateId: string = super.appendToBaseUrl('/find_by_labor_template_id');

	// public readonly deleteByLaborTemplateId: string = super.appendToBaseUrl('/delete_by_labor_template_id');


	public constructor() {
		super(BidtLaborTemplateHoursApi.baseUrl);
	}

}