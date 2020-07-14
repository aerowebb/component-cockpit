import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskHistoryApi } from '../../../shared/api/task-history.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireTaskAttributeDTOId } from '../../../shared/types/api-types/bire-task-attribute-dto-id.interface';
import { BireTaskAttributeDTO } from '../../../shared/types/api-types/bire-task-attribute-dto.interface';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { HBireTaskAttributeDTO } from '../../../shared/types/api-types/h-bire-task-attribute-dto.interface';
import { SaveBireTaskInput } from '../../../shared/types/api-types/save-bire-task-input.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { TaskDecompositionTableAttributeDTO } from '../../../shared/types/api-types/task-decomposition-table-attribute-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class VisitFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly taskHistoryApi: TaskHistoryApi
  ) {
    super(http, appConfigService);
  }

  /*************************************************************************
   * Task management api
   *************************************************************************/

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findTasksDecompositionByVisit(bireTaskDTO: BireTaskDTO): Observable<TaskDecompositionTableAttributeDTO[]> {
    return super.post<BireTaskDTO, TaskDecompositionTableAttributeDTO[]>(
      this.taskManagementApi.findBireTasksDecomposition,
      bireTaskDTO
    );
  }

  public saveVisit(saveBireTaskInput: SaveBireTaskInput): Observable<boolean> {
    return super.post<SaveBireTaskInput, boolean>(this.taskManagementApi.saveVisit, saveBireTaskInput);
  }

  public findBireMaintenancePlan(bireTaskDTO: BireTaskDTO): Observable<BireMaintenancePlanDTO[]> {
    return super.post<BireTaskDTO, BireMaintenancePlanDTO[]>(
      this.taskManagementApi.findBireMaintenanceProgramsByVisit,
      bireTaskDTO
    );
  }

  public findBireTasksByCriteria(criteria: FindBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireTasksByCriteria,
      criteria
    );
  }

  public findBireTaskAttributeByTask(taskId: BireTaskDTOId): Observable<BireTaskAttributeDTO[]> {
    // const taskId: BireTaskDTOId = {
    //   taskCode: task.taskCode,
    //   taskVersion: task.taskVersion
    // };

    return super.post<BireTaskDTOId, BireTaskAttributeDTO[]>(
      this.taskManagementApi.findBireTaskAttributeByTask,
      taskId
    );
  }

  public findHBireTaskAttributesByAttributeId(ids: BireTaskAttributeDTOId[]): Observable<HBireTaskAttributeDTO[]> {
    return super.post<BireTaskAttributeDTOId[], HBireTaskAttributeDTO[]>(
      this.taskHistoryApi.findHBireTaskAttributesByAttributeId,
      ids
    );
  }

  public findBireOperationsByTaskTotalCost(input: BireTaskDTO): Observable<number> {
    return super.post<BireTaskDTO, number>(this.taskManagementApi.findBireOperationsByTaskTotalCost, input);
  }

  /*************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }
}
