import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtContractApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_contract';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly deleteEmployee: string = super.appendToBaseUrl('/delete_employee');

  public readonly findByCriteriaContractList: string = super.appendToBaseUrl('/find_by_criteria_contract_list');

  public readonly deleteContract: string = super.appendToBaseUrl('/delete_contract');

  public constructor() {
    super(BidtContractApi.baseUrl);
  }
}
