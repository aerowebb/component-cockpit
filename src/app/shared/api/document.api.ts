import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class DocumentApi extends AbstractApi {
  private static readonly baseUrl: string = '/document';

  public readonly findBidoBireDoc: string = super.appendToBaseUrl('/find_document');

  public constructor() {
    super(DocumentApi.baseUrl);
  }
}
