import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MassUpdatesApi } from '../../../../shared/api/mhiael/mass-updates.api';
import { AbstractAwMhiaelHttpService } from '../../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';

@Injectable()
export class ApplicableConfigurationFormMhiaelService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly massUpdatesApi: MassUpdatesApi
  ) {
    super(http, appConfigService);
  }

  public updateInMassIDPSubObjectStatus(bireVariantVersion: BireVariantVersionDTO): Observable<boolean> {
    return super.post<BireVariantVersionDTO, boolean>(
      this.massUpdatesApi.updateInMassIDPSubObjectStatus,
      bireVariantVersion
    );
  }

  public updateIPCCsv(bireVariantVersion: BireVariantVersionDTO): Observable<void> {
    return super.post<BireVariantVersionDTO, void>(this.massUpdatesApi.updateIPCCsv, bireVariantVersion);
  }
}
