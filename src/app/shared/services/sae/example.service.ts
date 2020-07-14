import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwSAEHttpService } from '../../http/abstract-aw-sae-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class ExampleService extends AbstractAwSAEHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService
  ) {
    super(http, appConfigService);
  }
}
