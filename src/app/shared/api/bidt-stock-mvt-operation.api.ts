import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStockMvtOperationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_stock_mvt_operation';

  public constructor() {
    super(BidtStockMvtOperationApi.baseUrl);
  }
}
