import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';

@Injectable()
export class ControlGroundEquipmentSearchService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }
}
