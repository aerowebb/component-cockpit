import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { BirePnDTOId } from '../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-types/find-family-variant-input.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class PartNumberSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBirePnsBySearchCriteria(
    criteria: BirePnDTO,
    familyCode: string,
    structureType: string,
    variantCode: string,
    chapter: string | undefined,
    section: string | undefined,
    subject: string | undefined,
    sheet: string | undefined,
    mark: string | undefined,
    pnType: string,
    itemFamilyCode: string | undefined,
    isSerialized: boolean | false,
    attributesMap: Object
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    const params: FindBirePnsBySearchCriteriaPSMInput = {
      birePnDTOCriteria: criteria,
      familyCode,
      structureType,
      variantCode,
      itemFamilyCode,
      chapter,
      section,
      subject,
      sheet,
      mark,
      isSerialized,
      attributesMap,
      pnType
    };

    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      params
    );
  }

  public removeBirePn(pnId: BirePnDTOId[]): Observable<boolean> {
    return super.post<BirePnDTOId[], boolean>(this.productStructureManagementApi.removeBirePn, pnId);
  }

  public getFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<FamilyVariantDTO[]> {
    return super.post<FindFamilyVariantInput, FamilyVariantDTO[]>(
      this.productStructureManagementApi.findFamilyVariant,
      familyVariantInput
    );
  }
}
