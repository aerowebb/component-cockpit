import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindAssetListConfigurationEventDTO } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-configuration-event-dto.interface';
import { FindAssetListInput } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-input.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetsSelectionDialogService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,

    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /***********************************
   * Asset(s) Selection popup services
   ***********************************/

  public getWarehouseDropdownList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtWarehouseApi.getWarehouses);
  }

  public getBidoFleetsBySearchCriteria(criteria: BidoFleetDTO): Observable<SearchResultsDTO<BidoFleetDTO>> {
    return super.post<BidoFleetDTO, SearchResultsDTO<BidoFleetDTO>>(
      this.fleetManagementApi.findBidoFleetsBySearchCriteria,
      criteria
    );
  }

  public getAssetTypeList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.initializeAssetTypeList);
  }

  public getFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.initializeFunctionList);
  }

  public getFamilyVariantList(assetType: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeFamilyVariantList,
      assetType
    );
  }

  public findAssetList(input: FindAssetListInput): Observable<SearchResultsDTO<FindAssetListConfigurationEventDTO>> {
    return super.post<FindAssetListInput, SearchResultsDTO<FindAssetListConfigurationEventDTO>>(
      this.fleetManagementApi.findAssetList,
      input
    );
  }

  public getOperationalStatusList(assetType: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      assetType
    );
  }
}
