import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { StockConsultElementInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-consult-element-input-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { StockViewSiteNodeDTO } from '../../../../shared/types/api-types/stock-view-site-node-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class StockViewSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly propertiesService: PropertiesService,
    appConfigService: AppConfigService
  ) {
    super(http, appConfigService);
  }

  public loadStockView(input: StockConsultElementInput): Observable<StockViewSiteNodeDTO[]> {
    return super.post<StockConsultElementInput, StockViewSiteNodeDTO[]>(this.bidtStockMvtApi.loadStockView, input);
  }

  public findBidtWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.findBidtWarehouseById, id);
  }

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public getWarehousesBySiteId(siteId: number | undefined): Observable<BidtWarehouseDTO[]> {
    return super.post<number | undefined, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public getWarehouseCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }
}
