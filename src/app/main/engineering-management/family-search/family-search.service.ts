import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BireFamilyDTOId } from '../../../shared/types/api-types/bire-family-dto-id.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class FamilySearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public removeBireFamilys(selectedBireFamilys: BireFamilyDTO[]): Observable<void> {
    const selectedBireFamilysId: BireFamilyDTOId[] = [];
    selectedBireFamilys.forEach((element) => {
      if (!!element.familyCode && !!element.structureType) {
        const bireFamilyDTOId: BireFamilyDTOId = {
          familyCode: element.familyCode,
          structureType: element.structureType
        };
        selectedBireFamilysId.push(bireFamilyDTOId);
      }
    });

    return super.post<BireFamilyDTOId[], void>(
      this.productStructureManagementApi.removeBireFamily,
      selectedBireFamilysId
    );
  }

  public findAllBireFamilys(): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<void, SearchResultsDTO<BireFamilyDTO>>(this.productStructureManagementApi.findAllBireFamilys);
  }

  public getSBObjectStatusValue(key: string): Observable<string> {
    return super.post<string, string>(this.productStructureManagementApi.getSBObjectStatusValue, key);
  }
}
