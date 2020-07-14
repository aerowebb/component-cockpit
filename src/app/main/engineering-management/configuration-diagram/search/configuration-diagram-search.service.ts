import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindAllFamilyByModuleAndUseCaseInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-family-by-module-and-use-case-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class ConfigurationDiagramSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/
  public findAllBireItemBySearchCriteria(
    input: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      input
    );
  }

  public findAllBireVariantVersionByFamilyCode(input: string): Observable<BireVariantVersionDTO[]> {
    return super.post<string, BireVariantVersionDTO[]>(
      this.productStructureManagementApi.findAllBireVariantVersionByFamilyCode,
      input
    );
  }

  public findAllFamilyByModuleAndUseCase(input: FindAllFamilyByModuleAndUseCaseInput): Observable<BireFamilyDTO[]> {
    return super.post<FindAllFamilyByModuleAndUseCaseInput, BireFamilyDTO[]>(
      this.productStructureManagementApi.findAllFamilyByModuleAndUseCase,
      input
    );
  }
}
