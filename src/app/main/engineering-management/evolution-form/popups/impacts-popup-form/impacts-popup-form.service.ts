import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BireActionTypeConstants } from '../../../../../shared/constants/bire-action-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { BireEvolutionPnDTOId } from '../../../../../shared/types/api-types/bire-evolution-pn-dto-id.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModelDTO } from '../../../../../shared/types/api-types/bire-model-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { FamilyVariantDTO } from '../../../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ImpactsPopupFormService extends AbstractAwHttpService {
  public isDuplicate: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireItemsBySearchCriteriaToLVD(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<LabelValue<string>[]> {
    return super.post<FindBireItemsBySearchCriteriaInput, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireItemsBySearchCriteriaToLVD,
      findBireItemsBySearchCriteriaInput
    );
  }

  public findBireActionTypesByActionTypeCode(): Observable<LabelValue<string>[]> {
    const item: string = BireActionTypeConstants.ACTION_TYPE_A;

    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      item
    );
  }

  public findAllBireVariantVersions(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public removeBireImpact(impact: BireEvolutionPnDTOId): Observable<boolean> {
    // TODO
    return of(true);
  }

  public findBirePnsBySearchCriteria(
    findBirePnsBySearchCriteriaInput: FindBirePnsBySearchCriteriaPSMInput
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      findBirePnsBySearchCriteriaInput
    );
  }

  public findBirePnsBySearchCriteriaToLVD(
    findBirePnsBySearchCriteriaInput: FindBirePnsBySearchCriteriaPSMInput
  ): Observable<LabelValue<string>[]> {
    return super.post<FindBirePnsBySearchCriteriaPSMInput, LabelValue<string>[]>(
      this.productStructureManagementApi.findBirePnsBySearchCriteriaToLVD,
      findBirePnsBySearchCriteriaInput
    );
  }

  public findBireModelsByVariantPK(
    bireVariantVersionDTOId: BireVariantVersionDTOId
  ): Observable<SearchResultsDTO<BireModelDTO>> {
    return super.post<BireVariantVersionDTOId, SearchResultsDTO<BireModelDTO>>(
      this.productStructureManagementApi.findBireModelsByVariantPK,
      bireVariantVersionDTOId
    );
  }

  public findEvolutionItemVersion(itemDTO: BireItemDTO): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTO, LabelValue<string>[]>(
      this.productStructureManagementApi.findEvolutionItemVersion,
      itemDTO
    );
  }

  public findAllIsnAtasAsStrings(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllIsnAtasAsStrings);
  }

  public findBireItemsBySearchCriteria(
    criteria: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      criteria
    );
  }
}
