import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStockMvtTypeOperationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_stock_mvt_type_operation';

  public constructor() {
    super(BidtStockMvtTypeOperationApi.baseUrl);
  }
}
