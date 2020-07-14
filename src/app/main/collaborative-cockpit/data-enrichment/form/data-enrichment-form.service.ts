import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MhiaelExportApi } from '../../../../shared/api/mhiael/export.api';
import { MhiaelImportApi } from '../../../../shared/api/mhiael/import.api';
import { AbstractAwMhiaelHttpService } from '../../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { RefreshArchivedImportReportInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { DataEnrichmentExportDTO } from '../../../../shared/types/api-input-types/mhiael/data-enrichement-export-dto.interface';
import { DataEnrichmentImportDTO } from '../../../../shared/types/api-input-types/mhiael/data-enrichement-import-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireReportDTOId } from '../../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../../shared/types/api-types/bire-report-dto.interface';
import { ImportStatusDto } from '../../../../shared/types/api-types/import-status-dto-interface';
import { ImportTaskDTO } from '../../../../shared/types/api-types/import-task-dto.interface';

@Injectable()
export class DataEnrichmentFormService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly mhiaelExportApi: MhiaelExportApi,
    private readonly mhiaelImportApi: MhiaelImportApi
  ) {
    super(http, appConfigService);
  }

  public findBireMaintenancePlans(): Observable<BireMaintenancePlanDTO[]> {
    return super.post<string, BireMaintenancePlanDTO[]>(this.mhiaelExportApi.findBireMaintenancePlans, undefined);
  }

  public exportIpc(input: DataEnrichmentExportDTO): Observable<HttpResponse<Blob>> {
    return super.postWithFullResponse<DataEnrichmentExportDTO, Blob>(this.mhiaelExportApi.exportIPC, input, {
      responseType: 'blob'
    });
  }

  public exportTask(input: DataEnrichmentExportDTO): Observable<HttpResponse<Blob>> {
    return super.postWithFullResponse<DataEnrichmentExportDTO, Blob>(this.mhiaelExportApi.exportTask, input, {
      responseType: 'blob'
    });
  }

  public exportSbAd(input: DataEnrichmentExportDTO): Observable<HttpResponse<Blob>> {
    return super.postWithFullResponse<DataEnrichmentExportDTO, Blob>(this.mhiaelExportApi.exportSbAd, input, {
      responseType: 'blob'
    });
  }

  public importIpc(file: File, data?: DataEnrichmentImportDTO): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importIPCEnrichment, file, data);
  }

  public importSBAD(file: File, data?: DataEnrichmentImportDTO): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importSBADEnrichment, file, data);
  }

  public importTask(file: File, data?: ImportTaskDTO): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importTaskEnrichment, file, data);
  }

  public importTLM(file: File, data?: DataEnrichmentImportDTO): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importTLMEnrichment, file, data);
  }

  public getImportSBADEnrichmentStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importSBADEnrichmentStatus);
  }

  public getImportIpcEnrichmentStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importIPCEnrichmentStatus);
  }

  public getImportTaskEnrichmentStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importTaskEnrichmentStatus);
  }

  public getImportTLMEnrichmentStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importTLMEnrichmentStatus);
  }

  public fetchXmlDataLoadingReport(
    refreshArchivedImportReportInput: RefreshArchivedImportReportInput
  ): Observable<BireReportDTO[]> {
    return super.post<RefreshArchivedImportReportInput, BireReportDTO[]>(
      this.mhiaelImportApi.fetchXmlDataLoadingReport,
      refreshArchivedImportReportInput
    );
  }

  public openImportReportContent(input: BireReportDTOId): Observable<Uint8Array> {
    return super.post<BireReportDTOId, Uint8Array>(this.mhiaelImportApi.findBireReportContentOfBireReport, input);
  }

  public removeDataReportsByReportId(reports: RemoveDataInput): Observable<boolean> {
    return super.post<RemoveDataInput, boolean>(this.mhiaelImportApi.removeDataReportsByReportId, reports);
  }
}
