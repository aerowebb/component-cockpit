import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class SbAdLimitsPeriodicitiesPopupFormService extends AbstractAwHttpService {
  public displayDialog: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public displayPopup(display: boolean) {
    this.displayDialog = display;
  }

  public findAllColunterCode(): Observable<LabelValue<string>[]> {
    return super.post<undefined, LabelValue<string>[]>(this.productStructureManagementApi.findAllCounterCode);
  }
}
