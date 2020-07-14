import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchFleetService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoFleetsBySearchCriteria(criteria: BidoFleetDTO): Observable<SearchResultsDTO<BidoFleetDTO>> {
    return super.post<BidoFleetDTO, SearchResultsDTO<BidoFleetDTO>>(
      this.fleetManagementApi.findBidoFleetsBySearchCriteria,
      criteria
    );
  }
}
