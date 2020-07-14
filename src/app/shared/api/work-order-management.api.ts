import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class WorkOrderManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/wo_management';

  public readonly create: string = super.appendToBaseUrl('/create');

  public constructor() {
    super(WorkOrderManagementApi.baseUrl);
  }
}
