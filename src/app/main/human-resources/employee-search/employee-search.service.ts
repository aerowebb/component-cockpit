import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../shared/api/bidt-company.api';
import { BidtContractApi } from '../../../shared/api/bidt-contract.api';
import { BidtEmployeeApi } from '../../../shared/api/bidt-employee.api';
import { BidtSiteApi } from '../../../shared/api/bidt-site.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindEmployeeBySearchCriteriaInput } from '../../../shared/types/api-input-types/bidt-employee/find-employee-by-search-criteria-input.interface';
import { BidtCompanyDTO } from '../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EmployeeSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtContractApi: BidtContractApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Employee api
   *************************************************************************/
  public findEmployeeBySearchCriteria(
    criteria: FindEmployeeBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BidtEmployeeDTO>> {
    return super.post<FindEmployeeBySearchCriteriaInput, SearchResultsDTO<BidtEmployeeDTO>>(
      this.bidtEmployeeApi.findEmployeeBySearchCriteria,
      criteria
    );
  }

  /**************************************************************************
   * Contract api
   *************************************************************************/
  public deleteEmployees(employeList: BidtEmployeeDTO[]): Observable<boolean> {
    return super.post<BidtEmployeeDTO[], boolean>(this.bidtContractApi.deleteEmployee, employeList);
  }

  /**************************************************************************
   * Company api
   *************************************************************************/
  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  /**************************************************************************
   * Site api
   *************************************************************************/
  public findBidtSiteByCriteria(criteria: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.findAll, criteria);
  }
}
