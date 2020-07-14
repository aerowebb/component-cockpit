import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class FamilyVariantPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  // To populate values into family-variant dropdown
  public findBireVariantVersionsByFamilyFunctionAlternative(): Observable<
    FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]
  > {
    return super.post<void, FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionAlternative
    );
  }

  // To get all items by family-variant
  public findBireItemsBySearchCriteria(
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    const params: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        familyCode,
        structureType,
        variantCode
      },
      pnCode: undefined,
      attribute: undefined
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      params
    );
  }

  // Retrieve the instruction dropdownlist in the Asset dropdown list
  // public getAssetActionType(): Observable<LabelValue<string>[]> {
  //     return this.propertiesService.getValue("getAssetActionTypeMap");
  // }
}
