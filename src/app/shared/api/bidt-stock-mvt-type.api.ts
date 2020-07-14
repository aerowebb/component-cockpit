import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStockMvtTypeApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_stock_mvt_type';

  public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findStockMvtTypeById: string = super.appendToBaseUrl('/find_stock_mvt_type_by_id');

  public constructor() {
    super(BidtStockMvtTypeApi.baseUrl);
  }
}
