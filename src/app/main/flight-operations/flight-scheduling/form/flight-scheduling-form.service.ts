import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ResourceModel as GenericResourceModel } from '../../../../shared/components/scheduler/resource-model.interface';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FlightSchedulingInput } from '../../../../shared/types/api-input-types/fleet-management/flight-scheduling-input.interface';
import { FlightScheduleOutput } from '../../../../shared/types/api-output-types/flight-schedule-output.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { WsTreeNode } from '../../../../shared/types/api-types/ws-tree-node-dto.interface';

export interface ResourceModel extends GenericResourceModel {
  missionName ?: string;
  data ?: FlightScheduleOutput;
}

@Injectable()
export class FlightSchedulingFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public getFlightScheduling(input: FlightSchedulingInput): Observable<WsTreeNode[]> {
    return super.post<FlightSchedulingInput, WsTreeNode[]>(this.fleetManagementApi.getFlightScheduling, input);
  }

  public removeBidoMissionEquipment(id: BidoMissionEquipmentDTOId): Observable<void> {
    const selectedFlightIds: BidoMissionEquipmentDTOId[] = [];
    selectedFlightIds.push(id);

    return super.post<BidoMissionEquipmentDTOId[], void>(
      this.fleetManagementApi.removeBidoMissionEquipment,
      selectedFlightIds
    );
  }
}
