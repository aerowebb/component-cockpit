import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtHistoStatusUpdateApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_histo_status_update';

  public constructor() {
    super(BidtHistoStatusUpdateApi.baseUrl);
  }
}
