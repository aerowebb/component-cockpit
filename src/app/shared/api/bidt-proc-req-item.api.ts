import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtProcReqItemApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_proc_req_item';

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public constructor() {
    super(BidtProcReqItemApi.baseUrl);
  }
}
