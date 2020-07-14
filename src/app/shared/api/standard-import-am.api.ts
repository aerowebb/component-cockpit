import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class StandardImportAmApi extends AbstractApi {
  private static readonly baseUrl: string = '/standard_import_am';

  public readonly getImportWorkTaskXLS: string = super.appendToBaseUrl('/get_import_work_task_xls');

  public readonly importWorkTaskFromExcel: string = super.appendToBaseUrl('/import_work_task_from_excel');

  public constructor() {
    super(StandardImportAmApi.baseUrl);
  }
}
