import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { CalculateWorkOrderOutput } from '../../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { MoveWorkOrdersInput } from '../../../../shared/types/api-types/move-work-order-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class WorkOrdersFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Aircraft management api
   *************************************************************************/
  public calculateWorkOrderStatus(workOrderDetailInput: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      workOrderDetailInput
    );
  }

  public removeBidmWorkOrderList(input: BidmWorkOrderDTOId[]): Observable<void> {
    return super.post<BidmWorkOrderDTOId[], void>(this.aircraftMaintenanceApi.removeBidmWorkOrderList, input);
  }

  public updateBidmWorkOrders(bidmWorkOrderList: BidmWorkOrderDTO[]): Observable<void> {
    return super.post<BidmWorkOrderDTO[], void>(this.aircraftMaintenanceApi.updateBidmWorkOrders, bidmWorkOrderList);
  }

  public moveWorkOrders(moveWorkOrders: MoveWorkOrdersInput): Observable<void> {
    return super.post<MoveWorkOrdersInput, void>(this.aircraftMaintenanceApi.moveWorkOrdersToProject, moveWorkOrders);
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public generateJobcards(workOrderIdList: BidmWorkOrderDTOId[]): Observable<FileContentDTO> {
    return super.post<BidmWorkOrderDTOId[], FileContentDTO>(
      this.amProjectManagementApi.generateJobcards,
      workOrderIdList
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findBidoEquipmentById(bidoEquipementDtoId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipment,
      bidoEquipementDtoId
    );
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findWorkOrderOriginDetails(input: AssetWorkOrderOriginInput): Observable<AssetWorkOrderOriginDataOutput> {
    return super.post<AssetWorkOrderOriginInput, AssetWorkOrderOriginDataOutput>(
      this.airworthinessManagementApi.findWorkOrderOriginDetails,
      input
    );
  }

  public calculateBidmProjectStatus(input: BidmProjectDTO): Observable<string> {
    return super.post<BidmProjectDTO, string>(this.airworthinessManagementApi.calculateBidmProjectStatus, input);
  }

  /**************************************************************************
   * Reference list
   *************************************************************************/

  private findAuthorizedBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAuthorizedBireSite);
  }

  public loadMROCenterList(): Observable<SelectItem[]> {
    return this.findAuthorizedBireSite().pipe(
      map((results) => {
        const mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return mroCenterList.map((mro) => {
          mro.label = mro.label ? `${mro.value} (${mro.label})` : mro.value;

          return mro;
        });
      })
    );
  }
}
