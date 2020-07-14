import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { BidtValuationGroupApi } from '../../../../../shared/api/bidt-valuation-group.api';
import { TaskManagementApi } from '../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
@Injectable()
export class DialogStockDataService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtValuationGroupApi: BidtValuationGroupApi,
    private readonly taskManagementApi: TaskManagementApi,

  ) {
    super(http, appConfigService);
  }

  public getStockValuationList(): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(
      this.bidtValuationGroupApi.dropDownStockValuationType
    );
  }
  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

}
