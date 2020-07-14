import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LogisticsManagementApi } from '../../../../shared/api/logistics-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { InventoryByWarehouseTableOutputDTO } from '../../../../shared/types/api-output-types/inventory-by-warehouse/inventory-by-warehouse-table-output-dto.interface';
import { BsdeStoreDTOId } from '../../../../shared/types/api-types/bsde-store-dto-id.interface';

@Injectable()
export class InventoryByWareHouseSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly logisticsManagementApi: LogisticsManagementApi

  ) {
    super(http, appConfigService);
  }

  public getWarehouseList(): Observable<InventoryByWarehouseTableOutputDTO[]> {
    return super.post<void, InventoryByWarehouseTableOutputDTO[]>(
      this.logisticsManagementApi.findAllBsdeStores
    );
  }

  public removeWareHouseStore(criteria: BsdeStoreDTOId[]): Observable<void> {
    return super.post<BsdeStoreDTOId[], void>(
      this.logisticsManagementApi.removeBsdeStore, criteria
    );
  }
}
