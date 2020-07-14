import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtLitigationFolderApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_litigation_folder';

  public constructor() {
    super(BidtLitigationFolderApi.baseUrl);
  }
}
