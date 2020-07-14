import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BireActionTypeConstants } from '../../../../../shared/constants/bire-action-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { FamilyVariantDTO } from '../../../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ImpactsItemPopupFormService extends AbstractAwHttpService {
  public isDuplicate: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public isDuplicated(duplicate: boolean) {
    this.isDuplicate = duplicate;
  }

  public findBireItemsBySearchCriteria(
    criteria: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      criteria
    );
  }

  public findBireItemsBySearchCriteriaToLVD(): Observable<BireItemDTO[]> {
    return super.post<void, BireItemDTO[]>(this.productStructureManagementApi.findBireItemsBySearchCriteriaToLVD);
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
}
