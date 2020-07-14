import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { CalculateWorkOrderOutput } from '../../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class MyJobsCardsFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Aircraft management api
   *************************************************************************/
  public findBidmWorkOrdersByProject(projectId: string): Observable<BidmWorkOrderDTO[]> {
    return super.post<string, BidmWorkOrderDTO[]>(this.aircraftMaintenanceApi.findBidmWorkOrdersByProject, projectId);
  }

  public calculateWorkOrderStatus(workOrderDetailInput: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      workOrderDetailInput
    );
  }

  public findBidmWorkOrdersByAssignedTo(userId: BidoUserDTOId): Observable<BidmWorkOrderDTO[]> {
    return super.post<BidoUserDTOId, BidmWorkOrderDTO[]>(
      this.aircraftMaintenanceApi.findBidmWorkOrdersByAssignedTo,
      userId
    );
  }

  public getBidmWorkOrdersStructureByProject(
    bidmWorkOrderDTOId: BidmWorkOrderDTOId
  ): Observable<BidmWorkOrderDataDTO[]> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDataDTO[]>(
      this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
      bidmWorkOrderDTOId
    );
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findBidoUserByLogin(login: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, login);
  }

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadUserList(): Observable<SelectItem[]> {
    return this.findUsersWithUseCase().pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.lastname} ${user.firstname}`,
                  value: user.userId
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public findBidmProjectById(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

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

  public findFirstBidoEquipmentsByPnAndSnCodes(woEquipement: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      woEquipement
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

  public loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }
}
