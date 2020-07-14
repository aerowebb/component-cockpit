import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../../shared/api/bidt-company.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { WarehouseListDTO } from '../../../../shared/types/api-output-types/bidt-warehouse/warehouse-list-dto.interface';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class WorkshopSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  public findByCriteriaWorkshop(): Observable<WarehouseListDTO[]> {
    return super.post<void, WarehouseListDTO[]>(this.bidtWarehouseApi.findByCriteriaWorkshop);
  }

  public deleteWarehouses(wareHouseIds: number[]): Observable<boolean> {
    return super.post<number[], boolean>(this.bidtWarehouseApi.delete, wareHouseIds);
  }

  /**************************************************************************
   * Company api
   *************************************************************************/
  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  /**************************************************************************
   * Site api
   *************************************************************************/
  public findBidtSiteByCriteria(criteria: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.findAll, criteria);
  }
}
