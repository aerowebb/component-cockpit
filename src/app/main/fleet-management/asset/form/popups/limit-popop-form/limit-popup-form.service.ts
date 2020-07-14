import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { BidoCounterReferenceDTO } from '../../../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';

@Injectable()
export class LimitPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireMeasureReferences(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(this.fleetManagementApi.findAllBireMeasureReferences);
  }

  public updateBidoEquipmentCounter(bidoEquipmentCounterDTO: BidoCounterReferenceDTO): Observable<boolean> {
    return super.post<BidoCounterReferenceDTO, boolean>(
      this.fleetManagementApi.updateBidoEquipmentCounter,
      bidoEquipmentCounterDTO
    );
  }

  public findBidoCounterReferencesByEquipmentCode(
    bidoEquipmentDTO: BidoEquipmentDTO | undefined
  ): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<BidoEquipmentDTO, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.fleetManagementApi.findBidoCounterReferencesByEquipmentCode,
      bidoEquipmentDTO
    );
  }
}
