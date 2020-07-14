import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindBireModificationsByModificationPKAndDesignationInput } from '../../types/api-input-types/product-structure-management/find-bire-modifications-by-modification-pk-and-designation-input.interface';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogSearchModificationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireFamily(): Observable<LabelValue<string>[]> {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    return super.post<FindFamilyVariantInput, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireFamily,
      familyVariantInput
    );
  }

  public searchModificationList(
    bireModificationDTO: BireModificationDTO
  ): Observable<SearchResultsDTO<BireModificationDTO>> {
    let findBireModificationsByModificationPKAndDesignationInput = {};
    findBireModificationsByModificationPKAndDesignationInput = {
      bireModificationDTO,
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    return super.post<FindBireModificationsByModificationPKAndDesignationInput, SearchResultsDTO<BireModificationDTO>>(
      this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignation,
      findBireModificationsByModificationPKAndDesignationInput
    );
  }
}
