import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class MhiaelImportApi extends AbstractApi {
  private static readonly baseUrl: string = '/import';

  public readonly importIPC: string = super.appendToBaseUrl('/ipc');

  public readonly importIPCEnrichment: string = super.appendToBaseUrl('/ipc/enrichment');

  public readonly importSBADEnrichment: string = super.appendToBaseUrl('/sbad/enrichment');

  public readonly importTaskEnrichment: string = super.appendToBaseUrl('/task/enrichment');

  public readonly importTLMEnrichment: string = super.appendToBaseUrl('/tlm/enrichment');

  public readonly importTask: string = super.appendToBaseUrl('/task');

  public readonly importTaskStatus: string = super.appendToBaseUrl('/task/status');

  public readonly importIPCStatus: string = super.appendToBaseUrl('/ipc/status');

  public readonly importIPCEnrichmentStatus: string = super.appendToBaseUrl('/ipc/enrichment/status');

  public readonly importSBADEnrichmentStatus: string = super.appendToBaseUrl('/sbad/enrichment/status');

  public readonly importTaskEnrichmentStatus: string = super.appendToBaseUrl('/task/enrichment/status');

  public readonly importTLMEnrichmentStatus: string = super.appendToBaseUrl('/tlm/enrichment/status');

  public readonly fetchXmlDataLoadingReport: string = super.appendToBaseUrl('/fetch_xml_data_loading_report');

  public readonly findBireReportContentOfBireReport: string = super.appendToBaseUrl(
    '/find_bire_report_content_of_bire_report'
  );

  public readonly removeDataReportsByReportId: string = super.appendToBaseUrl(
    '/remove_data_report_xml_data_exchange_report'
  );

  public readonly changeRecordByPlanCode: string = super.appendToBaseUrl('/change_record_by_plan_code');
  public constructor() {
    super(MhiaelImportApi.baseUrl);
  }
}
