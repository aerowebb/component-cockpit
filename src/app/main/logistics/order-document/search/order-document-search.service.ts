import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtPurchaseRequestApi } from '../../../../shared/api/bidt-purchase-request.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { DisplayOrderDocumentInput } from '../../../../shared/types/api-input-types/bidt-purchase-request/display-order-document-input.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class OrderDocumentSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtPurchaseRequestApi: BidtPurchaseRequestApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findByCriteria(criteria: DisplayOrderDocumentInput): Observable<SearchResultsDTO<BidtPurchaseRequestDTO>> {
    return super.post<DisplayOrderDocumentInput, SearchResultsDTO<BidtPurchaseRequestDTO>>(
      this.bidtPurchaseRequestApi.findByCriteria,
      criteria
    );
  }

  public remove(ids: Number[]): Observable<void> {
    return super.post<Number[], void>(this.bidtPurchaseRequestApi.remove, ids);
  }

  public findTypeBasedOnCategory(category: string | undefined): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findTypeBasedOnCategory, category);
  }

  public findBidoCustomerBySearchCriteriaOrder(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findBidoCustomerBySearchCriteriaOrder);
  }
}
