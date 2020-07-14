import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class NgPublicApi extends AbstractApi {
  private static readonly baseUrl: string = '/public/ng';

  public readonly login: string = super.appendToBaseUrl('/');
  public readonly getClient: string = super.appendToBaseUrl('/customization');

  public constructor() {
    super(NgPublicApi.baseUrl);
  }
}
