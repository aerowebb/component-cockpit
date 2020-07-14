import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

@Injectable()
export class BusinessPartnerSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(http, appConfigService);
  }

  public openCustomer(objectId: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_BUSINESS_PARTNER_FORM,
      objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
      openMode: objectId ? ComponentOpenMode.Read : ComponentOpenMode.Create
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // //////////////////////////////////////////////////////////////////////////

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public removeBidoCustomer(bidoCustomerId: BidoCustomerDTOId): Observable<boolean> {
    return super.post<BidoCustomerDTOId, boolean>(this.fleetManagementApi.removeBidoCustomer, bidoCustomerId);
  }
}
