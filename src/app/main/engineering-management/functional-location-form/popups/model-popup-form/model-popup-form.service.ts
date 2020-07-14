import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';

@Injectable()
export class ModelPopupFormService extends AbstractAwHttpService {
  public displayDialog: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public displayPopup(display: boolean) {
    this.displayDialog = display;
  }

  public findBireVariantVersionsByFamilyFunctionAlternative(): Observable<
    FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]
  > {
    return super.post<void, FindBireVariantVersionsByFamilyFunctionAlternativeDTO[]>(
      this.productStructureManagementApi.findBireVariantVersionsByFamilyFunctionAlternative
    );
  }
}
