import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtPackageApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_package';

  public constructor() {
    super(BidtPackageApi.baseUrl);
  }
}
