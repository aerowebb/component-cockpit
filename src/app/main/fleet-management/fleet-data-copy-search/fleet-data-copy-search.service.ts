import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FleetDataCopyInputDTO } from '../../../shared/types/api-input-types/fleet-management/fleet-data-copy-input-dto.interface';
import { FleetDataCopyOutputDTO } from '../../../shared/types/api-output-types/fleet-management/fleet-data-copy-output-dto';

@Injectable()
export class FleetDataCopySearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public copyFleetData(criteria: FleetDataCopyInputDTO): Observable<FleetDataCopyOutputDTO[]> {
    return super.post<FleetDataCopyInputDTO, FleetDataCopyOutputDTO[]>(this.fleetBusinessApi.copyFleetData, criteria);
  }
}
