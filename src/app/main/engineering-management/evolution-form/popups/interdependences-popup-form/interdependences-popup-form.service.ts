import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTOId } from '../../../../../shared/types/api-types/bire-evolution-evolution-dto-id.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class InterdependencesPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public removeBireInterdependence(interdependence: BireEvolutionEvolutionDTOId): Observable<boolean> {
    // TODO
    return of(true);
  }

  public findFamilyVariantVersion(): Observable<SearchResultsDTO<BireVariantDTO>> {
    const familyVariantInput: FindFamilyVariantInput = {
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM
    };

    return super.post<FindFamilyVariantInput, SearchResultsDTO<BireVariantDTO>>(
      this.productStructureManagementApi.findFamilyVariantVersion,
      familyVariantInput
    );
  }

  public findAllBireInterdependences(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireInterdependences);
  }

  public findBireEvolutionsByEvolutionCriteria(
    familyCode?: string,
    structureType?: string,
    variantCode?: string
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const bireEvolutionDTO: BireEvolutionDTO = {};
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
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

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }
}
