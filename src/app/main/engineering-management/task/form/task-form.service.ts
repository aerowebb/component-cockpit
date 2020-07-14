import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { StatusManagementApi } from '../../../../shared/api/status-management.api';
import { TaskBusinessApi } from '../../../../shared/api/task-business.api';
import { TaskHistoryApi } from '../../../../shared/api/task-history.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { FindBireQualificationsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/task-management/find-bire-qualifications-by-search-criteria-input.interface';
import { PnTaskSearchInput } from '../../../../shared/types/api-input-types/task-management/pn-task-search-input.interface';
import { BireTaskMeasurementPointTableDTO } from '../../../../shared/types/api-output-types/task-management/bire-task-measurement-point-table-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BirePlanAttributeDTO } from '../../../../shared/types/api-types/bire-plan-attribute-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireSmTaskDTO } from '../../../../shared/types/api-types/bire-sm-task-dto.interface';
import { BireTaskAttributeDTOId } from '../../../../shared/types/api-types/bire-task-attribute-dto-id.interface';
import { BireTaskAttributeDTO } from '../../../../shared/types/api-types/bire-task-attribute-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskEvolutionDTO } from '../../../../shared/types/api-types/bire-task-evolution-dto.interface';
import { BireTaskItemWithItemDTO } from '../../../../shared/types/api-types/bire-task-item-with-item-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { GetMaintainanceProgramWithTaskDTO } from '../../../../shared/types/api-types/get-maintainance-program-with-task-dto.interface';
import { GetTaskLinkInAdequateTableDTO } from '../../../../shared/types/api-types/get-task-link-in-adequate-table-dto.interface';
import { HBireTaskAttributeDTO } from '../../../../shared/types/api-types/h-bire-task-attribute-dto.interface';
import { ObjectStatusDTO } from '../../../../shared/types/api-types/object-status-dto.interface';
import { SaveTaskScreenInput } from '../../../../shared/types/api-types/save-task-screen-input.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class TaskFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskHistoryApi: TaskHistoryApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly taskBusinessApi: TaskBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly statusManagementApi: StatusManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findBireTaskOperationsByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireOperationDTO[]> {
    return super.post<BireTaskDTOId, BireOperationDTO[]>(
      this.taskManagementApi.findBireTaskOperationsByTask,
      bireTaskDTOId
    );
  }

  public getSubContracting(bireTaskDTO: BireTaskDTO): Observable<string> {
    return super.post<BireTaskDTO, string>(this.aircraftMaintenanceApi.getSubcontractingTypeByTask, bireTaskDTO);
  }

  public getTaskLinkInAdequate(bireTaskDTO: BireTaskDTO): Observable<GetTaskLinkInAdequateTableDTO> {
    return super.post<BireTaskDTO, GetTaskLinkInAdequateTableDTO>(
      this.taskManagementApi.getTaskLinkInAdequate,
      bireTaskDTO
    );
  }

  public findBireTaskEvolutionsByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireTaskEvolutionDTO[]> {
    return super.post<BireTaskDTOId, BireTaskEvolutionDTO[]>(
      this.taskManagementApi.findBireTaskEvolutionsByTask,
      bireTaskDTOId
    );
  }

  public findBireTaskItemsWithItemByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireTaskItemWithItemDTO[]> {
    return super.post<BireTaskDTOId, BireTaskItemWithItemDTO[]>(
      this.taskManagementApi.findBireTaskItemsWithItemByTask,
      bireTaskDTOId
    );
  }

  public findBireSmTasksByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireSmTaskDTO[]> {
    return super.post<BireTaskDTOId, BireSmTaskDTO[]>(this.taskManagementApi.findBireSmTasksByTask, bireTaskDTOId);
  }

  public findBireQualificationsBySearchCriteria(
    bireTaskDTO: BireTaskDTO
  ): Observable<SearchResultsDTO<BireQualificationDTO>> {
    const params: FindBireQualificationsBySearchCriteriaInput = {
      bireTask: bireTaskDTO,
      bireQualification: {}
    };

    return super.post<FindBireQualificationsBySearchCriteriaInput, SearchResultsDTO<BireQualificationDTO>>(
      this.taskManagementApi.findBireQualificationsBySearchCriteria,
      params
    );
  }

  public findBireDocumentsByTask(bireTaskDTOId: BireTaskDTOId): Observable<BireDocumentDTO[]> {
    return super.post<BireTaskDTOId, BireDocumentDTO[]>(this.taskManagementApi.findBireDocumentsByTask, bireTaskDTOId);
  }

  public findBireTilTasksByTask(bireTaskDTO: BireTaskDTO): Observable<BireTilDTO[]> {
    return super.post<BireTaskDTO, BireTilDTO[]>(this.taskManagementApi.findBireTilTasksByTask, bireTaskDTO);
  }

  public findBireMaintenanceProgramsByTask(bireTaskDTO: BireTaskDTO): Observable<GetMaintainanceProgramWithTaskDTO[]> {
    return super.post<BireTaskDTO, GetMaintainanceProgramWithTaskDTO[]>(
      this.taskManagementApi.findBireMaintenanceProgramsByTask,
      bireTaskDTO
    );
  }

  public findLastBireMaintenanceProgramsByTask(
    bireTaskDTO: BireTaskDTO
  ): Observable<GetMaintainanceProgramWithTaskDTO> {
    return super.post<BireTaskDTO, GetMaintainanceProgramWithTaskDTO>(
      this.taskManagementApi.findLastBireMaintenanceProgramsByTask,
      bireTaskDTO
    );
  }

  public findAllBireTils(): Observable<BireTilDTO[]> {
    return super.post<void, BireTilDTO[]>(this.taskManagementApi.findAllBireTils);
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findBireOperationsBySearchCriteria(
    criteria: BireOperationDTO
  ): Observable<SearchResultsDTO<BireOperationDTO>> {
    return super.post<BireOperationDTO, SearchResultsDTO<BireOperationDTO>>(
      this.taskManagementApi.findBireOperationsBySearchCriteria,
      criteria
    );
  }

  public findBireTasksByCriteria(): Observable<SearchResultsDTO<BireTaskDTO>> {
    const criteria = {
      bireTaskDTO: {
        taskCode: '',
        taskVersion: ''
      },
      familyCode: '',
      structureType: '',
      variantCode: '',
      taskTypeCodeExcluded: ''
    };

    return super.post<FindBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireTasksByCriteria,
      criteria
    );
  }

  public findBireTask(input: BireTaskDTOId): Observable<BireTaskDTO> {
    return super.post<BireTaskDTOId, BireTaskDTO>(this.taskManagementApi.findBireTask, input);
  }

  public findBireEvolutionsByEvolutionCriteria(
    criteria: BireEvolutionDTO,
    familyCode?: string,
    structureType?: string,
    variantCode?: string
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: criteria,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  public findBireItemsBySearchCriteria(
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    const params: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        familyCode,
        structureType,
        variantCode
      },
      pnCode: undefined,
      attribute: undefined
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      params
    );
  }

  public findFamilyVariant(input: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      input
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireTaskAttributeByTask(task: BireTaskDTO): Observable<BireTaskAttributeDTO[]> {
    const taskId: BireTaskDTOId = {
      taskCode: task.taskCode as string,
      taskVersion: task.taskVersion as string
    };

    return super.post<BireTaskDTOId, BireTaskAttributeDTO[]>(
      this.taskManagementApi.findBireTaskAttributeByTask,
      taskId
    );
  }

  public saveTask(task: SaveTaskScreenInput): Observable<boolean> {
    return super.post<SaveTaskScreenInput, boolean>(this.taskManagementApi.saveTask, task);
  }

  public findBireItemVersionsByItem(item: BireItemDTOId): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTOId, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireItemVersionsByItem,
      item
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFuncObjectStatusMap');
  }

  public getObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getObjectStatusMap');
  }

  public findHBireTaskAttributesByAttributeId(ids: BireTaskAttributeDTOId[]): Observable<HBireTaskAttributeDTO[]> {
    return super.post<BireTaskAttributeDTOId[], HBireTaskAttributeDTO[]>(
      this.taskHistoryApi.findHBireTaskAttributesByAttributeId,
      ids
    );
  }

  public findBireEvolution(input: BireEvolutionDTOId): Observable<BireEvolutionDTO> {
    return super.post<BireEvolutionDTOId, BireEvolutionDTO>(
      this.productStructureManagementApi.findBireEvolution,
      input
    );
  }

  public findBireItem(input: BireItemDTOId): Observable<BireItemDTO> {
    return super.post<BireItemDTOId, BireItemDTO>(this.productStructureManagementApi.findBireItem, input);
  }

  public updateStaus(input: ObjectStatusDTO): Observable<void> {
    return super.post<ObjectStatusDTO, void>(this.statusManagementApi.updateStatusGlobal, input);
  }

  public findAllBireUnitMeasures(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }

  public findBireMeasureReferencesBySearchCriteria(
    bireMeasureReferenceDTO: BireMeasureReferenceDTO
  ): Observable<BireMeasureReferenceDTO[]> {
    return super.post<BireMeasureReferenceDTO, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria,
      bireMeasureReferenceDTO
    );
  }

  public findAllBireTaskMeasurementPoint(input: BireTaskDTOId): Observable<BireTaskMeasurementPointTableDTO[]> {
    return super.post<BireTaskDTOId, BireTaskMeasurementPointTableDTO[]>(
      this.taskManagementApi.findAllBireTaskMeasurementPoint,
      input
    );
  }

  public getTaskLastUpdatedFields(input: BireTaskDTOId): Observable<string[]> {
    return super.post<BireTaskDTOId, string[]>(this.taskBusinessApi.getTaskLastUpdatedFields, input);
  }

  public getPreviousTaskByTaskVersion(input: BireTaskDTO): Observable<BireTaskDTO> {
    return super.post<BireTaskDTO, BireTaskDTO>(this.taskBusinessApi.getPreviousTaskByTaskVersion, input);
  }

  public isHighlightUpdate(): Observable<boolean> {
    return super.post<void, boolean>(this.taskBusinessApi.isHighlightUpdate);
  }

  public findPartNumbersAssociatedWithTaskOperations(input: PnTaskSearchInput): Observable<BirePnDTO[]> {
    return super.post<PnTaskSearchInput, BirePnDTO[]>(
      this.taskManagementApi.findPartNumbersAssociatedWithTaskOperations,
      input
    );
  }
  /**
   * checkNewVersionNumberAndUpgradeBireTaskData() - This function is used to return information of new Task Version.
   * @param input - Current Task Id
   */
  public checkNewVersionNumberAndUpgradeBireTaskData(input: BireTaskDTOId): Observable<BireTaskDTO> {
    return super.post<BireTaskDTOId, BireTaskDTO>(
      this.taskBusinessApi.checkNewVersionNumberAndUpgradeBireTaskData,
      input
    );
  }
  /**
   * checkAndReturnNewVersionNumberByTask() - This function is used to return new version of Task.
   * @param input - Current Task Id
   */
  public checkAndReturnNewVersionNumberByTask(input: BireTaskDTOId): Observable<string> {
    return super.post<BireTaskDTOId, string>(this.taskBusinessApi.checkAndReturnNewVersionNumberByTask, input);
  }
  /**
   * findBirePlanAttributesByPlanCode() - This function is used to check Plan Type.
   * @param bireMaintenancePlanDTO - Plan Code
   */
  public findBirePlanAttributesByPlanCode(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<BirePlanAttributeDTO[]> {
    return super.post<BireMaintenancePlanDTO, BirePlanAttributeDTO[]>(
      this.taskManagementApi.findBirePlanAttributesByPlanCode,
      bireMaintenancePlanDTO
    );
  }
}
