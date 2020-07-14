import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { StandardImportApi } from '../../../../../../shared/api/standard-import.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { E5XMappingRowDTO } from '../../../../../../shared/types/api-types/e5x-mapping-row-dto.interface';
import { FileContent } from '../../../../../../shared/types/api-types/file-content.interface';
import { ReportDTO } from '../../../../../../shared/types/api-types/report-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class E5xMappingService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly standardImportApi: StandardImportApi
  ) {
    super(http, appConfigService);
  }

  public loadE5xTableData(): Observable<E5XMappingRowDTO[]> {
    return super.post<void, E5XMappingRowDTO[]>(this.fleetManagementApi.findE5XMappingRowsByMandant);
  }

  public getExcelFileOnExport(): Observable<FileContent> {
    return super.post<void, FileContent>(this.fleetBusinessApi.getImportE5xMappingReport);
  }

  public downloadTemplate(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.standardImportApi.getImportE5XMappingXLS);
  }

  public importFile(input: FileContent): Observable<ReportDTO> {
    return super.post<FileContent, ReportDTO>(this.standardImportApi.importE5XMappingFromExcel, input);
  }
}
