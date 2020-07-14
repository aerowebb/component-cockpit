import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogGenerateCommentService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public getTypeSelectedDropDown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getTypeSelectedDropDown);
  }
}
