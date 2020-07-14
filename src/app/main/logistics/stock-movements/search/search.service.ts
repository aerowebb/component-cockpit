import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtStorageBinTypeApi } from '../../../../shared/api/bidt-storage-bin-type.api';
import { BidtStorageBinApi } from '../../../../shared/api/bidt-storage-bin.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindStockMvtFormByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvt-form-by-criteria-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { StockMvtFormOutput } from '../../../../shared/types/api-output-types/stock-movements/stock-mvt-form-output.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtStorageBinTypeDTO } from '../../../../shared/types/api-types/bidt-storage-bin-type-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtStorageBinApi: BidtStorageBinApi,
    private readonly bidtStorageBinTypeApi: BidtStorageBinTypeApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public getWarehousesBySiteId(siteId: number | undefined): Observable<BidtWarehouseDTO[]> {
    if (siteId) {
      return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
    } else {
      return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
    }
  }

  public findByWarehouseId(id: number): Observable<SearchResultsDTO<BidtStorageBinDTO>> {
    return super.post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, id);
  }

  public loadStorageBinTypeTableData(): Observable<SearchResultsDTO<BidtStorageBinTypeDTO>> {
    return super.post<void, SearchResultsDTO<BidtStorageBinTypeDTO>>(this.bidtStorageBinTypeApi.findAll);
  }

  public findByCriteria(criteria: FindStockMvtsByCriteriaInput): Observable<BidtStockMvtDTO[]> {
    return super.post<FindStockMvtsByCriteriaInput, BidtStockMvtDTO[]>(this.bidtStockMvtApi.findByCriteria, criteria);
  }

  public findBidtStockMvtForm(criteria: FindStockMvtFormByCriteriaInput): Observable<StockMvtFormOutput[]> {
    return super.post<FindStockMvtFormByCriteriaInput, StockMvtFormOutput[]>(
      this.bidtStockMvtApi.findBidtStockMvtForm,
      criteria
    );
  }

  public findPickingByCriteria(criteria: FindStockMvtsByCriteriaInput): Observable<BidtStockMvtDTO[]> {
    return super.post<FindStockMvtsByCriteriaInput, BidtStockMvtDTO[]>(
      this.bidtStockMvtApi.findPickingByCriteria,
      criteria
    );
  }

  public findPillingByCriteria(criteria: FindStockMvtsByCriteriaInput): Observable<BidtStockMvtDTO[]> {
    return super.post<FindStockMvtsByCriteriaInput, BidtStockMvtDTO[]>(
      this.bidtStockMvtApi.findPillingByCriteria,
      criteria
    );
  }

  public findBidtWarehouseById(warehouseId: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.findBidtWarehouseById, warehouseId);
  }

  public loadCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
  }
}
