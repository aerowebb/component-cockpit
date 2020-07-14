import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StandardImportBidtApi } from '../../../shared/api/standard-import-bidt.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ImportEmployeeFromExcelHRAndLogisticsInput } from '../../../shared/types/api-input-types/employee-data-exchange/import-employee-from-excel-hr-logistics-input.interface';
import { ImportFromExcelHRAndLogisticsOutputDTO } from '../../../shared/types/api-output-types/hr-data-exchange/import-from-excel-hr-logistic-output.interface';

@Injectable()
export class HrDataExchangeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly standardImportBidtApi: StandardImportBidtApi
  ) {
    super(http, appConfigService);
  }

  public getImportEmployee(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.standardImportBidtApi.getImportEmployeeXLS);
  }

  public importEmployeeFromExcel(
    file: ImportEmployeeFromExcelHRAndLogisticsInput
  ): Observable<ImportFromExcelHRAndLogisticsOutputDTO> {
    return super.post<ImportEmployeeFromExcelHRAndLogisticsInput, ImportFromExcelHRAndLogisticsOutputDTO>(
      this.standardImportBidtApi.importEmployeeFromExcel,
      file
    );
  }
}
