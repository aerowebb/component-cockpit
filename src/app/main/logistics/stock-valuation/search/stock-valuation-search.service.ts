import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';

@Injectable()
export class StockValuationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouse: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  // fetches the list of all the warehouses
  public findAll(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouse.findAll);
  }
}
