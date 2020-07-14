import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../../shared/api/bidt-company.api';
import { BidtQualificationApi } from '../../../../shared/api/bidt-qualification.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class EmployeePlanningSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtQualificationApi: BidtQualificationApi
  ) {
    super(http, appConfigService);
  }

  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  public findByCriteriaSP(input: BidtSiteDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtSiteDTO, LabelValue<string>[]>(this.bidtSiteApi.findByCriteriaSP, input);
  }

  public findByCriteriaQualification(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtQualificationApi.findByCriteriaQualification);
  }

  /**************************************************************************
   * Warehouse api
   *************************************************************************/
  public findWarehousesBySite(input: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, input);
  }
}
