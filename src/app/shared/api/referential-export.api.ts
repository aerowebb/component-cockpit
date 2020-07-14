import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ReferentialExportApi extends AbstractApi {
  private static readonly baseUrl: string = '/referential_export';

  public readonly exportReferentialFile: string = super.appendToBaseUrl('/export_referential_file');
  public readonly exportReferentialFileExcel: string = super.appendToBaseUrl('/export_referential_file_excel');

  // public readonly exportReferentialFile: string = super.appendToBaseUrl('/export_referential_file');

  public readonly exportDetailPartsList: string = super.appendToBaseUrl('/export_detail_parts_list');

  public constructor() {
    super(ReferentialExportApi.baseUrl);
  }
}
