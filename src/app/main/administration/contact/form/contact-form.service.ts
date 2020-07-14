import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveContactInput } from '../../../../shared/types/api-types/save-contact-input-dto.interface';

@Injectable()
export class ContactFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public saveContact(saveContactInput: SaveContactInput): Observable<void> {
    return super.post<SaveContactInput, void>(this.fleetManagementApi.saveContact, saveContactInput);
  }
}
