import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class PublicApi extends AbstractApi {
  private static readonly baseUrl: string = '/public/challenge';

  public readonly clients: string = super.appendToBaseUrl('/client/list');

  public readonly logout: string = super.appendToBaseUrl('/logout');

  public constructor() {
    super(PublicApi.baseUrl);
  }
}
