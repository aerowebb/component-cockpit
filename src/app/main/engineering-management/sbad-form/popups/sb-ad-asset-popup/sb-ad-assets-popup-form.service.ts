import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';

@Injectable()
export class SbAdAssetsPopupFormService extends AbstractAwHttpService {
  public displayDialog: boolean;

  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }

  public displayPopup(display: boolean) {
    this.displayDialog = display;
  }
}