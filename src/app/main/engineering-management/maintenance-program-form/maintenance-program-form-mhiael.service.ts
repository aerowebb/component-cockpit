import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MassUpdatesApi } from '../../../shared/api/mhiael/mass-updates.api';
import { AbstractAwMhiaelHttpService } from '../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';

@Injectable()
export class MaintenanceProgramFormMhiaelService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly massUpdatesApi: MassUpdatesApi
  ) {
    super(http, appConfigService);
  }

  public updateInMassRMPSubObjectStatus(bireMaintenancePlan: BireMaintenancePlanDTO): Observable<boolean> {
    return super.post<BireMaintenancePlanDTO, boolean>(
      this.massUpdatesApi.updateInMassRMPObjectStatus,
      bireMaintenancePlan
    );
  }

  public updateRMPCsv(bireMaintenancePlan: BireMaintenancePlanDTO): Observable<void> {
    return super.post<BireMaintenancePlanDTO, void>(this.massUpdatesApi.updateRMPCsv, bireMaintenancePlan);
  }
}
