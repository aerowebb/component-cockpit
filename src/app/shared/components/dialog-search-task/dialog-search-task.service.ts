import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { TaskManagementApi } from '../../api/task-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { VisitCriteriaMPInput } from '../../types/api-input-types/task-management/visit-criteria-mp-input.interface';
import { BireTaskDTO } from '../../types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../types/api-types/find-bire-task-by-criteria-input.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchTaskService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
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

  public findBireVisitsByCriteriaForMP(criteria: VisitCriteriaMPInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<VisitCriteriaMPInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireVisitsByCriteriaForMP,
      criteria
    );
  }
}
