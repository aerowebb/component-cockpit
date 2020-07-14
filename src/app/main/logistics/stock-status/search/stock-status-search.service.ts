import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { SSGraphOutput } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-graph-output.interface';
import { SSTreeNode } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-tree-node.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class StockStatusSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStockMvtApi: BidtStockMvtApi
  ) {
    super(http, appConfigService);
  }

  // makes a calculation on the base of search criteria
  public stockStatusSearch(searchCriteria: StockStatusInput): Observable<SSTreeNode[]> {
    return super.post<StockStatusInput, SSTreeNode[]>(this.bidtStockMvtApi.findssTreeNode, searchCriteria);
  }

  // get Doumemnt list
  public getPurchaseDocumentCategory(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtStockMvtApi.findPurchaseDocumentCategory);
  }

  // Get Stock Status graph
  public getStockStatusGraph(searchCriteria: StockStatusInput): Observable<SSGraphOutput[]> {
    return super.post<StockStatusInput, SSGraphOutput[]>(this.bidtStockMvtApi.findstockstatusgraph, searchCriteria);
  }
}
