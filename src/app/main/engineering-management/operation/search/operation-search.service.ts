import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class OperationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireOperationsBySearchCriteria(
    criteria: BireOperationDTO
  ): Observable<SearchResultsDTO<BireOperationDTO>> {
    return super.post<BireOperationDTO, SearchResultsDTO<BireOperationDTO>>(
      this.taskManagementApi.findBireOperationsBySearchCriteria,
      criteria
    );
  }

  public removeBireOperation(p: BireOperationDTOId): Observable<void> {
    return super.post<BireOperationDTOId, void>(this.taskManagementApi.removeBireOperation, p);
  }
}
