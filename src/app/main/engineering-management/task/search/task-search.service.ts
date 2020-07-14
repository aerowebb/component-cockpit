import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class TaskSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireTasksByCriteria(criteria: FindBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireTasksByCriteria,
      criteria
    );
  }

  public findFamilyVariant(input: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      input
    );
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public removeBireTask(bireTaskDTOId: BireTaskDTOId[]): Observable<boolean> {
    return super.post<BireTaskDTOId[], boolean>(this.taskManagementApi.removeBireTask, bireTaskDTOId);
  }

  public getMaintenanceProgram(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllAvailableRMP);
  }
}
