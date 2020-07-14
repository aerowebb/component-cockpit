import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchProductService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagement: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findProducts(searchCriteria: BirePnDTO): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<BirePnDTO, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagement.findProductsByPnSearchCriteria,
      searchCriteria
    );
  }
}
