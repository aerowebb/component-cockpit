import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { GetBidtStockMvtAlertInputDTO } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-input-dto.interface';
import { GetBidtStockMvtAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-output-dto.interface';

@Injectable()
export class StockAlertFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStockMvt: BidtStockMvtApi
  ) {
    super(http, appConfigService);
  }

  public calculate(input: GetBidtStockMvtAlertInputDTO): Observable<GetBidtStockMvtAlertOutputDTO[]> {
    return super.post<GetBidtStockMvtAlertInputDTO, GetBidtStockMvtAlertOutputDTO[]>(
      this.bidtStockMvt.findAlerts,
      input
    );
  }
}
