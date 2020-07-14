import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { FindBireRatingsBySearchCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-ratings-by-search-criteria-input.interface';
import { BireRatingDTO } from '../../../shared/types/api-types/bire-rating-dto.interface';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchRatingService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagement: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireRatingsBySearchCriteria(
    bireRatingCriteria: BireRatingDTO,
    variantCodeCriteria?: string
  ): Observable<BireRatingDTO[]> {
    const searchCriteria: FindBireRatingsBySearchCriteriaInput = {
      bireRatingDTOCriteria: bireRatingCriteria,
      variantCode: variantCodeCriteria,
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_BOM
    };

    return super.post<FindBireRatingsBySearchCriteriaInput, BireRatingDTO[]>(
      this.productStructureManagement.findAllBireRatingByCriteria,
      searchCriteria
    );
  }
}
