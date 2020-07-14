import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../../shared/api/bidt-company.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SiteSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtCompanyApi: BidtCompanyApi
  ) {
    super(http, appConfigService);
  }

  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  public findBidtSiteByCriteria(criteria: BidtSiteDTO): Observable<SearchResultsDTO<BidtSiteDTO>> {
    return super.post<BidtSiteDTO, SearchResultsDTO<BidtSiteDTO>>(this.bidtSiteApi.findByCriteria, criteria);
  }

  public removeBidtSite(bidtSiteId: number[]): Observable<boolean> {
    return super.post<number[], boolean>(this.bidtSiteApi.delete, bidtSiteId);
  }
}
