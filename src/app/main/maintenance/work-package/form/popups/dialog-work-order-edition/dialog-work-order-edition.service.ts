import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

import { BireOperationPnDTO } from '../../../../../..//shared/types/api-types/bire-operation-pn-dto.interface';
import { AircraftMaintenanceApi } from '../../../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../../../shared/api/airworthiness-management.api';
import { BidtWarehouseApi } from '../../../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { UserProfileManagementApi } from '../../../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { AssetWorkOrderOriginInput } from '../../../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { FindRelatedAssetsInput } from '../../../../../../shared/types/api-input-types/task-management/find-related-assets.interface';
import { UsersForWorkOrderInput } from '../../../../../../shared/types/api-input-types/user-profile-management/users-for-work-order.interface';
import { CalculateWorkOrderImput } from '../../../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { CreateBidmWorkOrderInput } from '../../../../../../shared/types/api-input-types/work-order/create-bidm-work-order-input';
import { AssetWorkOrderOriginDataOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { CalculateWorkOrderOutput } from '../../../../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { BidmOperationDTO } from '../../../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCustomerDTOId } from '../../../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoUserDTO } from '../../../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtWarehouseDTO } from '../../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireEvolutionDTO } from '../../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireOperationDTOId } from '../../../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../../../shared/types/api-types/bire-operation-dto.interface';
import { BirePnDTOId } from '../../../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTOId } from '../../../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskOperationDTO } from '../../../../../../shared/types/api-types/bire-task-operation-dto.interface';
import { InitializeWoProcurementRequestInputDTO } from '../../../../../../shared/types/api-types/initialize-wo-procurement-request-input-dto.interface';
import { WoProcurementRequestInputDTO } from '../../../../../../shared/types/api-types/wo-procurement-request-input-dto.interface';

import { BidmWorkOrderDTOId } from './../../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { StringUtils } from './../../../../../../shared/utils/string-utils';

@Injectable()
export class DialogWorkOrderEditService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/
  public findBidoCustomer(input: BidoCustomerDTOId): Observable<BidoCustomerDTO> {
    return super.post<BidoCustomerDTOId, BidoCustomerDTO>(this.fleetManagementApi.findBidoCustomer, input);
  }

  public createOrUpdateBidmWorkOrder(bidmWorkOrder: CreateBidmWorkOrderInput): Observable<BidmWorkOrderDTO> {
    return super.post<CreateBidmWorkOrderInput, BidmWorkOrderDTO>(
      this.aircraftMaintenanceApi.createOrUpdateBidmWorkOrder,
      bidmWorkOrder
    );
  }

  public findRelatedItemsFromTask(bireTaskDTOId: BireTaskDTOId): Observable<SelectItem[]> {
    return super.post<BireTaskDTOId, SelectItem[]>(this.taskManagementApi.findRelatedItemsFromTask, bireTaskDTOId);
  }

  public findRelatedItemsFromEvolution(bireEvolutionDTO: BireEvolutionDTO): Observable<SelectItem[]> {
    return super.post<BireEvolutionDTO, SelectItem[]>(
      this.taskManagementApi.findRelatedItemsFromEvolution,
      bireEvolutionDTO
    );
  }

  public findRelatedAssets(findRelatedAssetsInput?: FindRelatedAssetsInput): Observable<SelectItem[]> {
    return super.post<FindRelatedAssetsInput, SelectItem[]>(
      this.taskManagementApi.findRelatedAssets,
      findRelatedAssetsInput
    );
  }

  public findOperationsFromTaskAndRelatedTasks(bireTaskDTOId: BireTaskDTOId): Observable<BireOperationDTO[]> {
    return super.post<BireTaskDTOId, BireTaskOperationDTO[]>(
      this.taskManagementApi.findOperationsFromTaskAndRelatedTasks,
      bireTaskDTOId
    );
  }

  public findOperationsFromEvolution(bireEvolutionDTO: BireEvolutionDTO): Observable<BireOperationDTO[]> {
    return super.post<BireEvolutionDTO, BireTaskOperationDTO[]>(
      this.taskManagementApi.findOperationsFromEvolution,
      bireEvolutionDTO
    );
  }

  public findWorkOrder(input: BidmWorkOrderDTOId): Observable<BidmWorkOrderDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDTO>(this.aircraftMaintenanceApi.findBidmWorkOrder, input);
  }

  public findBidmWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<BidmWorkOrderDataDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDataDTO>(
      this.aircraftMaintenanceApi.findBidmWorkOrderData,
      bidmWorkOrderDTOId
    );
  }

  public calculateWorkOrderStatus(input: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      input
    );
  }

  public findWorkOrderOriginDetails(input: AssetWorkOrderOriginInput): Observable<AssetWorkOrderOriginDataOutput> {
    return super.post<AssetWorkOrderOriginInput, AssetWorkOrderOriginDataOutput>(
      this.airworthinessManagementApi.findWorkOrderOriginDetails,
      input
    );
  }

  public findBidmOperationsByWorkOrder(input: BidmWorkOrderDTOId): Observable<BidmOperationDTO[]> {
    return super.post<BidmWorkOrderDTOId, BidmOperationDTO[]>(
      this.aircraftMaintenanceApi.findBidmOperationsByWorkOrder,
      input
    );
  }

  public loadWarehouseList(input: string | undefined): Observable<SelectItem[]> {
    if (StringUtils.isNullOrEmpty(input)) {
      return of<SelectItem[]>([]);
    } else {
      return super.post<string, SelectItem[]>(this.bidtWarehouseApi.findByMandantAndSiteCode, input);
    }
  }
  public loadWareHouses(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  public findUsersWithUseCaseForWorkOrder(input: UsersForWorkOrderInput): Observable<BidoUserDTO[]> {
    return super.post<UsersForWorkOrderInput, BidoUserDTO[]>(
      this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder,
      input
    );
  }

  public findBireOperationPnsByOperation(p: BireOperationDTOId): Observable<BireOperationPnDTO[]> {
    return super.post<BireOperationDTOId, BireOperationPnDTO[]>(
      this.taskManagementApi.findBireOperationPnsByOperation,
      p
    );
  }

  public findBirePn(input: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.taskManagementApi.findBirePn, input);
  }

  public initalizeWoProcurementRequestInput(
    input: InitializeWoProcurementRequestInputDTO
  ): Observable<WoProcurementRequestInputDTO[]> {
    return super.post<InitializeWoProcurementRequestInputDTO, WoProcurementRequestInputDTO[]>(
      this.aircraftMaintenanceApi.initializeProcurementRequest,
      input
    );
  }
}
