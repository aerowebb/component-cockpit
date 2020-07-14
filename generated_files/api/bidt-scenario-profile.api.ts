import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtScenarioProfileApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_scenario_profile';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly deleteByScenarioId: string = super.appendToBaseUrl('/delete_by_scenario_id');

	// public readonly findByScenarioId: string = super.appendToBaseUrl('/find_by_scenario_id');


	public constructor() {
		super(BidtScenarioProfileApi.baseUrl);
	}

}