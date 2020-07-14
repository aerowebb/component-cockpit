import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindBireSbsBySbCriteriaInput } from '../../types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireSbDTO } from '../../types/api-types/bire-sb-dto.interface';
import { FamilyVariantDTO } from '../../types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';

@Injectable()
export class DialogSearchSbAdService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireSbsBySbCriteria(criteria: FindBireSbsBySbCriteriaInput): Observable<SearchResultsDTO<BireSbDTO>> {
    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureManagementApi.findBireSbsBySbCriteria,
      criteria
    );
  }

  public getFamilyVariants(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }
}
