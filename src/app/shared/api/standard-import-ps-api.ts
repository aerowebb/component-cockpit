import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class StandardImportPsApi extends AbstractApi {

  private static readonly baseUrl: string = '/standard_import_ps';

  // public readonly getImportIpcXLS: string = super.appendToBaseUrl('/get_import_ipc_xls');

  // public readonly importReferentialFile: string = super.appendToBaseUrl('/import_referential_file');

  // public readonly getReferentialImportXSD: string = super.appendToBaseUrl('/get_referential_import_xsd');

  public readonly getImportAttributeValuesBireXLS: string =
  super.appendToBaseUrl('/get_import_attribute_values_bire_xls');

  // public readonly importIpcFromExcel: string = super.appendToBaseUrl('/import_ipc_from_excel');

  // public readonly getImportExperienceXLS: string = super.appendToBaseUrl('/get_import_experience_xls');

  // public readonly importExperienceFromExcel: string = super.appendToBaseUrl('/import_experience_from_excel');

  public readonly importAttributeValuesBireFromExcel: string =
  super.appendToBaseUrl('/import_attribute_values_bire_from_excel');


  public constructor() {
    super(StandardImportPsApi.baseUrl);
 }

}
