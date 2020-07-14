import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { TaskManagementApi } from '../../api/task-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindBireItemsBySearchCriteriaInput } from '../../types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { PartsSearchInput } from '../../types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BireItemDTO } from '../../types/api-types/bire-item-dto.interface';
import { FamilyVariantDTO } from '../../types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';

@Injectable()
export class DialogSearchPartService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireItemsBySearchCriteria(bireItem: BireItemDTO): Observable<SearchResultsDTO<BireItemDTO>> {
    const params: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: bireItem,
      pnCode: undefined,
      attribute: undefined
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      params
    );
  }

  public findBirePartNumbersBySearchCriteria(
    partsSearchInputCriteria: PartsSearchInput): Observable<SearchResultsDTO<PartsAssociatedTableDTO>> {
    return super.post<PartsSearchInput, SearchResultsDTO<PartsAssociatedTableDTO>>(
      this.taskManagementApi.findBirePartNumbersBySearchCriteria,
      partsSearchInputCriteria
    );
  }

  public findFamilyVariant(input: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      input
    );
  }
}
