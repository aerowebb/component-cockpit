import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { BireEvolutionDTO } from '../../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class SbadPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireEvolutionsByEvolutionCriteria(
    evolution: BireEvolutionDTO,
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: evolution,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }
}
