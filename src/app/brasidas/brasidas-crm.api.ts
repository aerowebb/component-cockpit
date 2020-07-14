import { Injectable } from '@angular/core';

import { AbstractApi } from '../shared/api/abstract.api';

@Injectable()
export class BrasidasCrmApi extends AbstractApi {
  private static readonly baseUrl: string = 'brasidas/crm';

  public readonly generateCrmPackageReport: string = super.appendToBaseUrl('');

  public constructor() {
    super(BrasidasCrmApi.baseUrl);
  }
}
