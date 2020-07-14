import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ModificationAssetsPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  // Retrieve the instruction dropdownlist in the Asset dropdown list
  public getAssetActionType(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getAssetActionTypeMap');
  }
}
