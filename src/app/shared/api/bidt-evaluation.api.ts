import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtEvaluationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_evaluation';

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByEmployeeByBidtEmployeeIdId: string = super.appendToBaseUrl('/delete_by_employee_by_bidt_employee_id_id');

  // public readonly findByEmployeeByBidtEmployeeId2Id: string = super.appendToBaseUrl('/find_by_employee_by_bidt_employee_id_2_id');

  // public readonly deleteByEmployeeByBidtEmployeeId2Id: string = super.appendToBaseUrl('/delete_by_employee_by_bidt_employee_id_2_id');

  public readonly findEvaluationsByEmployeeId: string = super.appendToBaseUrl('/find_evaluations_by_employee_id');

  public constructor() {
    super(BidtEvaluationApi.baseUrl);
  }
}
