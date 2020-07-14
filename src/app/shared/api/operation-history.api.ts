import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class OperationHistoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/operation_history';

  public readonly findBidmOperationHistoric: string = super.appendToBaseUrl('/find_operation_historic');

  public constructor() {
    super(OperationHistoryApi.baseUrl);
  }
}
