import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HAttributeDTO } from '../../../shared/types/api-types/h-attribute-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DynamicAttributesHistoryService extends AbstractAwHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService) {
    super(http, appConfigService);
  }

  public removeAttributeHistory<T extends HAttributeDTO>(api: string, attributeHistory: T): Observable<void> {
    return super.post<T, void>(api, attributeHistory);
  }
}
