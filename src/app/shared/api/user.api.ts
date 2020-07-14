import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class UserApi extends AbstractApi {
  private static readonly baseUrl: string = '/user';

  public readonly current: string = super.appendToBaseUrl('/current');

  public constructor() {
    super(UserApi.baseUrl);
  }
}
