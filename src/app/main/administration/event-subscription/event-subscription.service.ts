import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { GetSubscriptionDataAndContactListByOutputDTO } from '../../../shared/types/api-output-types/catalog/get-subscription-data-and-contact-list-by-output-dto.interface';
import { SavedCatalogOutputDTO } from '../../../shared/types/api-output-types/catalog/saved-catalog-output-dto.inerface';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoSubscriptionDTO } from '../../../shared/types/api-types/bido-subscription-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class EventSubscriptionService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagement: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadEventSubscriptionTableData(): Observable<SearchResultsDTO<BidoSubscriptionDTO>> {
    return super.post<void, SearchResultsDTO<BidoSubscriptionDTO>>(
      this.fleetManagementApi.findBidoSubscriptionsBySearchCriteria
    );
  }

  public deleteSubscriptions(ids: number[]) {
    return super.post<number[], void>(this.fleetManagementApi.removeBidoSubscription, ids);
  }

  /******
   * FORM
   ******/

  public loadEventTypes(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategoryCatalog
    );
  }

  public loadFamilyVariants(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagement.findAllBireVariantVersions);
  }

  public loadSubscription(id: number): Observable<GetSubscriptionDataAndContactListByOutputDTO> {
    return super.post<number, GetSubscriptionDataAndContactListByOutputDTO>(
      this.fleetManagementApi.getSubscriptionDataAndContactListBySubscriptionId,
      id
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public saveCatalog(input: SaveCatalogInput): Observable<SavedCatalogOutputDTO> {
    return super.post<SaveCatalogInput, SavedCatalogOutputDTO>(this.fleetManagementApi.saveCatalog, input);
  }
}
