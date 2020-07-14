import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SearchInputStockValuation } from '../../../../shared/types/api-input-types/bidt-stock-mvt/search-input-stock-valuation.interface';
import { GlobalVariableValues } from '../../../../shared/types/api-output-types/bidt-stock-mvt/global-variable-values.interface';

@Injectable()
export class StockValuationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagement: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  // makes a calculation on the base of search criteria
  public stockValuationSearch(searchCriteria: SearchInputStockValuation): Observable<GlobalVariableValues> {
    return super.post<SearchInputStockValuation, GlobalVariableValues>(
      this.productStructureManagement.stockValuationSearch,
      searchCriteria
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }
}
