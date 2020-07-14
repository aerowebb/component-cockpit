import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { BidoExtensionContextSymptomOutputDTO } from '../../../../../../shared/types/api-output-types/catalog/bido-extension-context-symptom-output-dto.interface';
import { BidoExtensionDTOId } from '../../../../../../shared/types/api-types/bido-extension-dto-id.interface';
import { BidoExtensionDTO } from '../../../../../../shared/types/api-types/bido-extension-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class EventContextService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadEventContextList(): Observable<SearchResultsDTO<BidoExtensionDTO>> {
    return super.post<void, SearchResultsDTO<BidoExtensionDTO>>(
      this.fleetManagementApi.findBidoExtensionsBySearchCriteria
    );
  }

  public deleteEventContexts(input: BidoExtensionDTOId[]) {
    return super.post<BidoExtensionDTOId[], void>(this.fleetManagementApi.removeBidoExtension, input);
  }

  public loadContext(input: BidoExtensionDTOId): Observable<BidoExtensionContextSymptomOutputDTO> {
    return super.post<BidoExtensionDTOId, BidoExtensionContextSymptomOutputDTO>(
      this.fleetManagementApi.findBidoExtensionParameter,
      input
    );
  }

  // Popup

  public loadUnitDropdown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }
}
