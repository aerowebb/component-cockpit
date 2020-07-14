import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class StandardImportApi extends AbstractApi {
  private static readonly baseUrl: string = '/standard_import';

  // public readonly setUserExits: string = super.appendToBaseUrl('/set_user_exits');

  // public readonly getImportConfEventXSD: string = super.appendToBaseUrl('/get_import_conf_event_xsd');

  // public readonly beforeImportConfEvent: string = super.appendToBaseUrl('/before_import_conf_event');

  // public readonly afterImportConfEvent: string = super.appendToBaseUrl('/after_import_conf_event');

  // public readonly getImportMissionXSD: string = super.appendToBaseUrl('/get_import_mission_xsd');

  // public readonly importMissionFromXML: string = super.appendToBaseUrl('/import_mission_from_xml');

  // public readonly getImportMissionXLS: string = super.appendToBaseUrl('/get_import_mission_xls');

  // public readonly importMissionFromExcel: string = super.appendToBaseUrl('/import_mission_from_excel');

  // public readonly getImportAttributeValuesBidoXLS: string = super.appendToBaseUrl('/get_import_attribute_values_bido_xls');

  // public readonly getImportCounterXLS: string = super.appendToBaseUrl('/get_import_counter_xls');

  // public readonly importCounterFromExcel: string = super.appendToBaseUrl('/import_counter_from_excel');

  // public readonly getImportFlStructureXLS: string = super.appendToBaseUrl('/get_import_fl_structure_xls');

  // public readonly importFlStructureFromExcel: string = super.appendToBaseUrl('/import_fl_structure_from_excel');

  // public readonly getImportUsageXLS: string = super.appendToBaseUrl('/get_import_usage_xls');

  // public readonly importUsageFromExcel: string = super.appendToBaseUrl('/import_usage_from_excel');

  // public readonly getImportFleetDataXLS: string = super.appendToBaseUrl('/get_import_fleet_data_xls');

  // public readonly importFleetDataFromExcel: string = super.appendToBaseUrl('/import_fleet_data_from_excel');

  public readonly getImportE5XMappingXLS: string = super.appendToBaseUrl('/get_import_e5_x_mapping_xls');

  public readonly importE5XMappingFromExcel: string = super.appendToBaseUrl('/import_e5_x_mapping_from_excel');

  // public readonly importAttributeValuesBidoFromExcel: string = super.appendToBaseUrl('/import_attribute_values_bido_from_excel');

  // public readonly getImportUnitConversionMatrixMappingXLS: string = super.appendToBaseUrl('/get_import_unit_conversion_matrix_mapping_xls');

  public readonly importUnitConversionMatrixFromExcel: string = super.appendToBaseUrl(
    '/import_unit_conversion_matrix_from_excel'
  );

  public readonly importUnitConversionMatrixWithVariantFromExcel: string = super.appendToBaseUrl(
    '/import_unit_conversion_matrix_with_variant_from_excel'
  );

  public readonly getImportAttributeValuesBidoXLS: string = super.appendToBaseUrl('/getimportattributevaluesxls');

  public readonly importattributevaluesfromexcel: string = super.appendToBaseUrl('/importattributevaluesfromexcel');

  // public readonly importConfEvent: string = super.appendToBaseUrl('/import_conf_event');

  public readonly getImportFleetDataTemplate: string = super.appendToBaseUrl('/get_import_fleet_data_template');

  public constructor() {
    super(StandardImportApi.baseUrl);
  }
}
