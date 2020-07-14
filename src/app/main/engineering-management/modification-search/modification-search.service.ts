import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindBireModificationsByModificationPKAndDesignationInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-modifications-by-modification-pk-and-designation-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class ModificationSearchService extends AbstractAwHttpService {
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

  public removeBireModification(bireModificationDTOId: BireModificationDTOId[]): Observable<boolean> {
    return super.post<BireModificationDTOId[], boolean>(
      this.productStructureManagementApi.removeBireModification,
      bireModificationDTOId
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
