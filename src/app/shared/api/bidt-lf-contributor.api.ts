import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtLfContributorApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_lf_contributor';

  public constructor() {
    super(BidtLfContributorApi.baseUrl);
  }
}
