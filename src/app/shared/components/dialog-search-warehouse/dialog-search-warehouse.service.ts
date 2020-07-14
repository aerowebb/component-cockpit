import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchWharehouseService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  public findWharehouses(criteria: BidtWarehouseDTO): Observable<SearchResultsDTO<BidtWarehouseDTO>> {
    return super.post<BidtWarehouseDTO, SearchResultsDTO<BidtWarehouseDTO>>(
      this.bidtWarehouseApi.findByCriteria,
      criteria
    );
  }
}
