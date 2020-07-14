import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../api/asset-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class CreateEventFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly assetManagementApi: AssetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBidoNotificationTypeByTypeCategory(typeCategory: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.assetManagementApi.findAllBidoNotificationTypeByTypeCategory,
      typeCategory
    );
  }
}
