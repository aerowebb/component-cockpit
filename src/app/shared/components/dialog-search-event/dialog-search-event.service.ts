import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { EventOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { EventCriteriaInputDTO } from '../../../shared/types/api-types/event-criteria-input-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchEventService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findEvent(criteria: EventCriteriaInputDTO): Observable<SearchResultsDTO<EventOVSOutputDTO>> {
    return super.post<EventCriteriaInputDTO, SearchResultsDTO<EventOVSOutputDTO>>(
      this.fleetManagementApi.findEventsBySearchCriteria,
      criteria
    );
  }

  public getEventCaterogyValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventCaterogyValues);
  }

  public getEventStatusValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventStatusValues);
  }

  public getEventTypesValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventTypesValues);
  }
}
