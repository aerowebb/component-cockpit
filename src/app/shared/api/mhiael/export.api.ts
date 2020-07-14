import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class MhiaelExportApi extends AbstractApi {
  private static readonly baseUrl: string = '/export';

  public readonly exportIPC: string = super.appendToBaseUrl('/ipc');

  public readonly exportTask: string = super.appendToBaseUrl('/task');

  public readonly exportSbAd: string = super.appendToBaseUrl('/sbad');

  public readonly sbadExport: string = super.appendToBaseUrl('/sbad_export');

  public readonly exportPn: string = super.appendToBaseUrl('/pn');

  public readonly findBireMaintenancePlans: string = super.appendToBaseUrl('/find_bire_maintenance_plans');

  public constructor() {
    super(MhiaelExportApi.baseUrl);
  }
}
