import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStockTypeApi } from '../../../../../../shared/api/bidt-stock-type.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStockTypeDTO } from '../../../../../../shared/types/api-types/bidt-stock-type-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class StockTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly bidtStockTypeApi: BidtStockTypeApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadStockTypeTableData(): Observable<SearchResultsDTO<BidtStockTypeDTO>> {
    return super.post<void, SearchResultsDTO<BidtStockTypeDTO>>(this.bidtStockTypeApi.findByCriteria);
  }

  public deleteStockType(stockIDs: number[]) {
    return super.post<number[], void>(this.bidtStockTypeApi.delete, stockIDs);
  }

  public saveStockType(input: SaveCatalogInput) {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, input);
  }

  public getOwnerNameMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStockOwnerMap');
  }

  public getStatusMapping(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStockStatusMap');
  }
  public findStockFormById(input: number): Observable<BidtStockTypeDTO> {
    return super.post<number, BidtStockTypeDTO>(this.bidtStockTypeApi.getById, input);
  }
}
