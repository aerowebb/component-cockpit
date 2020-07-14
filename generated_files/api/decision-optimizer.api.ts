import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class DecisionOptimizerApi extends AbstractApi {

	private static readonly baseUrl: string = '/decision_optimizer';

	// public readonly calculateDecisionList: string = super.appendToBaseUrl('/calculate_decision_list');


	public constructor() {
		super(DecisionOptimizerApi.baseUrl);
	}

}