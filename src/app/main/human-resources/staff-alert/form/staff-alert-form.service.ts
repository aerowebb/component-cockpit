import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindStaffAlertInput } from '../../../../shared/types/api-input-types/bidt-employee/find-staff-alert-input.interface';
import { GetBidtStockMvtAlertInputDTO } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-input-dto.interface';
import { StaffAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-employee/staff-alert-output-dto.interface';
import { GetBidtStockMvtAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-output-dto.interface';

@Injectable()
export class StaffAlertFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStockMvt: BidtStockMvtApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi
  ) {
    super(http, appConfigService);
  }

  public calculate(input: GetBidtStockMvtAlertInputDTO): Observable<GetBidtStockMvtAlertOutputDTO[]> {
    return super.post<GetBidtStockMvtAlertInputDTO, GetBidtStockMvtAlertOutputDTO[]>(
      this.bidtStockMvt.findAlerts,
      input
    );
  }

  public findStaffAlerts(input: FindStaffAlertInput): Observable<StaffAlertOutputDTO[]> {
    return super.post<FindStaffAlertInput, StaffAlertOutputDTO[]>(this.bidtEmployeeApi.findStaffAlerts, input);
  }
}
