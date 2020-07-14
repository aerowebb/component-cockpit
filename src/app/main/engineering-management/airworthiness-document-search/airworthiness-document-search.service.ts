import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindBireSbsBySbCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class AirworthinessDocumentSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public removeBireSbs(selectedBireSbs: BireSbDTO[]): Observable<void> {
    return super.post<BireSbDTO[], void>(this.productStructureManagementApi.removeBireSbs, selectedBireSbs);
  }

  public findBireSbsBySbCriteria(
    criteria: BireSbDTO,
    familyCode?: string,
    structureType?: string,
    variantCode?: string,
    publicationDateFrom?: Date,
    publicationDateTo?: Date,
    effectiveDateFrom?: Date,
    effectiveDateTo?: Date
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const params: FindBireSbsBySbCriteriaInput = {
      bireSbDTO: criteria,
      familyCode,
      structureType,
      variantCode,
      publicationDateFrom,
      publicationDateTo,
      effectiveDateFrom,
      effectiveDateTo
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureManagementApi.findBireSbsBySbCriteria,
      params
    );
  }

  public getSBObjectStatusValue(key: string): Observable<string> {
    return super.post<string, string>(this.productStructureManagementApi.getSBObjectStatusValue, key);
  }

  public getFamilyVariants(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }

  public findBireSbsBySbCriteriaAd(
    criteria: BireSbDTO,
    familyCode: string,
    structureType: string,
    variantCode: string,
    publicationDateFrom?: Date,
    publicationDateTo?: Date,
    effectiveDateFrom?: Date,
    effectiveDateTo?: Date
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const params: FindBireSbsBySbCriteriaInput = {
      bireSbDTO: criteria,
      familyCode,
      structureType,
      variantCode,
      publicationDateFrom,
      publicationDateTo,
      effectiveDateFrom,
      effectiveDateTo
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureManagementApi.findBireSbsBySbCriteriaAd,
      params
    );
  }

  public findBireSbsBySbCriteriaAmg(
    criteria: BireSbDTO,
    familyCode: string,
    structureType: string,
    variantCode: string,
    publicationDateFrom?: Date,
    publicationDateTo?: Date,
    effectiveDateFrom?: Date,
    effectiveDateTo?: Date
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const params: FindBireSbsBySbCriteriaInput = {
      bireSbDTO: criteria,
      familyCode,
      structureType,
      variantCode,
      publicationDateFrom,
      publicationDateTo,
      effectiveDateFrom,
      effectiveDateTo
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureManagementApi.findBireSbsBySbCriteriaAmg,
      params
    );
  }
}
