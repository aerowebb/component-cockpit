import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStorageConditionApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_storage_condition';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly delete: string = super.appendToBaseUrl('/delete_storage_condition');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria_storage_condition');

  public constructor() {
    super(BidtStorageConditionApi.baseUrl);
  }
}
