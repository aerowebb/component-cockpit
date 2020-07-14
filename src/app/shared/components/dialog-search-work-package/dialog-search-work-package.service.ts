import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../../shared/api/am-project-management.api';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchWorkPackageService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aMProjectManagementApi: AMProjectManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi
  ) {
    super(http, appConfigService);
  }

  public findProjects(criteria: BidmProjectDTO): Observable<SearchResultsDTO<BidmProjectDTO>> {
    return super.post<BidmProjectDTO, SearchResultsDTO<BidmProjectDTO>>(
      this.aMProjectManagementApi.findBidmProjectsByProjectCriteriaWithMaxResult,
      criteria
    );
  }

  public getAirmProjectStatusList(): Observable<LabelValue<string>[]> {
    return super.get<LabelValue<string>[]>(this.aircraftMaintenanceApi.getAirmProjectStatusList);
  }
}
