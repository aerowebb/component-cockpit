import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { RecordAndSimulateInput } from '../../../../../shared/types/api-input-types/fleet-management/record-and-simulate-input-dto.interface';
import { FlightOperationValidationOutput } from '../../../../../shared/types/api-output-types/fleet-management/flight-operation-validation-output-dto.interface';
import { RecordAndSimulateOutput } from '../../../../../shared/types/api-output-types/fleet-management/record-and-simulate-ouput-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';

@Injectable()
export class FlightOperationsValidationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public flightValidation(criteria: BidoMissionEquipmentDTO): Observable<FlightOperationValidationOutput> {
    return super.post<BidoMissionEquipmentDTO, FlightOperationValidationOutput>(
      this.fleetManagementApi.getFlightValidation,
      criteria
    );
  }

  public simulateRecord(criteria: RecordAndSimulateInput): Observable<RecordAndSimulateOutput> {
    return super.post<RecordAndSimulateInput, RecordAndSimulateOutput>(
      this.fleetManagementApi.simulateRecord,
      criteria
    );
  }
  public recordMeasure(criteria: RecordAndSimulateInput): Observable<RecordAndSimulateOutput> {
    return super.post<RecordAndSimulateInput, RecordAndSimulateOutput>(this.fleetManagementApi.recordMeasure, criteria);
  }

  public getTsnLabelForFlightOperations(): Observable<string> {
    return super.get<string>(this.fleetManagementApi.getTsnLableForFlightOperations);
  }

  public getCsnLabelForFlightOperations(): Observable<string> {
    return super.get<string>(this.fleetManagementApi.getCsnLableForFlightOperations);
  }
}
