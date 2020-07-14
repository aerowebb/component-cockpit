import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../../shared/api/am-project-management.api';
import { FleetBusinessApi } from '../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { ApplyTaskForFlightInput } from '../../../../../shared/types/api-input-types/airworthiness-management/apply-task-for-flight-input.interface';
import { CheckGoNoGoWPsOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/check-go-no-go-wps-of-flight-input.interface';
import { CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput } from '../../../../../shared/types/api-input-types/fleet-business/create-replenishment-by-flight-and-equipment-and-replenishment-type-input.interface';
import { ValidateActionsOnModificationsOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-modifications-of-flight-input.interface';
import { ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-ome-and-role-equipments-of-flight-input.interface';
import { ValidateActionsOnTasksOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-tasks-of-flight-input.interface';
import { FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput } from '../../../../../shared/types/api-input-types/fleet-management/find-replenishment-by-mission-equipment-and-type-and-equipment-code-input.interface';
import { RemoveReplenishmentMeasureListInput } from '../../../../../shared/types/api-input-types/fleet-management/remove-replenishment-measure-list-input.interface';
import { SaveReplenishmentMeasureListInput } from '../../../../../shared/types/api-input-types/fleet-management/save-replenishment-measure-list-input.interface';
import { UpdateReplenishmentAfterFlightQuantityFromAircraftInput } from '../../../../../shared/types/api-input-types/fleet-management/update-replenishment-after-flight-quantity-from-aircraft-input.interface';
import { LineMaintenanceModificationDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-modification-dto.interface';
import { LineMaintenanceOperationDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-operation-dto.interface';
import { LineMaintenanceRoleEquipmentOmeDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-role-equipment-ome-dto.interface';
import { LineMaintenanceWorkPackageDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-work-package-dto.interface';
import { LoadLineMaintenanceOuput } from '../../../../../shared/types/api-output-types/fleet-business/load-line-maintenance-output.interface';
import { BidmProjectDTOId } from '../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoReplenishmentDTOId } from '../../../../../shared/types/api-types/bido-replenishment-dto-id.interface';
import { BidoReplenishmentDTO } from '../../../../../shared/types/api-types/bido-replenishment-dto.interface';
import { BidoReplenishmentMeasureDTO } from '../../../../../shared/types/api-types/bido-replenishment-measure-dto.interface';

@Injectable()
export class LineMaintenanceFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly aMProjectManagementApi: AMProjectManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public applyTaskForFlight(input: ApplyTaskForFlightInput): Observable<BidoNotificationDTO> {
    return super.post<ApplyTaskForFlightInput, BidoNotificationDTO>(
      this.airworthinessManagementApi.applyTaskForFlight,
      input
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public createBidmProject(input: BidmProjectDTO): Observable<BidmProjectDTOId> {
    return super.post<BidmProjectDTO, BidmProjectDTOId>(this.aMProjectManagementApi.createBidmProject, input);
  }

  public findBidmProject(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.aMProjectManagementApi.findBidmProject, projectId);
  }

  public removeBidmProject(id: BidmProjectDTOId): Observable<void> {
    return super.post<BidmProjectDTOId, void>(this.aMProjectManagementApi.removeBidmProject, id);
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public calculateReplenishmentEngineOilConsumption(input: BidoReplenishmentDTOId): Observable<BidoReplenishmentDTO> {
    return super.post<BidoReplenishmentDTOId, BidoReplenishmentDTO>(
      this.fleetBusinessApi.calculateReplenishmentEngineOilConsumption,
      input
    );
  }

  public calculateReplenishmentQuantityList(input: BidoReplenishmentDTOId): Observable<BidoReplenishmentDTO> {
    return super.post<BidoReplenishmentDTOId, BidoReplenishmentDTO>(
      this.fleetBusinessApi.calculateReplenishmentQuantityList,
      input
    );
  }

  public checkGoNoGoWPsOfFlight(input: CheckGoNoGoWPsOfFlightInput): Observable<LineMaintenanceWorkPackageDTO[]> {
    return super.post<CheckGoNoGoWPsOfFlightInput, LineMaintenanceWorkPackageDTO[]>(
      this.fleetBusinessApi.checkGoNoGoWPsOfFlight,
      input
    );
  }

  public clearLineMaintenanceCache(input: BidoMissionEquipmentDTOId): Observable<void> {
    return super.post<BidoMissionEquipmentDTOId, void>(this.fleetBusinessApi.clearLineMaintenanceCache, input);
  }

  public createReplenishmentByFlightAndEquipmentAndReplenishmentType(
    input: CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput
  ): Observable<BidoReplenishmentDTOId> {
    return super.post<CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput, BidoReplenishmentDTOId>(
      this.fleetBusinessApi.createReplenishmentByFlightAndEquipmentAndReplenishmentType,
      input
    );
  }

  public initializeLineMaintenance(input: BidoMissionEquipmentDTOId): Observable<void> {
    return super.post<BidoMissionEquipmentDTOId, void>(this.fleetBusinessApi.initializeLineMaintenance, input);
  }

  public loadLineMaintenance(input: BidoMissionEquipmentDTOId): Observable<LoadLineMaintenanceOuput> {
    return super.post<BidoMissionEquipmentDTOId, LoadLineMaintenanceOuput>(
      this.fleetBusinessApi.loadLineMaintenance,
      input
    );
  }

  public loadLineMaintenanceModificationList(
    input: BidoMissionEquipmentDTOId
  ): Observable<LineMaintenanceModificationDTO[]> {
    return super.post<BidoMissionEquipmentDTOId, LineMaintenanceModificationDTO[]>(
      this.fleetBusinessApi.loadLineMaintenanceModificationList,
      input
    );
  }

  public loadLineMaintenanceOperationList(input: BidoMissionEquipmentDTOId): Observable<LineMaintenanceOperationDTO[]> {
    return super.post<BidoMissionEquipmentDTOId, LineMaintenanceOperationDTO[]>(
      this.fleetBusinessApi.loadLineMaintenanceOperationList,
      input
    );
  }

  public loadLineMaintenanceRoleEquipmentOmeList(
    input: BidoMissionEquipmentDTOId
  ): Observable<LineMaintenanceRoleEquipmentOmeDTO[]> {
    return super.post<BidoMissionEquipmentDTOId, LineMaintenanceRoleEquipmentOmeDTO[]>(
      this.fleetBusinessApi.loadLineMaintenanceRoleEquipmentOmeList,
      input
    );
  }

  public loadLineMaintenanceWorkPackageList(
    input: BidoMissionEquipmentDTOId
  ): Observable<LineMaintenanceWorkPackageDTO[]> {
    return super.post<BidoMissionEquipmentDTOId, LineMaintenanceWorkPackageDTO[]>(
      this.fleetBusinessApi.loadLineMaintenanceWorkPackageList,
      input
    );
  }

  public resetReplenishmentEngineOilConsumption(input: BidoReplenishmentDTOId): Observable<void> {
    return super.post<BidoReplenishmentDTOId, void>(
      this.fleetBusinessApi.resetReplenishmentEngineOilConsumption,
      input
    );
  }

  public validateActionsOnModificationsOfFlight(input: ValidateActionsOnModificationsOfFlightInput): Observable<void> {
    return super.post<ValidateActionsOnModificationsOfFlightInput, void>(
      this.fleetBusinessApi.validateActionsOnModificationsOfFlight,
      input
    );
  }

  public validateActionsOnOmeAndRoleEquipmentsOfFlight(
    input: ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput
  ): Observable<void> {
    return super.post<ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput, void>(
      this.fleetBusinessApi.validateActionsOnOmeAndRoleEquipmentsOfFlight,
      input
    );
  }

  public validateActionsOnTasksOfFlight(input: ValidateActionsOnTasksOfFlightInput): Observable<void> {
    return super.post<ValidateActionsOnTasksOfFlightInput, void>(
      this.fleetBusinessApi.validateActionsOnTasksOfFlight,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoCustomerBySearchCriteria(input: BidoCustomerDTO): Observable<BidoCustomerDTO[]> {
    return super.post<BidoCustomerDTO, BidoCustomerDTO[]>(
      this.fleetManagementApi.findAllBidoCustomerBySearchCriteria,
      input
    );
  }

  public findEquipmentEngineListByEquipmentCode(input: string): Observable<BidoEquipmentDTO[]> {
    return super.post<string, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
      input
    );
  }

  public findFlCurrentlyAppliedByEquipmentCode(input: string): Observable<BidoFlDTO> {
    return super.post<string, BidoFlDTO>(this.fleetManagementApi.findFlCurrentlyAppliedByEquipmentCode, input);
  }

  public findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode(
    input: FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput
  ): Observable<BidoReplenishmentDTO> {
    return super.post<FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput, BidoReplenishmentDTO>(
      this.fleetManagementApi.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode,
      input
    );
  }

  public findReplenishmentMeasureListByReplenishmentId(
    input: BidoReplenishmentDTOId
  ): Observable<BidoReplenishmentMeasureDTO[]> {
    return super.post<BidoReplenishmentDTOId, BidoReplenishmentMeasureDTO[]>(
      this.fleetManagementApi.findReplenishmentMeasureListByReplenishmentId,
      input
    );
  }

  public getBidoMissionEquipment(input: BidoMissionEquipmentDTOId): Observable<BidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
      this.fleetManagementApi.findBidoMissionEquipment,
      input
    );
  }

  public getEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public getEquipmentRepresentation(input: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.fleetManagementApi.getEquipmentRepresentation, input);
  }

  public getHighestReplenishmentMeasureNumberByReplenishmentId(input: BidoReplenishmentDTOId): Observable<number> {
    return super.post<BidoReplenishmentDTOId, number>(
      this.fleetManagementApi.getHighestReplenishmentMeasureNumberByReplenishmentId,
      input
    );
  }

  public removeReplenishmentMeasureList(input: RemoveReplenishmentMeasureListInput): Observable<void> {
    return super.post<RemoveReplenishmentMeasureListInput, void>(
      this.fleetManagementApi.removeReplenishmentMeasureList,
      input
    );
  }

  public saveReplenishmentMeasureList(input: SaveReplenishmentMeasureListInput): Observable<void> {
    return super.post<SaveReplenishmentMeasureListInput, void>(
      this.fleetManagementApi.saveReplenishmentMeasureList,
      input
    );
  }

  public updateReplenishmentAfterFlightQuantityFromAircraft(
    input: UpdateReplenishmentAfterFlightQuantityFromAircraftInput
  ): Observable<void> {
    return super.post<UpdateReplenishmentAfterFlightQuantityFromAircraftInput, void>(
      this.fleetManagementApi.updateReplenishmentAfterFlightQuantityFromAircraft,
      input
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public getStandardCycleCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardCycleCounterLabel);
  }

  public getStandardTimeCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardTimeCounterLabel);
  }
}
