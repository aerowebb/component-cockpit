import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtValuationGroupApi } from '../../../../shared/api/bidt-valuation-group.api';
import { LogisticsManagementApi } from '../../../../shared/api/logistics-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { InventoryByWarehouseStockListInput } from '../../../../shared/types/api-input-types/inventory-by-warehouse/inventory-by-warehouse-stock-list-input-dto.interface';
import { SaveInventoryByWarehouseInput } from '../../../../shared/types/api-input-types/inventory-by-warehouse/save-inventory-by-warehouse-input.interface';
import { InventoryByWarehouseStockListOutputDTO } from '../../../../shared/types/api-output-types/inventory-by-warehouse/inventory-by-warehouse-stock-list-output-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BsdeStoreDTO } from '../../../../shared/types/api-types/bsde-store-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class InventoryByWareHouseFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly logisticsManagementApi: LogisticsManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly bidtValuationGroupApi: BidtValuationGroupApi,
    private readonly taskManagementApi: TaskManagementApi,

  ) {
    super(http, appConfigService);
  }


  public findWareHousebyStore(criteria: string): Observable<BsdeStoreDTO> {
    return super.post<string, BsdeStoreDTO>(
      this.logisticsManagementApi.findBsdeStore, criteria
    );
  }

  public getMaterialList(criteria: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.logisticsManagementApi.findBsdeStorePnsByStoreCode, criteria
    );
  }

  public findMaterialBySearch(criteria: string): Observable<BirePnDTO[]> {
    return super.post<string, BirePnDTO[]>(
      this.productStructureManagementApi.pnCodeEnteredSearch, criteria
    );
  }

  public FindStockList(criteria: InventoryByWarehouseStockListInput):
  Observable<InventoryByWarehouseStockListOutputDTO[]> {
    return super.post<InventoryByWarehouseStockListInput, InventoryByWarehouseStockListOutputDTO[]>(
      this.logisticsManagementApi.findBsdeStorePnsByPnAndStoreCodes, criteria
    );
  }

  public saveWareHouseForm(criteria: SaveInventoryByWarehouseInput):
  Observable<void> {
    return super.post<SaveInventoryByWarehouseInput, void>(
      this.logisticsManagementApi.saveInventoryByWarehouse, criteria
    );
  }

  public getStockValuationList(): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(
      this.bidtValuationGroupApi.dropDownStockValuationType
    );
  }
  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }


}
