import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindDefectEventsByEquipmentCodeInput } from '../../../shared/types/api-input-types/work-order/find-defect-events-by-equipment-code-input.interface';
import { FindDefectEventsByEquipmentCodeOutput } from '../../../shared/types/api-input-types/work-order/find-defect-events-by-equipment-code-output.interface';
import { BidoRootCauseDTO } from '../../../shared/types/api-types/bido-root-cause-dto.interface';


@Injectable()
export class DialogSearchDefectEventsService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  /***********************************
   fleet business api
  ***********************************/
  public findDefectEventsByEquipmentCode(
      input: FindDefectEventsByEquipmentCodeInput
    ): Observable<FindDefectEventsByEquipmentCodeOutput[]> {
    return super.post<FindDefectEventsByEquipmentCodeInput, FindDefectEventsByEquipmentCodeOutput[]>(
      this.fleetBusinessApi.findDefectEventsByEquipmentCode,
      input
    );
  }

  public findBidoRootCause(input: string): Observable<BidoRootCauseDTO> {
      return super.post<string, BidoRootCauseDTO>(
        this.fleetManagementApi.findBidoRootCause,
        input
      );
  }
}
