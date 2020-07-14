import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';
import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';

@Injectable()
export class DialogSearchMaterialService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }
  public findProductsBySearchCriteria(criteria: BirePnDTO): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<BirePnDTO, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findProductsBySearchCriteria,
      criteria
    );
  }
}
