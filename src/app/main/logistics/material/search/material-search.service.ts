import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class MaterialSearchService extends AbstractAwHttpService {
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

  public removeBireData(input: BirePnDTOId[]): Observable<boolean> {
    return super.post<BirePnDTOId[], boolean>(this.productStructureManagementApi.removeBirePn, input);
  }
}
