import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EvolutionSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findBireEvolutionsByEvolutionCriteria(
    criteria: BireEvolutionDTO,
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: criteria,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  public removeBireEvolution(evolutionId: BireEvolutionDTOId): Observable<boolean> {
    return super.post<BireEvolutionDTOId, boolean>(this.productStructureManagementApi.removeBireEvolution, evolutionId);
  }

  public getFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFuncObjectStatusMap');
  }

  public getEvolutionTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionTypeMap');
  }

  public getComplianceMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getComplianceMap');
  }

  public getEvolutionLevelMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionLevelMap');
  }
}
