import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../shared/api/airworthiness-management.api';
import { MaintenancePlanApi } from '../../../shared/api/maintenance-plan.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../shared/api/user-profile-business.api';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { InitializeMaintenancePlanStructureInput } from '../../../shared/types/api-input-types/airworthiness-management/initialize-maintenance-plan-structure-input.interface';
import { BaseMpRowInput } from '../../../shared/types/api-input-types/maintenance-plan/base-mp-row-input.interface';
import { DeleteCounterMpInput } from '../../../shared/types/api-input-types/maintenance-plan/delete-counter-mp-input.interface';
import { SaveBaseMpCounterInput } from '../../../shared/types/api-input-types/maintenance-plan/save-base-mp-counter-input.interface';
import { SetActionFlagMpInput } from '../../../shared/types/api-input-types/maintenance-plan/set-action-flag-mp-input.interface';
import { AssetMaintenancePlanOutput } from '../../../shared/types/api-output-types/maintenance-plan/asset-maintenance-plan-output.interface';
import { BaseMaintenancePlanStructureOutput } from '../../../shared/types/api-output-types/maintenance-plan/base-maintenance-plan-structure-output.interface';
import { MaintenanceProgramReports } from '../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { AccessRightQueryDTO } from '../../../shared/types/api-types/access-right-query-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { SelectMaintenancePlanTaskInput } from '../../../shared/types/api-types/select-maintenance-plan-task-input.interface';
import { TaskCounterDTO } from '../../../shared/types/api-types/task-counter-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class AssetMaintenancePlanService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly maintenancePlanApi: MaintenancePlanApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadAssetMaintenancePlan(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<AssetMaintenancePlanOutput> {
    return super.post<BidoEquipmentDTOId, AssetMaintenancePlanOutput>(
      this.maintenancePlanApi.loadAssetBaseMaintenancePlan,
      bidoEquipmentDTOId
    );
  }

  public getBaseAssetMaintenancePlanStructure(
    input: InitializeMaintenancePlanStructureInput
  ): Observable<BaseMaintenancePlanStructureOutput[]> {
    return super.post<InitializeMaintenancePlanStructureInput, BaseMaintenancePlanStructureOutput[]>(
      this.maintenancePlanApi.getBaseAssetMaintenancePlanStructure,
      input
    );
  }

  public compareAmpWithOmp(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<MaintenanceProgramReports> {
    return super.post<BidoEquipmentDTOId, MaintenanceProgramReports>(
      this.maintenancePlanApi.compareAmpWithOmp,
      bidoEquipmentDTOId
    );
  }

  public findAllBireTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findReferencesForAssetMp(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.maintenancePlanApi.findReferencesForAssetMp);
  }

  public findAllBireMeasureReferencesMaintenanceProgram(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram
    );
  }

  public findReferencesForPeriodicity(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.maintenancePlanApi.findReferencesForPeriodicity);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findBireTasksByCriteria(criteria: FindBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireTasksByCriteria,
      criteria
    );
  }

  public selectMaintenancePlanTask(criteria: SelectMaintenancePlanTaskInput): Observable<boolean> {
    return super.post<SelectMaintenancePlanTaskInput, boolean>(
      this.maintenancePlanApi.selectMaintenancePlanTask,
      criteria
    );
  }

  public hasUpdateRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasUpdateRights, accessRightQueryDTO);
  }

  public hasDisplayRights(useCaseCode?: string): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: useCaseCode || BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasDisplayRights, accessRightQueryDTO);
  }

  public hasManageRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasManageRights, accessRightQueryDTO);
  }

  public approveCustomizeBaseMp(input: SetActionFlagMpInput): Observable<boolean> {
    return super.post<SetActionFlagMpInput, boolean>(this.maintenancePlanApi.approveCustomizeBaseMp, input);
  }

  public addTaskBaseMp(input: BaseMpRowInput): Observable<void> {
    return super.post<BaseMpRowInput, void>(this.maintenancePlanApi.addTaskBaseMp, input);
  }

  public removeTaskBaseMp(input: BaseMpRowInput[]): Observable<string> {
    return super.post<BaseMpRowInput[], string>(this.maintenancePlanApi.removeTaskBaseMp, input);
  }

  public deactivateTaskBaseMp(input: BaseMpRowInput[]): Observable<void> {
    return super.post<BaseMpRowInput[], void>(this.maintenancePlanApi.deactivateTaskBaseMp, input);
  }

  public activateTaskBaseMp(input: BaseMpRowInput[]): Observable<void> {
    return super.post<BaseMpRowInput[], void>(this.maintenancePlanApi.activateTaskBaseMp, input);
  }

  public saveTaskCounterBaseMp(input: SaveBaseMpCounterInput): Observable<void> {
    return super.post<SaveBaseMpCounterInput, void>(this.maintenancePlanApi.saveTaskCounterBaseMp, input);
  }

  public getAllCountersBaseMp(input: BaseMpRowInput): Observable<TaskCounterDTO[]> {
    return super.post<BaseMpRowInput, TaskCounterDTO[]>(this.maintenancePlanApi.getAllCountersBaseMp, input);
  }

  public deleteTaskCounterBaseMp(input: DeleteCounterMpInput[]): Observable<void> {
    return super.post<DeleteCounterMpInput[], void>(this.maintenancePlanApi.deleteTaskCounterBaseMp, input);
  }

  public autoSelectMaintenancePlanTasks(equipmentCode: string): Observable<string> {
    return super.post<string, string>(this.airworthinessManagementApi.autoSelectMaintenancePlanTasks, equipmentCode);
  }
}
