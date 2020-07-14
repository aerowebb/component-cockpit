import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';

@Injectable()
export class DialogPartService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,

  ) {
    super(http, appConfigService);
  }

  public findMaterialBySearch(criteria: string): Observable<BirePnDTO[]> {
    return super.post<string, BirePnDTO[]>(
      this.productStructureManagementApi.pnCodeEnteredSearch, criteria
    );
  }

}
