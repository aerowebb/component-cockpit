import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtPurchaseRequestApi } from '../../../shared/api/bidt-purchase-request.api';
import { FindBidtPurchaseRequestsByCriteriaForOVSInput } from '../../../shared/types/api-input-types/bidt-purchase-request/find-bidt-purchase-requests-by-search-criteria-for-ovs-input.interface';
import { BidtPurchaseRequestDTO } from '../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchPurchaseRequestService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtPurchaseRequestApi: BidtPurchaseRequestApi
  ) {
    super(http, appConfigService);
  }

  public findBidtPurchaseRequestsByCriteriaForOVS(
    criteria: BidtPurchaseRequestDTO,
    custumerCode: string,
    creation: Date,
    reception: Date
  ): Observable<SearchResultsDTO<BidtPurchaseRequestDTO>> {
    const param: FindBidtPurchaseRequestsByCriteriaForOVSInput = {
      bidtPurchaseRequestCriteria: criteria,
      supplier: custumerCode,
      creationDate: creation,
      receptionDate: reception
    };

    return super.post<FindBidtPurchaseRequestsByCriteriaForOVSInput, SearchResultsDTO<BidtPurchaseRequestDTO>>(
      this.bidtPurchaseRequestApi.findBidtPurchaseRequestsByCriteriaForOVS,
      param
    );
  }
}
