import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { BidmWoAttributeDTO } from '../../../../../../generated_files/api-types/bidm-wo-attribute-dto.interface';
import { ReportMessage } from '../../../../../../generated_files/api-types/report-message.interface';
import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidmWoAssignmentApi } from '../../../../shared/api/bidm-wo-assignment.api';
import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { BidtWorkCenterApi } from '../../../../shared/api/bidt-work-center.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { OperationHistoryApi } from '../../../../shared/api/operation-history.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { WoAssetManagementApi } from '../../../../shared/api/wo-asset-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants as gpc } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidmTimeTrackingByOperationInputDTO } from '../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-input-dto.interface';
import { BidmTimeTrackingByOperationOutputDTO } from '../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-output-dto.interface';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { ControlStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/control-stock-input.interface';
import { ControlConfigurationInput } from '../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { UsersForWorkOrderInput } from '../../../../shared/types/api-input-types/user-profile-management/users-for-work-order.interface';
import { BidmWoAssignmentInput } from '../../../../shared/types/api-input-types/work-order/bidm-wo-assignment-input.interface';
import { CalculateWorkOrderImput } from '../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { FindDefectEventsByEquipmentCodeInput } from '../../../../shared/types/api-input-types/work-order/find-defect-events-by-equipment-code-input.interface';
import { ProgressFromOperationStatusInput } from '../../../../shared/types/api-input-types/work-order/progress-from-operation-status-input';
import { UpdateJobCardInput } from '../../../../shared/types/api-input-types/work-order/update-job-card-input.interface';
import { WorkPostponementInput } from '../../../../shared/types/api-input-types/work-order/work-postponement-input.interface';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { CalculateWorkOrderOutput } from '../../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidmDocumentDTO } from '../../../../shared/types/api-types/bidm-document-dto.interface';
import { BidmOperationDTOId } from '../../../../shared/types/api-types/bidm-operation-dto-id.interface';
import { BidmOperationDTO } from '../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmTimeTrackingDTOId } from '../../../../shared/types/api-types/bidm-time-tracking-dto-id.interface';
import { BidmWoAssignmentDTOId } from '../../../../shared/types/api-types/bidm-wo-assignment-dto-id.interface';
import { BidmWoAssignmentDTO } from '../../../../shared/types/api-types/bidm-wo-assignment-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BidtWorkCenterDTO } from '../../../../shared/types/api-types/bidt-work-center-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { DeferredDefectEventDTO } from '../../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { HBidmOperationDTO } from '../../../../shared/types/api-types/h-bidm-operation-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { UpdateLogbookFromWorkOrderInput } from '../../../../shared/types/api-types/update-logbook-from-work-order-input.interface';
import { WoAssetManagementDTO } from '../../../../shared/types/api-types/wo-asset-management-dto.interface';
import { WoAssetManagementInputDTO } from '../../../../shared/types/api-types/wo-asset-management-input-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class WorkOrderFormService extends AbstractAwHttpService {
  private readonly _woTypeList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woTypeList$ = this._woTypeList.asObservable();

  private readonly _userList = new BehaviorSubject<SelectItem[]>([]);
  public readonly userList$ = this._userList.asObservable();

  private readonly _woStatusList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woStatusList$ = this._woStatusList.asObservable();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtWorkCenterApi: BidtWorkCenterApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidmWoAssignmentApi: BidmWoAssignmentApi,
    private readonly woAssetManagementApi: WoAssetManagementApi,
    private readonly operationHistoryApi: OperationHistoryApi,
    private readonly bidtSiteApi: BidtSiteApi
  ) {
    super(http, appConfigService);
  }

  private findAuthorizedBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAuthorizedBireSite);
  }

  public loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  private loadUserList(projectId: string): Observable<SelectItem[]> {
    return this.findUsersForWorkOrder(projectId).pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.firstname} ${user.lastname}`,
                  value: user.userId
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  public findUsersForWorkOrder(projectId: string): Observable<BidoUserDTO[]> {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_EXECUTION,
      projectId
    };

    return this.findUsersWithUseCaseForWorkOrder(param);
  }

  public findUsersWithUseCaseForWorkOrder(input: UsersForWorkOrderInput): Observable<BidoUserDTO[]> {
    return super.post<UsersForWorkOrderInput, BidoUserDTO[]>(
      this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder,
      input
    );
  }

  public findUsers(): Observable<LabelValue<string>[]> {
    return this.findUsersWithUseCase().pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.firstname} ${user.lastname}`,
                  value: user.userId as string
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  public loadMROCenterList(): Observable<SelectItem[]> {
    return this.findAuthorizedBireSite().pipe(
      map((results) => {
        const mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return mroCenterList.map((mro) => {
          mro.label = mro.label ? `${mro.label} (${mro.value})` : mro.value;

          return mro;
        });
      })
    );
  }

  /***********************************
   Aircraft maintenace api
  ***********************************/

  public findBidmWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<BidmWorkOrderDataDTO> {
    return forkJoin({
      woTypeList: this.loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP),
      woStatusList: this.loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP),
      userList: this.loadUserList(bidmWorkOrderDTOId.projectId)
    }).pipe(
      mergeMap(({ woTypeList, woStatusList, userList }) => {
        this._woTypeList.next(woTypeList);
        this._woStatusList.next(woStatusList);
        this._userList.next(userList);

        return super
          .post<BidmWorkOrderDTOId, BidmWorkOrderDataDTO>(
            this.aircraftMaintenanceApi.findBidmWorkOrderData,
            bidmWorkOrderDTOId
          )
          .pipe(map((res) => res));
      })
    );
  }

  public updateWorkOrder(param: UpdateJobCardInput): Observable<void> {
    return super
      .post<UpdateJobCardInput, void>(this.aircraftMaintenanceApi.updateBidmWorkOrder, param)
      .pipe(map((res) => res));
  }

  public setWoToBeConfirmed(param: BidmWorkOrderDTOId): Observable<void> {
    return super
      .post<BidmWorkOrderDTOId, void>(this.aircraftMaintenanceApi.setWoToBeConfirmed, param)
      .pipe(map((res) => res));
  }

  public unsetWoToBeConfirmed(param: BidmWorkOrderDTOId): Observable<void> {
    return super
      .post<BidmWorkOrderDTOId, void>(this.aircraftMaintenanceApi.unsetWoToBeConfirmed, param)
      .pipe(map((res) => res));
  }

  public calculatePerfWorkOrderDuration(woId: BidmWorkOrderDTOId): Observable<number> {
    return super.post<BidmWorkOrderDTOId, number>(this.aircraftMaintenanceApi.calculatePerfWorkOrderDuration, woId);
  }

  public findBidmDocumentsByWorkOrder(woId: BidmWorkOrderDTOId): Observable<BidmDocumentDTO[]> {
    return super.post<BidmWorkOrderDTOId, BidmDocumentDTO[]>(
      this.aircraftMaintenanceApi.findBidmDocumentsByWorkOrder,
      woId
    );
  }

  public updateBidmOperation(operation: BidmOperationDTO): Observable<void> {
    return super.post<BidmOperationDTO, void>(this.aircraftMaintenanceApi.updateBidmOperation, operation);
  }

  public getProgressFromOperationStatus(operation: ProgressFromOperationStatusInput): Observable<number> {
    return super.post<ProgressFromOperationStatusInput, number>(
      this.aircraftMaintenanceApi.getProgressFromOperationStatus,
      operation
    );
  }

  public calculateWorkOrderStatus(input: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      input
    );
  }

  public calculateAndUpdateBidmWorkOrderStatus(input: CalculateWorkOrderImput): Observable<string> {
    return super.post<CalculateWorkOrderImput, string>(
      this.aircraftMaintenanceApi.calculateAndUpdateBidmWorkOrderStatus,
      input
    );
  }

  public openBidmWorkOrder(input: BidmWorkOrderDTOId): Observable<BidmWoAttributeDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWoAttributeDTO>(this.aircraftMaintenanceApi.openBidmWorkOrder, input);
  }

  public fetchBidmTimeTrackings(
    input: BidmTimeTrackingByOperationInputDTO
  ): Observable<BidmTimeTrackingByOperationOutputDTO[]> {
    return super.post<BidmTimeTrackingByOperationInputDTO, BidmTimeTrackingByOperationOutputDTO[]>(
      this.aircraftMaintenanceApi.fetchBidmTimeTrackings,
      input
    );
  }

  public saveBidmTimeTracking(input: BidmTimeTrackingByOperationOutputDTO[]): Observable<void> {
    return super.post<BidmTimeTrackingByOperationOutputDTO[], void>(
      this.aircraftMaintenanceApi.saveBidmTimeTracking,
      input
    );
  }

  public removeBidmTimeTracking(input: BidmTimeTrackingDTOId): Observable<void> {
    return super.post<BidmTimeTrackingDTOId, void>(this.aircraftMaintenanceApi.removeBidmTimeTracking, input);
  }

  public findWorkOrderAttributes(input: BidmWorkOrderDTOId): Observable<BidmWoAttributeDTO[]> {
    return super.post<BidmWorkOrderDTOId, BidmWoAttributeDTO[]>(
      this.aircraftMaintenanceApi.findBidmWoAttributesByWorkOrder,
      input
    );
  }

  public updateMaintenancePlanFromWorkOrder(bidmWorkOrderDTO: BidmWorkOrderDTO): Observable<ReportMessage[]> {
    return super.post<BidmWorkOrderDTO, ReportMessage[]>(
      this.aircraftMaintenanceApi.updateMaintenancePlanFromWorkOrder,
      bidmWorkOrderDTO
    );
  }

  public updateLogbookFromWorkOrderInput(
    updateLogbookFromWorkOrderInput: UpdateLogbookFromWorkOrderInput
  ): Observable<ReportMessage[]> {
    return super.post<UpdateLogbookFromWorkOrderInput, ReportMessage[]>(
      this.aircraftMaintenanceApi.updateLogbookFromWorkOrderInput,
      updateLogbookFromWorkOrderInput
    );
  }

  public initializeUpdateLogbookFromWorkOrderInput(
    bidmWorkOrderDTO: BidmWorkOrderDTO
  ): Observable<UpdateLogbookFromWorkOrderInput> {
    return super.post<BidmWorkOrderDTO, UpdateLogbookFromWorkOrderInput>(
      this.aircraftMaintenanceApi.initializeUpdateLogbookFromWorkOrderInput,
      bidmWorkOrderDTO
    );
  }

  public deleteLogbookNotificationFromWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<void> {
    return super.post<BidmWorkOrderDTOId, void>(
      this.aircraftMaintenanceApi.deleteLogbookNotificationFromWorkOrder,
      bidmWorkOrderDTOId
    );
  }

  /***********************************
   user profile api
  ***********************************/

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public findUserById(userId: BidoUserDTOId): Observable<BidoUserDTO> {
    return super.post<BidoUserDTOId, BidoUserDTO>(this.userProfileManagementApi.findUser, userId);
  }

  public findBidoUserByLogin(login: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, login);
  }

  /***********************************
   fleet business api
  ***********************************/
  public controlConfiguration(input: ControlConfigurationInput): Observable<ControlConfigurationOutput> {
    return super.post<ControlConfigurationInput, ControlConfigurationOutput>(
      this.fleetBusinessApi.controlConfiguration,
      input
    );
  }

  public findDefectEventsByEquipmentCode(
    input: FindDefectEventsByEquipmentCodeInput
  ): Observable<DeferredDefectEventDTO[]> {
    return super.post<FindDefectEventsByEquipmentCodeInput, DeferredDefectEventDTO[]>(
      this.fleetBusinessApi.findDefectEventsByEquipmentCode,
      input
    );
  }

  public createWorkPostponementRequest(input: WorkPostponementInput): Observable<BidoNotificationDTO> {
    return super.post<WorkPostponementInput, BidoNotificationDTO>(
      this.fleetBusinessApi.createWorkPostponementRequest,
      input
    );
  }

  public cancelWorkPostponementRequest(input: BidoNotificationDTOId): Observable<void> {
    return super.post<BidoNotificationDTOId, void>(this.fleetBusinessApi.cancelWorkPostponementRequest, input);
  }

  /***********************************
   employee api
  ***********************************/
  public getEmployeeById(id: number): Observable<BidtEmployeeDTO> {
    return super.post<number, BidtEmployeeDTO>(this.bidtEmployeeApi.getById, id);
  }

  /***********************************
   Task managment api
  ***********************************/
  public findBireTask(taskId: BireTaskDTOId): Observable<BireTaskDTO> {
    return super.post<BireTaskDTOId, BireTaskDTO>(this.taskManagementApi.findBireTask, taskId);
  }

  public findBireDocTaskByTask(taskId: BireTaskDTOId): Observable<BireDocumentDTO[]> {
    return super.post<BireTaskDTOId, BireDocumentDTO[]>(this.taskManagementApi.findBireDocumentsByTask, taskId);
  }

  /***********************************
   Fleet management api
  ***********************************/
  public findBidoEquipment(equipmentId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, equipmentId);
  }

  public generateJobcard(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<FileContentDTO> {
    return super.post<BidmWorkOrderDTOId, FileContentDTO>(
      this.amProjectManagementApi.generateJobcard,
      bidmWorkOrderDTOId
    );
  }

  public findBidoNotification(notificationId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      notificationId
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

  /**************************************************************************
   * Bidt Stock api
   *************************************************************************/
  public controlStock(input: ControlStockInput): Observable<GetQuantityInStockBySiteOutput[]> {
    return super.post<ControlStockInput, GetQuantityInStockBySiteOutput[]>(this.bidtStockMvtApi.controlStock, input);
  }

  public getRequestDetailList() {
    return [
      {
        procurementRequest: 'MR4000992',
        procurementRequestDescription: 'Nivelment store',
        referenceDocument: '',
        referenceDocumentDesc: '',
        recepient: 'BA118-MDM',
        recepientDesc: 'Magasin',
        materials: '###0055215-2154###',
        materialsDesc: 'Lot de Deploiement',
        quantity: '3',
        status: 'En course',
        statusDesc: '19/08/2019',
        expectedOn: '23/08/2019',
        criticity: 'Urgent'
      },
      {
        procurementRequest: 'MR4001831',
        procurementRequestDescription: 'Da order de Travel',
        referenceDocument: 'WO400992',
        referenceDocumentDesc: 'Order de Travel',
        recepient: 'BA118-MDM',
        recepientDesc: 'Atelier 2',
        materials: '',
        materialsDesc: '2 Postes',
        quantity: '2',
        status: 'Planifie',
        statusDesc: '19/08/2019',
        expectedOn: '23/08/2019',
        criticity: 'Immediate'
      },
      {
        procurementRequest: 'MR400671',
        procurementRequestDescription: 'Da order de Travel',
        referenceDocument: 'WO400321',
        referenceDocumentDesc: 'Order de Travel',
        recepient: 'BA118-MDM',
        recepientDesc: 'Magasin',
        materials: '###0055215-2154###',
        materialsDesc: 'DESIGNATION DU PIN',
        quantity: '1',
        status: 'Realise',
        statusDesc: '19/08/2019',
        expectedOn: '23/08/2019',
        criticity: 'Routine'
      }
    ];
  }

  /***********************************
   Work Center api
  ***********************************/
  public getWorkCenterById(id: number): Observable<BidtWorkCenterDTO> {
    return super.post<number, BidtWorkCenterDTO>(this.bidtWorkCenterApi.getById, id);
  }

  /***********************************
   Warehouse api
  ***********************************/
  public getWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, id);
  }

  /***********************************
   Work Order assignment api
  ***********************************/
  public findBidmWoAssignmentsByWorkOrder(workOrderId: BidmWorkOrderDTOId): Observable<BidmWoAssignmentDTO[]> {
    return super.post<BidmWorkOrderDTOId, BidmWoAssignmentDTO[]>(
      this.bidmWoAssignmentApi.findBidmWoAssignmentsByWorkOrder,
      workOrderId
    );
  }

  public createBidmWoAssignment(woAssignment: BidmWoAssignmentInput): Observable<BidmWoAssignmentDTO> {
    return super.post<BidmWoAssignmentInput, BidmWoAssignmentDTO>(
      this.bidmWoAssignmentApi.createBidmWoAssignment,
      woAssignment
    );
  }

  // public updateBidmWoAssignment(woAssignment: BidmWoAssignmentDTO): Observable<void> {
  //   return super.post<BidmWoAssignmentDTO, void>(this.bidmWoAssignmentApi.updateBidmWoAssignment, woAssignment);
  // }

  public updateBidmWoAssignment(woAssignment: BidmWoAssignmentInput): Observable<BidmWoAssignmentDTO> {
    return super.post<BidmWoAssignmentInput, BidmWoAssignmentDTO>(
      this.bidmWoAssignmentApi.updateBidmWoAssignment,
      woAssignment
    );
  }

  public removeBidmWoAssignment(input: BidmWoAssignmentDTOId): Observable<void> {
    return super.post<BidmWoAssignmentDTOId, void>(this.bidmWoAssignmentApi.removeBidmWoAssignment, input);
  }

  /**************************************************************************
   * WoAsset management api
   *************************************************************************/
  public getByWorkOrder(input: BidmWorkOrderDTOId): Observable<WoAssetManagementDTO[]> {
    return super.post<BidmWorkOrderDTOId, WoAssetManagementDTO[]>(this.woAssetManagementApi.getByWorkOrder, input);
  }

  public addWoAssetManagementToWo(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(this.woAssetManagementApi.addToWorkOrder, input);
  }

  public woAssetManagementUpdateDecision(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(this.woAssetManagementApi.updateDecision, input);
  }

  public woAssetManagementUpdateSuperiorAsset(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(
      this.woAssetManagementApi.updateSuperiorAsset,
      input
    );
  }

  public woAssetManagementUpdateItemOrFunctionCode(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(
      this.woAssetManagementApi.updateItemOrFunctionCode,
      input
    );
  }

  public woAssetManagementUpdatePn(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(this.woAssetManagementApi.updatePn, input);
  }

  public woAssetManagementUpdateSelectedEquipment(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(
      this.woAssetManagementApi.updateSelectedEquipment,
      input
    );
  }

  public woAssetManagementUpdateSelectedWarehouse(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(
      this.woAssetManagementApi.updateSelectedWarehouse,
      input
    );
  }

  public woAssetManagementExecuteDecisions(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO[]> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO[]>(
      this.woAssetManagementApi.executeDecisions,
      input
    );
  }

  public woAssetManagementUndoDecisions(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO[]> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO[]>(
      this.woAssetManagementApi.undoDecisions,
      input
    );
  }

  public woAssetManagementControl(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO>(this.woAssetManagementApi.control, input);
  }

  public woAssetManagementSave(input: WoAssetManagementInputDTO): Observable<WoAssetManagementDTO[]> {
    return super.post<WoAssetManagementInputDTO, WoAssetManagementDTO[]>(this.woAssetManagementApi.save, input);
  }

  public findHBidmOperation(input: BidmOperationDTOId): Observable<SearchResultsDTO<HBidmOperationDTO>> {
    return super.post<BidmOperationDTOId, SearchResultsDTO<HBidmOperationDTO>>(
      this.operationHistoryApi.findBidmOperationHistoric,
      input
    );
  }

  public findBidtSiteById(siteId: number | undefined): Observable<BidtSiteDTO> {
    return super.post<number | undefined, BidtSiteDTO>(this.bidtSiteApi.getById, siteId);
  }

  public findBidtSiteByCriteria(bidtSiteDTO: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.findAllByCriteria, bidtSiteDTO);
  }
}
