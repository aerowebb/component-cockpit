import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { FindAlternativePnsByPnCodeOutput } from '../../types/api-output-types/product-structure-management/find-alternative-pns-by-pn-code-output.interface';

@Injectable()
export class DialogSearchPnAlternativesService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAlternatives(pnCode: string): Observable<FindAlternativePnsByPnCodeOutput[]> {
    return super.post<string, FindAlternativePnsByPnCodeOutput[]>(
      this.productStructureManagementApi.findAlternativePnsByPnCode,
      pnCode
    );
  }
}
