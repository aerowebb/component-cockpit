import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { FindFamilyVariantInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ConversionMatrixApplicabilitiesPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findFamilyVariantVersion(): Observable<SearchResultsDTO<BireVariantDTO>> {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    return super.post<FindFamilyVariantInput, SearchResultsDTO<BireVariantDTO>>(
      this.productStructureManagementApi.findFamilyVariantVersion,
      familyVariantInput
    );
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getAllEquipmentFunctionList);
  }
}
