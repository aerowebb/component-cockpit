import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { FamilyVariantDTO } from '../../types/api-types/family-variant-dto.interface';
import { FindFamilyVariantInput } from '../../types/api-types/find-family-variant-input.interface';

@Injectable()
export class DialogSearchPnService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public isPartWithContainer(input: string): Observable<boolean> {
    return super.post<string, boolean>(this.productStructureManagementApi.isPartWithContainer, input);
  }

  public getFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }

  public findBirePnsBySearchCriteria(
    criteria: BirePnDTO,
    familyCode: string,
    structureType: string,
    variantCode: string,
    toolSearch: boolean
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    const params: FindBirePnsBySearchCriteriaPSMInput = {
      birePnDTOCriteria: criteria,
      familyCode,
      structureType,
      variantCode,
      toolSearch
    };

    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      params
    );
  }
}
