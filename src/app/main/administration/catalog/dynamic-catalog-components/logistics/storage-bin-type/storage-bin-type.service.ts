import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStorageBinTypeApi } from '../../../../../../shared/api/bidt-storage-bin-type.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStorageBinTypeDTO } from '../../../../../../shared/types/api-types/bidt-storage-bin-type-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageBinTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStorageBinTypeApi: BidtStorageBinTypeApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadStorageBinTypeTableData(): Observable<SearchResultsDTO<BidtStorageBinTypeDTO>> {
    return super.post<void, SearchResultsDTO<BidtStorageBinTypeDTO>>(this.bidtStorageBinTypeApi.findAll);
  }

  public deleteStorageBinType(storageTypes: number[]) {
    return super.post<number[], void>(this.bidtStorageBinTypeApi.delete, storageTypes);
  }

  public saveStorageBinType(input: SaveCatalogInput) {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, input);
  }
}
