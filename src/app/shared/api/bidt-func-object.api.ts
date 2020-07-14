import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtFuncObjectApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_func_object';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public constructor() {
    super(BidtFuncObjectApi.baseUrl);
  }
}
