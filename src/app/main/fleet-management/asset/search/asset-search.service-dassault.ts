import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DavAssetManagementdApi } from '../../../../shared/api/dassault/asset-management.api';
import { AbstractAwDassaultHttpService } from '../../../../shared/http/abstract-aw-dassault-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindBidoEquipmentsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-equipments-by-search-criteria-input.interface';
import { FindBidoEquipmentsDTOBySearchCriteriaOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-equipments-dto-by-search-criteria-output';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class DavAssetSearchService extends AbstractAwDassaultHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly davAssetManagementApi: DavAssetManagementdApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentsDTOBySearchCriteria(
    findBidoEquipmentsBySearchCriteriaInput: FindBidoEquipmentsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>> {
    return super.post<
      FindBidoEquipmentsBySearchCriteriaInput,
      SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>
    >(this.davAssetManagementApi.findBidoEquipmentsBySearchCriteria, findBidoEquipmentsBySearchCriteriaInput);
  }
}
