import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindBireRatingsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-ratings-by-search-criteria-input.interface';
import { FindBireSbsBySbCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { BireEvolutionSbDTOId } from '../../../../shared/types/api-types/bire-evolution-sb-dto-id.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireRatingDTO } from '../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireSbDTO } from '../../../../shared/types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ReferenceMeasurementsPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findAllBireFamilys(): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<void, SearchResultsDTO<BireFamilyDTO>>(this.productStructureManagementApi.findAllBireFamilys);
  }

  public findBireMeasureReferencesBySearchCriteria(
    bireMeasureReferenceDTO: BireMeasureReferenceDTO
  ): Observable<BireMeasureReferenceDTO[]> {
    return super.post<BireMeasureReferenceDTO, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria,
      bireMeasureReferenceDTO
    );
  }

  public findBireRatingsBySearchCriteria(
    findBireRatingsBySearchCriteriaInput: FindBireRatingsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireRatingDTO>> {
    return super.post<FindBireRatingsBySearchCriteriaInput, SearchResultsDTO<BireRatingDTO>>(
      this.productStructureManagementApi.findBireRatingsBySearchCriteria,
      findBireRatingsBySearchCriteriaInput
    );
  }
  public findBireSbsBySbCriteria(): Observable<SearchResultsDTO<BireSbDTO>> {
    const bireSbDTO: BireSbDTO = {
      sbNumber: undefined
    };
    const criteria: FindBireSbsBySbCriteriaInput = {
      bireSbDTO,
      familyCode: undefined,
      structureType: undefined,
      variantCode: undefined,
      publicationDateFrom: undefined,
      publicationDateTo: undefined,
      effectiveDateFrom: undefined,
      effectiveDateTo: undefined
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireEvolutionSbDTOId>>(
      this.productStructureManagementApi.findBireSbsBySbCriteria,
      criteria
    );
  }
  public findAllBireInterdependences(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireInterdependences);
  }

  // public findBireMeasureReferencesBySearchCriteria(familyCode: string, structureType: string,
  //     variantCode: string): Observable<BireMeasureReferenceDTO[]> {
  //     const bireEvolutionDTO: BireEvolutionDTO = {};
  //     const params: FindBireEvolutionsByEvolutionCriteriaInput = {
  //         bireEvolutionDTO: bireEvolutionDTO,
  //         familyCode: familyCode,
  //         structureType: structureType,
  //         variantCode: variantCode
  //     };
  //     const test: Observable<BireEvolutionDTO[]> = super.post<FindBireEvolutionsByEvolutionCriteriaInput,
  //         BireMeasureReferenceDTO[]>(this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria, params);
  //     return test;
  // }

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

  public getRefMeasureCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getRefMeasureCategoryMap');
  }
}
