import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtValuationGroupApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_valuation_group';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria_valuation');

  public readonly delete: string = super.appendToBaseUrl('/delete_valuation_group');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly dropDownStockValuationType: string = super.appendToBaseUrl('/drop_down_stock_valuation_type');

  public readonly findAllByPn: string = super.appendToBaseUrl('/find_all_by_pn');

  public constructor() {
    super(BidtValuationGroupApi.baseUrl);
  }
}
