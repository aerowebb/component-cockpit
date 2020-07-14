import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSalesRequestApi } from '../../../shared/api/bidt-sales-request.api';
import { FindBidtSalesRequestsByCriteriaForOVSInput } from '../../../shared/types/api-input-types/bidt-sales-request/find-bidt-sales-requests-by-search-criteria-for-ovs-input.interface';
import { BidtSalesRequestDTO } from '../../../shared/types/api-types/bidt-sales-request-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchSalesRequestService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSalesRequestApi: BidtSalesRequestApi
  ) {
    super(http, appConfigService);
  }

  public findBidtSalesRequestsByCriteriaForOVS(
    criteria: BidtSalesRequestDTO,
    custumerCode: string,
    creation: Date,
    delivery: Date
  ): Observable<SearchResultsDTO<BidtSalesRequestDTO>> {
    const param: FindBidtSalesRequestsByCriteriaForOVSInput = {
      bidtSalesRequestCriteria: criteria,
      supplier: custumerCode,
      creationDate: creation,
      deliveryDate: delivery
    };

    return super.post<FindBidtSalesRequestsByCriteriaForOVSInput, SearchResultsDTO<BidtSalesRequestDTO>>(
      this.bidtSalesRequestApi.findBidtSalesRequestsByCriteriaForOVS,
      param
    );
  }
}
