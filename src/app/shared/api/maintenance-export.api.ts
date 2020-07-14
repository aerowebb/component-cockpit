import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class MaintenanceExportApi extends AbstractApi {
  private static readonly baseUrl: string = '/maintenance_export';

  public readonly exportMaintenanceFile: string = super.appendToBaseUrl('/export_maintenance_file');

  public readonly exportMaintenanceFileExcel: string = super.appendToBaseUrl('/export_maintenance_file_excel');

  public constructor() {
    super(MaintenanceExportApi.baseUrl);
  }
}
