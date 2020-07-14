import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { DurationTotalByWorkOrderOutput } from '../../../../shared/types/api-input-types/work-order/duration-total-by-work-order-output';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { CalculateWorkOrderOutput } from '../../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';

export interface ContextMenuItem {
  text: string;
  icon?: string;
  onItem?: Function;
}

@Injectable()
export class WorkOrdersCalendarFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Aircraft maintenance api
   *************************************************************************/

  public findWorkOrder(input: BidmWorkOrderDTOId): Observable<BidmWorkOrderDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDTO>(this.aircraftMaintenanceApi.findBidmWorkOrder, input);
  }

  public getBidmWorkOrdersByProject(projectId: string): Observable<BidmWorkOrderDataDTO[]> {
    const projectIdDto: BidmProjectDTOId = { projectId };

    return super.post<BidmProjectDTOId, BidmWorkOrderDataDTO[]>(
      this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
      projectIdDto
    );
  }

  public updateBidmWorkOrders(bidmWorkOrderList: BidmWorkOrderDTO[]): Observable<void> {
    return super.post<BidmWorkOrderDTO[], void>(this.aircraftMaintenanceApi.updateBidmWorkOrders, bidmWorkOrderList);
  }

  public calculateWorkOrderStatus(workOrderDetailInput: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      workOrderDetailInput
    );
  }

  public findWorkOrderOriginDetails(input: AssetWorkOrderOriginInput): Observable<AssetWorkOrderOriginDataOutput> {
    return super.post<AssetWorkOrderOriginInput, AssetWorkOrderOriginDataOutput>(
      this.airworthinessManagementApi.findWorkOrderOriginDetails,
      input
    );
  }

  public findBireTaskOperationsByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireOperationDTO[]> {
    return super.post<BireTaskDTOId, BireOperationDTO[]>(
      this.taskManagementApi.findBireTaskOperationsByTask,
      bireTaskDTOId
    );
  }

  public getOpreationDurationTotalWorkOrder(
    bidmWorkOrder: BidmWorkOrderDTO
  ): Observable<DurationTotalByWorkOrderOutput> {
    return super.post<BidmWorkOrderDTO, DurationTotalByWorkOrderOutput>(
      this.aircraftMaintenanceApi.getOperationDurationTotalByWorkOrder,
      bidmWorkOrder
    );
  }
}
