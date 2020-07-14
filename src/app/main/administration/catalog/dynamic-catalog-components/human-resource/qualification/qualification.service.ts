import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtQualificationApi } from '../../../../../../shared/api/bidt-qualification.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { QualificationListTableOutputDTO } from '../../../../../../shared/types/api-output-types/catalog/qualification-list-table-output-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class QualificationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtQualificationApi: BidtQualificationApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadQualificationsList(): Observable<SearchResultsDTO<QualificationListTableOutputDTO>> {
    return super.post<void, SearchResultsDTO<QualificationListTableOutputDTO>>(
      this.bidtQualificationApi.findByCriteriaQualificationList
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public deleteQualifications(input: number[]): Observable<void> {
    return super.post<number[], void>(this.bidtQualificationApi.delete, input);
  }
}
