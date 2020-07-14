import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../shared/api/airworthiness-management.api';
import { AssetManagementApi } from '../../../shared/api/asset-management.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindAllAssetForAirworthinessControlInput } from '../../../shared/types/api-input-types/airworthiness-management/find-all-asset-for-airworthiness-control-input.interface';
import { BidoEquipmentForAirworthinessControlCustomDTO } from '../../../shared/types/api-output-types/airworthiness-management/bido-equipment-for-airworthiness-control-custom-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class ToolMaintenanceSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Tools Search
   *************************************************************************/

  public findAllAssetForTools(
    input: FindAllAssetForAirworthinessControlInput
  ): Observable<SearchResultsDTO<BidoEquipmentForAirworthinessControlCustomDTO>> {
    return super.post<
      FindAllAssetForAirworthinessControlInput,
      SearchResultsDTO<BidoEquipmentForAirworthinessControlCustomDTO>
    >(this.airworthinessManagementApi.findAllAssetForTools, input);
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }

  public getFamilyVariant(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeFamilyVariantList,
      input
    );
  }

  public findAll(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }
}
