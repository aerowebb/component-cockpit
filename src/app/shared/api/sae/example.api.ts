import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class ExampleApi extends AbstractApi {
  private static readonly baseUrl: string = '/example';

  public constructor() {
    super(ExampleApi.baseUrl);
  }
}
