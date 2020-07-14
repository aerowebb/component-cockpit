import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { FindBidoMissionBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-mission-by-criteria-input.interface';
import { BidoMissionDTOId } from '../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../shared/types/api-types/bido-mission-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class MissionSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findBidoMissionsBySearchCriteria(
    criteria: FindBidoMissionBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BidoMissionDTO>> {
    return super.post<FindBidoMissionBySearchCriteriaInput, SearchResultsDTO<BidoMissionDTO>>(
      this.fleetManagementApi.findBidoMissionsBySearchCriteria,
      criteria
    );
  }

  public findAllBidoOperations(input: {}): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(this.fleetManagementApi.findAllBidoOperations, input);
  }

  public removeBidoMission(bidoMissionDTOId: BidoMissionDTOId[]): Observable<boolean> {
    return super.post<BidoMissionDTOId[], boolean>(this.fleetManagementApi.removeBidoMission, bidoMissionDTOId);
  }

  public getPeriodicityTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getMissionPeriodicityTypeMap');
  }

  public getMissionTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEventMissionTypeMap');
  }

  public getLocationTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFlightBaseMap');
  }
}
