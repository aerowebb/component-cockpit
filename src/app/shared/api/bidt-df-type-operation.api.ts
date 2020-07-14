import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDfTypeOperationApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_df_type_operation';

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly getBidtDfTypeOperationsByDfType: string = super.appendToBaseUrl('/get_by_df_type');

  public readonly addOrUpdateOperations: string = super.appendToBaseUrl('/add_or_update_operations');

  public constructor() {
    super(BidtDfTypeOperationApi.baseUrl);
  }
}
