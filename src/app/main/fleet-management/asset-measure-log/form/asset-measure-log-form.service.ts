import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { CalculatePotentialAlertsByCounterAndRatingOutput } from '../../../../shared/types/api-output-types/fleet-management/calculate-potential-alerts-by-ounter-rating-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';

@Injectable()
export class AssetMeasureLogFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }
  public getStructureDetailTableData(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<CalculatePotentialAlertsByCounterAndRatingOutput[]> {
    return super.post<BidoEquipmentCounterDTOId, CalculatePotentialAlertsByCounterAndRatingOutput[]>(
      this.fleetBusinessApi.calculatePotentialAlertsByCounterAndRating,
      bidoEquipmentCounterDTOId
    );
  }

  public getMeasureDetailTableData(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentCounterDTOId, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.fleetBusinessApi.findBidoMeasuresByEquipmentAndCounterCodes,
      bidoEquipmentCounterDTOId
    );
  }
  public cancelSelectedMeasure(measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput) {
    return super.post<FindBidoMeasuresByEquipmentAndCounterCodesOutput, string>(
      this.fleetBusinessApi.cancelBidoMeasure,
      measureId
    );
  }
  public propogateSelectedMeasure(measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput) {
    return super.post<FindBidoMeasuresByEquipmentAndCounterCodesOutput, string>(
      this.fleetBusinessApi.propagateBidoMeasure,
      measureId
    );
  }

  public coorectSelectedMeasure(measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput) {
    return super.post<
      FindBidoMeasuresByEquipmentAndCounterCodesOutput,
      CalculatePotentialAlertsByCounterAndRatingOutput
    >(this.fleetBusinessApi.correctBidoMeasure, measureId);
  }

  public getEquipmentName(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<string> {
    return super.post<BidoEquipmentDTOId, string>(this.fleetManagementApi.getEquipmentName, bidoEquipmentDTOId);
  }
}
