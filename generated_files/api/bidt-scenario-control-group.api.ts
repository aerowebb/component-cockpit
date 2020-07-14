import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtScenarioControlGroupApi extends AbstractApi {

	private static readonly baseUrl: string = '/bidt_scenario_control_group';

	// public readonly delete: string = super.appendToBaseUrl('/delete');

	// public readonly getById: string = super.appendToBaseUrl('/get_by_id');

	// public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

	// public readonly findByControlGroupId: string = super.appendToBaseUrl('/find_by_control_group_id');

	// public readonly deleteByControlGroupId: string = super.appendToBaseUrl('/delete_by_control_group_id');

	// public readonly deleteByScenarioId: string = super.appendToBaseUrl('/delete_by_scenario_id');

	// public readonly findByScenarioId: string = super.appendToBaseUrl('/find_by_scenario_id');


	public constructor() {
		super(BidtScenarioControlGroupApi.baseUrl);
	}

}