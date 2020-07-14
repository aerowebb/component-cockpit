import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { StandardImportAmApi } from '../../../../../../shared/api/standard-import-am.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { ImportWorkTaskFromExcelInput } from '../../../../../../shared/types/api-input-types/work-order/import-work-task-from-excel-input.interface';
import { E5XMappingRowDTO } from '../../../../../../shared/types/api-types/e5x-mapping-row-dto.interface';
import { FileContent } from '../../../../../../shared/types/api-types/file-content.interface';

@Injectable({
  providedIn: 'root'
})
export class ImportTaskPopupService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly standardImportAmApi: StandardImportAmApi
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
    return super.post<void, Uint8Array>(this.standardImportAmApi.getImportWorkTaskXLS);
  }

  public ImportWorkTaskFromExcel(input: ImportWorkTaskFromExcelInput): Observable<string> {
    return super.post<ImportWorkTaskFromExcelInput, string>(this.standardImportAmApi.importWorkTaskFromExcel, input);
  }
}
