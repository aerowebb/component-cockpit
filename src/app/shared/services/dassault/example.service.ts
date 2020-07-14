import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

/*
 * Class to be deleted
 */
@Injectable()
export class ExampleService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService
  ) {
    super(http, appConfigService);
  }
}
