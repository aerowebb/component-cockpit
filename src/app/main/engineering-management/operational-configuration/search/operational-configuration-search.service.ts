import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { OperationalConfigurationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/operational-configuration-output-dto';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class OperationalConfigurationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public searchOperationalConfigurationList(
    criteria: FindBidoFlsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<OperationalConfigurationOutputDTO>> {
    return super.post<FindBidoFlsBySearchCriteriaInput, SearchResultsDTO<OperationalConfigurationOutputDTO>>(
      this.fleetManagementApi.findOperationalConfigurationBySearchCriteria,
      criteria
    );
  }
}
