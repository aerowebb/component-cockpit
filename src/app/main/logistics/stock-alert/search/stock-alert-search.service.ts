import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';
import { BidtPurchaseRequestApi } from '../../../../shared/api/bidt-purchase-request.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { GetBidtStockMvtAlertInputDTO } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-input-dto.interface';
import { GetBidtStockMvtAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-output-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class StockAlertSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouse: BidtWarehouseApi,
    private readonly bidtStockMvt: BidtStockMvtApi,
    private readonly bidtPurchaseRequestApi: BidtPurchaseRequestApi
  ) {
    super(http, appConfigService);
  }

  // fetches the list of all the warehouses
  public findAll(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouse.findAll);
  }

  // fetches the list of all the warehouses by user rights
  public findAllWarehouseByUserRights(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtWarehouse.findAllWarehouseByUserRights);
  }

  public calculate(input: GetBidtStockMvtAlertInputDTO): Observable<GetBidtStockMvtAlertOutputDTO[]> {
    return super.post<GetBidtStockMvtAlertInputDTO, GetBidtStockMvtAlertOutputDTO[]>(
      this.bidtStockMvt.findAlerts,
      input
    );
  }

  public getCreateOrderNameFormStockAlert(): Observable<string> {
    return super.post<void, string>(this.bidtPurchaseRequestApi.getCreateOrderNameFormStockAlert);
  }
}
