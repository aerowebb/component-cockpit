import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidoFlDTO } from '../../../../../generated_files/api-types/bido-fl-dto.interface';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { UserProfileManagementApi } from '../../api/user-profile-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { CatalogPropertiesTableDTO } from '../../types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';

@Injectable()
export class DialogSearchFunctionalLocationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagement: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public searchFunctionalLocationList(
    criteria: FindBidoFlsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BidoFlDTO>> {
    return super.post<FindBidoFlsBySearchCriteriaInput, SearchResultsDTO<BidoFlDTO>>(
      this.fleetManagementApi.findBidoFlsBySearchCriteria,
      criteria
    );
  }

  public fetchPropertyValuesTableData(propertiesId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagement.findBidoPropertiesValuesByPropertiesId,
      propertiesId
    );
  }
}
