import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MhiaelImportApi } from '../../../../shared/api/mhiael/import.api';
import { AbstractAwMhiaelHttpService } from '../../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ChangeRecordMaintenancePlanCodeDTO } from '../../../../shared/types/api-types/change-record-maintenance-plancode-dto.interface';

@Injectable()
export class ChangeRecordFormService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly mhiaelImportApi: MhiaelImportApi
  ) {
    super(http, appConfigService);
  }

  public changeRecordByPlanCode(input: string): Observable<ChangeRecordMaintenancePlanCodeDTO[]> {
    return super.post<string, ChangeRecordMaintenancePlanCodeDTO[]>(this.mhiaelImportApi.changeRecordByPlanCode, input);
  }
}
