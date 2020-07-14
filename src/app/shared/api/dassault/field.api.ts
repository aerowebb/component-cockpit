import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class DavFieldApi extends AbstractApi {
  private static readonly baseUrl: string = '/field';

  public readonly buildTaskFieldLink: string = super.appendToBaseUrl('/build_task_field_link');

  public constructor() {
    super(DavFieldApi.baseUrl);
  }
}
