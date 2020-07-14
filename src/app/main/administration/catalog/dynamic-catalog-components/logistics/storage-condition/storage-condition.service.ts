import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStorageConditionApi } from '../../../../../../shared/api/bidt-storage-condition.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStorageConditionDTO } from '../../../../../../shared/types/api-types/bidt-storage-condition-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageConditionService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStorageConditionApi: BidtStorageConditionApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadStorageConditionTableData(): Observable<SearchResultsDTO<BidtStorageConditionDTO>> {
    return super.post<void, SearchResultsDTO<BidtStorageConditionDTO>>(this.bidtStorageConditionApi.findByCriteria);
  }

  public deleteStorageCondition(storageTypes: number[]) {
    return super.post<number[], void>(this.bidtStorageConditionApi.delete, storageTypes);
  }
  public saveStorageCondition(input: SaveCatalogInput) {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, input);
  }
}
