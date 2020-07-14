import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MhiaelImportApi } from '../../../../shared/api/mhiael/import.api';
import { AbstractAwMhiaelHttpService } from '../../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { RefreshArchivedImportReportInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { BireReportDTOId } from '../../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../../shared/types/api-types/bire-report-dto.interface';
import { ImportStatusDto } from '../../../../shared/types/api-types/import-status-dto-interface';
import { ImportTaskDTO } from '../../../../shared/types/api-types/import-task-dto.interface';

@Injectable()
export class XmlDataLoadingFormService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly mhiaelImportApi: MhiaelImportApi
  ) {
    super(http, appConfigService);
  }

  public importIPC(file: File): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importIPC, file);
  }

  public importTask(file: File, data?: ImportTaskDTO): Observable<void> {
    return super.postFile<File, void>(this.mhiaelImportApi.importTask, file, data);
  }

  public getImportTaskStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importTaskStatus);
  }

  public getImportIpcStatus(): Observable<ImportStatusDto[]> {
    return super.get<ImportStatusDto[]>(this.mhiaelImportApi.importIPCStatus);
  }

  public removeDataReportsByReportId(reports: RemoveDataInput): Observable<boolean> {
    return super.post<RemoveDataInput, boolean>(this.mhiaelImportApi.removeDataReportsByReportId, reports);
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
}
