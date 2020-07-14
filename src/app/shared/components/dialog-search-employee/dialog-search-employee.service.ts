import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtEmployeeApi } from '../../../shared/api/bidt-employee.api';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchEmployeeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtEmployeeApi: BidtEmployeeApi
  ) {
    super(http, appConfigService);
  }

  public findEmployee(criteria: BidtEmployeeDTO): Observable<SearchResultsDTO<BidtEmployeeDTO>> {
    return super.post<BidtEmployeeDTO, SearchResultsDTO<BidtEmployeeDTO>>(
      this.bidtEmployeeApi.findBidtEmployeeBySearchCriteria,
      criteria
    );
  }
}
