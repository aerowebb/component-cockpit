import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtTorItemApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_tor_item';

  public readonly createTranferOrderTorItem: string = super.appendToBaseUrl('/create_transfer_order_tor_item');

  public constructor() {
    super(BidtTorItemApi.baseUrl);
  }
}
