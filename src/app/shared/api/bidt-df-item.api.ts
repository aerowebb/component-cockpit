import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDfItemApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_df_item';

  public constructor() {
    super(BidtDfItemApi.baseUrl);
  }
}
