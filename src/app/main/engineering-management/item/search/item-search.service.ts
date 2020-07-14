import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireItemCustomDTO } from '../../../../shared/types/api-output-types/engineering-data-exchange/bire-item-custom-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ItemSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public getItemFamily(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }

  public getFlocType(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFlocTypeMap');
  }
  public getItemType(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getItemTypeMap');
  }
  public findBireItemsBySearchCriteria(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemCustomDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemCustomDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      findBireItemsBySearchCriteriaInput
    );
  }
  public findBireVariantVersionsByFamilyFunctionItemAlternative(): Observable<
    FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]
  > {
    return super.post<void, FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionItemAlternative
    );
  }

  public removeBireItem(bireItemDTOId: BireItemDTOId[]): Observable<void> {
    return super.post<BireItemDTOId[], void>(this.productStructureManagementApi.removeBireItem, bireItemDTOId);
  }
}
