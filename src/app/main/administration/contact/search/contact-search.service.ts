import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ContactListOutputDTO } from '../../../../shared/types/api-output-types/administration-contact/contact-list-output-dto.interface';
import { BidoContactDTOId } from '../../../../shared/types/api-types/bido-contact-dto-id.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class ContactSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoContactBySearchCriteria(criteria): Observable<ContactListOutputDTO> {
    return super.post<Object, ContactListOutputDTO>(this.fleetManagementApi.findBidoContactBySearchCriteria, criteria);
  }

  public deleteContacts(criteria: BidoContactDTOId[]): Observable<SearchResultsDTO<ContactListOutputDTO>> {
    return super.post<BidoContactDTOId[], SearchResultsDTO<ContactListOutputDTO>>(
      this.fleetManagementApi.removeBidoContact,
      criteria
    );
  }
}
