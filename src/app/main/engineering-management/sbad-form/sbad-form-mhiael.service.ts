import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MassUpdatesApi } from '../../../shared/api/mhiael/mass-updates.api';
import { AbstractAwMhiaelHttpService } from '../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';

@Injectable()
export class SbadFormMhiaelService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly massUpdatesApi: MassUpdatesApi
  ) {
    super(http, appConfigService);
  }

  public updateSBADCsv(bireVariantVersion: BireSbDTO): Observable<void> {
    return super.post<BireSbDTO, void>(this.massUpdatesApi.updateSBADCsv, bireVariantVersion);
  }
}
