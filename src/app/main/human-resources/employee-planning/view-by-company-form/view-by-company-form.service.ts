import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { StaffPlanningOutput } from '../../../../shared/types/api-output-types/bidt-employee/staff-planning-output.interface';

@Injectable({
  providedIn: 'root'
})
export class ViewByCompanyFormService extends AbstractAwHttpService {

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    // private readonly bidtSiteApi: BidtSiteApi,
    // private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi
  ) {
    super(http, appConfigService);
  }

  public getViewByCompanyData(input: StaffPlanningInput): Observable<StaffPlanningOutput[]> {
    return super.post<StaffPlanningInput, StaffPlanningOutput[]>(this.bidtEmployeeApi.getViewByCompanyData, input);
  }
}
