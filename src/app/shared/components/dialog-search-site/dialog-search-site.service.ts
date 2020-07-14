import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../shared/api/bidt-site.api';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchSiteService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService, private readonly bidtSiteApi: BidtSiteApi) {
    super(http, appConfigService);
  }

  public findSite(criteria: BidtSiteDTO): Observable<SearchResultsDTO<BidtSiteDTO>> {
    return super.post<BidtSiteDTO, SearchResultsDTO<BidtSiteDTO>>(this.bidtSiteApi.findByCriteria, criteria);
  }
}
