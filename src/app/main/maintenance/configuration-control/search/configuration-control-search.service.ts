import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationControlSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public findAllWarehouse(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }
}
