import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { FindBireQualificationsBySearchCriteriaInput } from '../../../shared/types/api-input-types/task-management/find-bire-qualifications-by-search-criteria-input.interface';
import { BireQualificationDTO } from '../../../shared/types/api-types/bire-qualification-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchQualificationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findQualification(searchObject: BireQualificationDTO): Observable<SearchResultsDTO<BireQualificationDTO>> {
    const param: FindBireQualificationsBySearchCriteriaInput = {
      bireQualification: searchObject,
      bireTask: {}
    };

    return super.post<FindBireQualificationsBySearchCriteriaInput, SearchResultsDTO<BireQualificationDTO>>(
      this.taskManagementApi.findBireQualificationsBySearchCriteria,
      param
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }
}
