import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStockTypeApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_stock_type';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria_stock_type');

  public readonly delete: string = super.appendToBaseUrl('/delete_stock_type');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id_stock_type');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public constructor() {
    super(BidtStockTypeApi.baseUrl);
  }
}
