import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { FindFamilyVariantInput } from '../../../../shared/types/api-types/find-family-variant-input.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ApplicableConfigurationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findFamilyVariantVersion(): Observable<SearchResultsDTO<BireVariantDTO>> {
    const criteria = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      familyCode: '',
      familyName: '',
      structureType: ''
    };

    return super.post<FindFamilyVariantInput, SearchResultsDTO<BireVariantDTO>>(
      this.productStructureManagementApi.findFamilyVariantVersion,
      criteria
    );
  }

  public removeBireVariantVersion(bireVariantVersionDTOId: BireVariantVersionDTOId[]): Observable<boolean> {
    return super.post<BireVariantVersionDTOId[], boolean>(
      this.productStructureManagementApi.removeBireVariantVersion,
      bireVariantVersionDTOId
    );
  }

  // tslint:disable-next-line:no-any
  public exportLimitsData(bireVariantVersionDto: BireVariantVersionDTO): Observable<any[]> {
    // tslint:disable-next-line:no-any
    return super.post<BireVariantVersionDTO, any[]>(
      this.productStructureManagementApi.exportLimitsData,
      bireVariantVersionDto
    );
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }
}
