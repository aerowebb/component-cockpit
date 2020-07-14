import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { ModelOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/model-ovs-output-dto.interface';
import { BireModelDTO } from '../../../shared/types/api-types/bire-model-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchModelService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagement: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findModel(criteria: BireModelDTO): Observable<SearchResultsDTO<ModelOVSOutputDTO>> {
    return super.post<BireModelDTO, SearchResultsDTO<ModelOVSOutputDTO>>(
      this.productStructureManagement.findBireModelsBySearchCriteriaForOVS,
      criteria
    );
  }
}
