import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class StandardExportApi extends AbstractApi {
  private static readonly baseUrl: string = '/standard_export';

  public readonly exportConfEvent: string = super.appendToBaseUrl('/export_conf_event');

  public readonly exportFlights: string = super.appendToBaseUrl('/export_flights');

  public readonly exportGlobal: string = super.appendToBaseUrl('/export_Global');

  public constructor() {
    super(StandardExportApi.baseUrl);
  }
}
