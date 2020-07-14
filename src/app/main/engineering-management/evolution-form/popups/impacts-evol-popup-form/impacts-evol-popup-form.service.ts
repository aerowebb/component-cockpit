import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BireActionTypeConstants } from '../../../../../shared/constants/bire-action-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindBireItemVersionByItemAndPnInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-item-versions-by-item-and-pn-code-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemVersionDTO } from '../../../../../shared/types/api-types/bire-item-version-dto.interface';
import { BireModelDTO } from '../../../../../shared/types/api-types/bire-model-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionPnDTO } from '../../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { FamilyVariantDTO } from '../../../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ImpactsEvolPopupFormService extends AbstractAwHttpService {
  public isDuplicate: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public isDuplicated(duplicate: boolean) {
    this.isDuplicate = duplicate;
  }

  public getPnInterchangeabilityMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getPnInterchangeabilityMap');
  }

  public findBireActionTypesByActionTypeCode(): Observable<LabelValue<string>[]> {
    const item: string = BireActionTypeConstants.ACTION_TYPE_B;

    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      item
    );
  }

  public findAllBireVariantVersions(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public FindBireItemsBySearchCriteria(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      findBireItemsBySearchCriteriaInput
    );
  }

  public FindBireItemsBySearchCriteriaToLVD(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<LabelValue<string>[]> {
    return super.post<FindBireItemsBySearchCriteriaInput, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireItemsBySearchCriteriaToLVD,
      findBireItemsBySearchCriteriaInput
    );
  }

  public findEvolutionItemVersion(itemDTO: BireItemDTO): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTO, LabelValue<string>[]>(
      this.productStructureManagementApi.findEvolutionItemVersion,
      itemDTO
    );
  }

  public findBireItemVersionsByItemAndPnCode(
    findBireItemVersionByItemAndPnInput: FindBireItemVersionByItemAndPnInput
  ): Observable<BireItemVersionDTO[]> {
    return super.post<FindBireItemVersionByItemAndPnInput, BireItemVersionDTO[]>(
      this.productStructureManagementApi.findBireItemVersionsByItemAndPnCode,
      findBireItemVersionByItemAndPnInput
    );
  }

  public findAllIsnAtasAsStrings(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllIsnAtasAsStrings);
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

  public findBireVersionPnsByItem(bireItemDTO: BireItemDTO): Observable<BireVersionPnDTO[]> {
    return super.post<BireItemDTO, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByItem,
      bireItemDTO
    );
  }
}
