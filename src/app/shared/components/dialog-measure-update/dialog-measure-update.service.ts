import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../shared/api/asset-management.api';
import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { MeasurePropagationReportInput } from '../../../shared/types/api-input-types/fleet-management/measure-propagation-report-input.interface';
import { RatingAtDateInput } from '../../../shared/types/api-input-types/fleet-management/rating-at-date-input.interface';
import { SaveBidoMeasureInputDTO } from '../../../shared/types/api-input-types/fleet-management/save-bido-measure-input-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoRatingDTO } from '../../../shared/types/api-types/bido-rating-dto.interface';
import { BireMeasureReferenceDTO } from '../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class DialogMeasureUpdateService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly fleetHistoryApi: FleetHistoryApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireMeasureReferences(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(this.fleetManagementApi.findAllBireMeasureReferences);
  }

  public findBidoRatingsForMeasure(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<LabelValue<string>[]> {
    return super.post<BidoEquipmentCounterDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.findBidoRatingsForMeasure,
      bidoEquipmentCounterDTOId
    );
  }

  public wdPropagateMeasures(measurePropagationReportInput: MeasurePropagationReportInput): Observable<string> {
    return super.post<MeasurePropagationReportInput, string>(
      this.fleetBusinessApi.wdPropagateMeasures,
      measurePropagationReportInput
    );
  }

  public addMeasure(saveBidoMeasureInputDTO: SaveBidoMeasureInputDTO): Observable<void> {
    return super.post<SaveBidoMeasureInputDTO, void>(this.assetManagementApi.addMeasure, saveBidoMeasureInputDTO);
  }

  public findHFBidoRatingByEquipmentCodeFromDate(ratingAtDateInput: RatingAtDateInput): Observable<BidoRatingDTO> {
    return super.post<RatingAtDateInput, BidoRatingDTO>(
      this.fleetHistoryApi.findHFBidoRatingByEquipmentCodeFromDate,
      ratingAtDateInput
    );
  }
}
