import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindBireModificationsByModificationPKAndDesignationInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-modifications-by-modification-pk-and-designation-input.interface';
import { BireFamilyDTO } from '../../../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationDTO } from '../../../../../shared/types/api-types/bire-modification-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ModificationsPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findAllBireFamilys(): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<void, SearchResultsDTO<BireFamilyDTO>>(this.productStructureManagementApi.findAllBireFamilys);
  }

  public findBireModificationsByModificationPKAndDesignation(
    bireModificationDTO?: BireModificationDTO,
    designation?: string
  ): Observable<SearchResultsDTO<BireModificationDTO>> {
    const findBireModificationsByModificationPKAndDesignationInput = {
      bireModificationDTO,
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM
    };

    return super.post<FindBireModificationsByModificationPKAndDesignationInput, SearchResultsDTO<BireModificationDTO>>(
      this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignation,
      findBireModificationsByModificationPKAndDesignationInput
    );
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }
}
