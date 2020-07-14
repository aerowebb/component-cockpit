import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class WorkflowExportApi extends AbstractApi {
  private static readonly baseUrl: string = '/workflow_export';

  public readonly generateXlsWorkFlow: string = super.appendToBaseUrl('/generate_xls_work_flow');

  public constructor() {
    super(WorkflowExportApi.baseUrl);
  }
}
