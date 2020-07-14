import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class EngineeringDataExchangeApi extends AbstractApi {
  private static readonly baseUrl: string = '/engineering_data_exchange';

  public readonly findDataListBySearchCriteria: string = super.appendToBaseUrl('/find_data_list_by_search_criteria');

  public readonly findFormatList: string = super.appendToBaseUrl('/find_format_list');

  public readonly findTypeList: string = super.appendToBaseUrl('/find_type_list');

  public readonly saveEngineeringExcelDataExchange: string = super.appendToBaseUrl(
    '/save_engineering_excel_data_exchange'
  );

  public readonly refreshEngineeringDataExchange: string = super.appendToBaseUrl('/refresh_engineering_data_exchange');

  public readonly saveEngineeringXMLDataExchange: string = super.appendToBaseUrl('/save_engineering_xml_data_exchange');

  public readonly removeReportsByReportId: string = super.appendToBaseUrl(
    '/remove_engineering_xml_data_exchange_report'
  );

  public readonly fetchEngineeringDataExchangeTemplate: string = super.appendToBaseUrl(
    '/fetch_engineering_data_exchange_template'
  );

  public constructor() {
    super(EngineeringDataExchangeApi.baseUrl);
  }
}
