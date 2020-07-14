import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidoFleetDTOId } from '../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class FleetSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public getBidoFleetsBySearchCriteria(criteria: BidoFleetDTO): Observable<SearchResultsDTO<BidoFleetDTO>> {
    return super.post<BidoFleetDTO, SearchResultsDTO<BidoFleetDTO>>(
      this.fleetManagementApi.findBidoFleetsBySearchCriteria,
      criteria
    );
  }

  public removeBidoFleet(bidoFleetDTOId: BidoFleetDTOId[]): Observable<boolean> {
    return super.post<BidoFleetDTOId[], boolean>(this.fleetManagementApi.removeBidoFleet, bidoFleetDTOId);
  }
}
