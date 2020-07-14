import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AMProjectManagementApi } from '../../../../../../shared/api/am-project-management.api';
import { ProjectManagementApi } from '../../../../../../shared/api/project-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { BidmProjectReportDtoId } from '../../../../../../shared/types/api-types/bidm-project-report-dto-id.interface';
import { FileContentDTO } from '../../../../../../shared/types/api-types/file-content-dto.interface';

@Injectable()
export class WpReportDialogFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly projectManagementApi: ProjectManagementApi
  ) {
    super(http, appConfigService);
  }

  public generateWorkPackageReport(bidmProjectReportDTOId: BidmProjectReportDtoId): Observable<FileContentDTO> {
    return super.post<BidmProjectReportDtoId, FileContentDTO>(
      this.amProjectManagementApi.generateWorkPackageReport,
      bidmProjectReportDTOId
    );
  }

  public generateAssetWorkXmlAlternate(projectId: string = ''): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(this.amProjectManagementApi.generateAssetWorkXmlAlternate, projectId);
  }

  public exportBidmFindingsReportPdf(projectId: string = ''): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(this.projectManagementApi.exportBidmFindingsReportPdf, projectId);
  }

  public exportBsdeFindingsReportPdf(projectId: string = ''): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(this.projectManagementApi.exportBsdeFindingsReportPdf, projectId);
  }

  public generateAPRSCertificate(bidmProjectReportDTOId: BidmProjectReportDtoId): Observable<FileContentDTO> {
    return super.post<BidmProjectReportDtoId, FileContentDTO>(
      this.amProjectManagementApi.generateAPRSCertificate,
      bidmProjectReportDTOId
    );
  }
}
