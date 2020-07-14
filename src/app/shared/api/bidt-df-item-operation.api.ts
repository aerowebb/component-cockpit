import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDfItemOperationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_df_item_operation';

  public constructor() {
    super(BidtDfItemOperationApi.baseUrl);
  }
}
