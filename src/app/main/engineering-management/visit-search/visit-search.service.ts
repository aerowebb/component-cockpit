import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class VisitSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireVisitsByCriteria(criteria: BireTaskDTO): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<BireTaskDTO, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireVisitsByCriteria,
      criteria
    );
  }

  public removeBireTask(bireTaskDTOId: BireTaskDTOId[]): Observable<boolean> {
    return super.post<BireTaskDTOId[], boolean>(this.taskManagementApi.removeBireTask, bireTaskDTOId);
  }
}
