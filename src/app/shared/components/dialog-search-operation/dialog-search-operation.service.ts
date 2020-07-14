import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TaskManagementApi } from '../../api/task-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BireOperationDTO } from '../../types/api-types/bire-operation-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';

@Injectable()
export class DialogSearchOperationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireOperationByCriteria(criteria: BireOperationDTO): Observable<SearchResultsDTO<BireOperationDTO>> {
    return super.post<BireOperationDTO, SearchResultsDTO<BireOperationDTO>>(
      this.taskManagementApi.findBireOperationsBySearchCriteria,
      criteria
    );
  }
}
