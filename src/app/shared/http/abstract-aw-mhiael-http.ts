import { HttpClient } from '@angular/common/http';

import { AppConstants } from '../constants/app-constants';
import { AppConfigService } from '../services/app-config.service';

import { AbstractHttpService } from './abstract-http';

export abstract class AbstractAwMhiaelHttpService extends AbstractHttpService {
  protected constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService, AppConstants.BASE_URL + AppConstants.MHIAEL_SERVICE_URL);
  }
}
