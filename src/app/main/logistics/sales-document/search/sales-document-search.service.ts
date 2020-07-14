import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtPurchaseRequestApi } from '../../../../shared/api/bidt-purchase-request.api';
import { BidtSalesRequestApi } from '../../../../shared/api/bidt-sales-request.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SalesDocumentListInput } from '../../../../shared/types/api-input-types/bidt-sales-request/sales-document-list-input.interface';
import { SalesDocumentListOutput } from '../../../../shared/types/api-output-types/bidt-sales-request/sales-document-list-output.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SalesDocumentSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtPurchaseRequest: BidtPurchaseRequestApi,
    private readonly bidtSalesRequest: BidtSalesRequestApi
  ) {
    super(http, appConfigService);
  }

  // BidtPurchaseRequest
  public fetchSupplierDropDownData(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtPurchaseRequest.fetchSupplierDropDownData);
  }

  // BidtSalesRequest
  public findByCriteria(input: SalesDocumentListInput): Observable<SalesDocumentListOutput[]> {
    return super.post<SalesDocumentListInput, SalesDocumentListOutput[]>(
      this.bidtSalesRequest.findByCriteria,
      input
    );
  }

  public deleteSalesDoc(input: number[]): Observable<void> {
    return super.post<number[], void>(this.bidtSalesRequest.delete, input);
  }
}
