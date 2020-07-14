import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { BidoContactDTO } from '../../../shared/types/api-types/bido-contact-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchContactService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findContact(criteria: BidoContactDTO): Observable<SearchResultsDTO<BidoContactDTO>> {
    return super.post<BidoContactDTO, SearchResultsDTO<BidoContactDTO>>(
      this.fleetManagementApi.findBidoContactsBySearchCriteria,
      criteria
    );
  }
}
