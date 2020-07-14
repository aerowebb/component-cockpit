import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../../shared/api/am-project-management.api';
import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { AddToWorkPackageInput } from '../../../../../shared/types/api-input-types/airworthiness-management/add-to-work-package-input.interface';
import { ControlBaseMaintenanceSelectionInput } from '../../../../../shared/types/api-input-types/airworthiness-management/control-base-maintenance-selection-input.interface';
import { CreateWorkPackageInput } from '../../../../../shared/types/api-input-types/airworthiness-management/create-work-package-input.interface';
import { ExportDueListInput } from '../../../../../shared/types/api-input-types/airworthiness-management/export-due-list-input.interface';
import { GenerateWorkPackageListInput } from '../../../../../shared/types/api-input-types/airworthiness-management/generate-work-package-list-input.interface';
import { GetAllCounterFromMaintenancePlanInput } from '../../../../../shared/types/api-input-types/airworthiness-management/get-all-counter-from-maintenance-plan-input.interface';
import { GetTaskApplicationHistoryInput } from '../../../../../shared/types/api-input-types/airworthiness-management/get-task-application-history-input.interface';
import { InitializeMaintenancePlanStructureInput } from '../../../../../shared/types/api-input-types/airworthiness-management/initialize-maintenance-plan-structure-input.interface';
import { RemoveFromWorkPackageInput } from '../../../../../shared/types/api-input-types/airworthiness-management/remove-from-work-package-input.interface';
import { SaveTaskApplicationInput } from '../../../../../shared/types/api-input-types/airworthiness-management/save-task-application-input.interface';
import { SaveTaskCounterInput } from '../../../../../shared/types/api-input-types/airworthiness-management/save-task-counter-input.interface';
import { AssetStructureElementOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/asset-structure-element-output.interface';
import { ExportDueListOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/export-due-list-output.interface';
import { MaintenancePlanStructureElementOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/maintenance-plan-structure-element-output.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { InterdependenceDTO } from '../../../../../shared/types/api-types/interdependence-dto.interface';
import { TaskApplicationDTO } from '../../../../../shared/types/api-types/task-application-dto.interface';
import { TaskCounterDTO } from '../../../../../shared/types/api-types/task-counter-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ScheduleMaintenanceFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly aMProjectManagementApi: AMProjectManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public workPackageAddToButtonVisible(maintenancePlanTableSelectedList: TreeNode[]): boolean {
    return (
      maintenancePlanTableSelectedList.length > 0 &&
      maintenancePlanTableSelectedList.every((elt) => elt.data.nextWorkPackage.length === 0)
    );
  }

  public workPackageCreateButtonVisible(maintenancePlanTableSelectedList: TreeNode[]): boolean {
    return true;
    /* return (
      maintenancePlanTableSelectedList.length > 0 &&
      maintenancePlanTableSelectedList.every((elt) => elt.data.nextWorkPackage.length === 0)
    ); */
  }

  public workPackageRemoveFromButtonVisible(maintenancePlanTableSelectedList: TreeNode[]): boolean {
    return (
      maintenancePlanTableSelectedList.length > 0 &&
      maintenancePlanTableSelectedList.every((elt) => elt.data.nextWorkPackage.length > 0)
    );
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public addToWorkPackage(input: AddToWorkPackageInput): Observable<boolean> {
    return super.post<AddToWorkPackageInput, boolean>(this.airworthinessManagementApi.addToWorkPackage, input);
  }

  public applyTask(input: SaveTaskApplicationInput): Observable<BidoNotificationDTO> {
    return super.post<SaveTaskApplicationInput, BidoNotificationDTO>(
      this.airworthinessManagementApi.applyTaskForScheduleMaintenance,
      input
    );
  }

  public clearScheduleMaintenanceCache(input: string): Observable<void> {
    return super.post<string, void>(this.airworthinessManagementApi.clearScheduleMaintenanceCache, input);
  }

  public controlBaseMaintenanceSelection(input: ControlBaseMaintenanceSelectionInput): Observable<boolean> {
    return super.post<ControlBaseMaintenanceSelectionInput, boolean>(
      this.airworthinessManagementApi.controlBaseMaintenanceSelection,
      input
    );
  }

  public controlEvolutionsInterdependenceForScheduleMaintenance(
    topEquipmentCode: string
  ): Observable<InterdependenceDTO[]> {
    return super.post<string, InterdependenceDTO[]>(
      this.airworthinessManagementApi.controlEvolutionsInterdependenceForScheduleMaintenanceInput,
      topEquipmentCode
    );
  }

  public counterListFromMaintenancePlan(topEquipmentCode: string): Observable<object> {
    return super.post<string, object>(this.airworthinessManagementApi.counterListFromMaintenancePlan, topEquipmentCode);
  }

  public createWorkPackage(input: CreateWorkPackageInput): Observable<BidmProjectDTO> {
    return super.post<CreateWorkPackageInput, BidmProjectDTO>(this.airworthinessManagementApi.createWorkPackage, input);
  }

  public exportDueList(input: ExportDueListInput): Observable<ExportDueListOutput[]> {
    return super.post<ExportDueListInput, ExportDueListOutput[]>(this.airworthinessManagementApi.exportDueList, input);
  }

  public getAllCounterFromMaintenancePlan(input: GetAllCounterFromMaintenancePlanInput): Observable<TaskCounterDTO[]> {
    return super.post<GetAllCounterFromMaintenancePlanInput, TaskCounterDTO[]>(
      this.airworthinessManagementApi.getAllCounterFromMaintenancePlanInput,
      input
    );
  }

  public getAssetCsn(topEquipmentCode: string): Observable<string> {
    return super.post<string, string>(this.airworthinessManagementApi.getAssetCsnFromMaintenancePlan, topEquipmentCode);
  }

  public getAssetTsn(topEquipmentCode: string): Observable<string> {
    return super.post<string, string>(this.airworthinessManagementApi.getAssetTsnFromMaintenancePlan, topEquipmentCode);
  }

  public getCsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
  }

  public getPotentialEquivalentValues(topEquipmentCode: string): Observable<number[]> {
    return super.post<string, number[]>(this.airworthinessManagementApi.getPotentialEquivalentValues, topEquipmentCode);
  }

  public getTaskApplicationHistory(input: GetTaskApplicationHistoryInput): Observable<TaskApplicationDTO[]> {
    return super.post<GetTaskApplicationHistoryInput, TaskApplicationDTO[]>(
      this.airworthinessManagementApi.getTaskApplicationHistory,
      input
    );
  }

  public getTsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
  }

  public initializeMaintenancePlanStructure(
    params: InitializeMaintenancePlanStructureInput
  ): Observable<MaintenancePlanStructureElementOutput[]> {
    return super.post<InitializeMaintenancePlanStructureInput, MaintenancePlanStructureElementOutput[]>(
      this.airworthinessManagementApi.initializeMaintenancePlanStructure,
      params
    );
  }

  public initializeScheduleMaintenance(topEquipmentCode: string): Observable<AssetStructureElementOutput[]> {
    return super.post<string, AssetStructureElementOutput[]>(
      this.airworthinessManagementApi.initializeScheduleMaintenance,
      topEquipmentCode
    );
  }

  public removeFromWorkPackage(input: RemoveFromWorkPackageInput): Observable<void> {
    return super.post<RemoveFromWorkPackageInput, void>(this.airworthinessManagementApi.removeFromWorkPackage, input);
  }

  public saveTaskCounter(input: SaveTaskCounterInput): Observable<void> {
    return super.post<SaveTaskCounterInput, void>(this.airworthinessManagementApi.saveTaskCounter, input);
  }

  public taskGroupListFromMaintenancePlan(topEquipmentCode: string): Observable<object> {
    return super.post<string, object>(
      this.airworthinessManagementApi.taskGroupListFromMaintenancePlan,
      topEquipmentCode
    );
  }

  public updateTask(input: SaveTaskApplicationInput): Observable<void> {
    return super.post<SaveTaskApplicationInput, void>(
      this.airworthinessManagementApi.updateTaskApplicationDateForScheduleMaintenance,
      input
    );
  }

  public workPackageList(input: GenerateWorkPackageListInput): Observable<BidmProjectDTO[]> {
    return super.post<GenerateWorkPackageListInput, BidmProjectDTO[]>(
      this.airworthinessManagementApi.generateWorkPackageList,
      input
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public removeWorkPackage(input: BidmProjectDTO): Observable<void> {
    return super.post<BidmProjectDTO, void>(this.aMProjectManagementApi.removeBidmProject, input);
  }

  public updateWorkPackage(input: BidmProjectDTO): Observable<void> {
    return super.post<BidmProjectDTO, void>(this.aMProjectManagementApi.updateBidmProject, input);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoMissionEquipmentByEquipmentCode(equipmentCode: string): Observable<BidoMissionEquipmentDTO[]> {
    return super.post<string, BidoMissionEquipmentDTO[]>(
      this.fleetManagementApi.findAllBidoMissionEquipmentByEquipmentCode,
      equipmentCode
    );
  }

  public getEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public getStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }
}
