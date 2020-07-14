import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { BidoMissionDTO } from '../../../shared/types/api-types/bido-mission-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchMissionService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBidoMissionByCriteria(criteria: BidoMissionDTO): Observable<SearchResultsDTO<BidoMissionDTO>> {
    return super.post<BidoMissionDTO, SearchResultsDTO<BidoMissionDTO>>(
      this.fleetManagementApi.findBidoMissionsBySearchCriteriaForOVS,
      criteria
    );
  }
}
