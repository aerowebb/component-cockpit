import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindBidoFlsBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-fls-by-search-criteria-input.interface';
import { CatalogPropertiesTableDTO } from '../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidoFlDTOId } from '../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class FunctionalLocationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagement: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireVariantVersionsByFamilyFunctionAlternative(): Observable<
    FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]
  > {
    return super.post<void, FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionAlternative
    );
  }

  public searchFunctionalLocationList(
    criteria: FindBidoFlsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BidoFlDTO>> {
    return super.post<FindBidoFlsBySearchCriteriaInput, SearchResultsDTO<BidoFlDTO>>(
      this.fleetManagementApi.findBidoFlsBySearchCriteria,
      criteria
    );
  }

  public removeFunctionalLocation(bidoFlDTOID: BidoFlDTOId[]): Observable<boolean> {
    return super.post<BidoFlDTOId[], boolean>(this.fleetManagementApi.removeBidoFl, bidoFlDTOID);
  }

  public createUpdateFl(bidoFlDTO: BidoFlDTO): Observable<string> {
    return super.post<BidoFlDTO, string>(this.fleetManagementApi.createUpdateFl, bidoFlDTO);
  }

  public fetchPropertyValuesTableData(propertiesId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagement.findBidoPropertiesValuesByPropertiesId,
      propertiesId
    );
  }
}
