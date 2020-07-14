import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { GetFamilyVariantOutputDTO } from '../../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';

@Injectable()
export class DataEnrichmentFormStandardService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public getBireFamilyVariant(familyVariantInput: FindFamilyVariantInput): Observable<GetFamilyVariantOutputDTO[]> {
    return super.post<FindFamilyVariantInput, GetFamilyVariantOutputDTO[]>(
      this.productStructureManagementApi.findBireFamilyVariant,
      familyVariantInput
    );
  }
}
