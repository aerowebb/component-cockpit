import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtPackageOperationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_package_operation';

  public constructor() {
    super(BidtPackageOperationApi.baseUrl);
  }
}
