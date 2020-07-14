import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindFamilyVariantInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireEvolutionVariantDTOId } from '../../../../../shared/types/api-types/bire-evolution-variant-dto-id.interface';
import { BirePartnerDTO } from '../../../../../shared/types/api-types/bire-partner-dto.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ApplicabilitiesPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public removeBireApplicability(applicability: BireEvolutionVariantDTOId): Observable<boolean> {
    // TODO
    return of(true);
  }

  public findFamilyVariantVersion(): Observable<SearchResultsDTO<BireVariantDTO>> {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: 'UC50',
      module: 'FAMILY'
    };

    return super.post<FindFamilyVariantInput, SearchResultsDTO<BireVariantDTO>>(
      this.productStructureManagementApi.findFamilyVariantVersion,
      familyVariantInput
    );
  }

  // Applicability Partners
  public findBirePartnersByVariant(bireVariantVersionDTOId: BireVariantVersionDTOId): Observable<BirePartnerDTO[]> {
    return super.post<BireVariantVersionDTOId, BirePartnerDTO[]>(
      this.productStructureManagementApi.findBirePartnersByVariant,
      bireVariantVersionDTOId
    );
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }
}
