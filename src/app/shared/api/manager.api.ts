import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ManagerApi extends AbstractApi {
  private static readonly baseUrl: string = 'brasidas/manager';

  public readonly getWorkShopManagerInfo: string = super.appendToBaseUrl('get_workshop_manager_info');

  public constructor() {
    super(ManagerApi.baseUrl);
  }
}
