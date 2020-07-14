import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStorageBinTypeApi } from '../../../../shared/api/bidt-storage-bin-type.api';
import { BidtStorageBinApi } from '../../../../shared/api/bidt-storage-bin.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SaveWarehouseInput } from '../../../../shared/types/api-types/save-warehouse-input.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class WorkshopFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtStorageBinApi: BidtStorageBinApi,
    private readonly bidtStorageBinTypeApi: BidtStorageBinTypeApi
  ) {
    super(http, appConfigService);
  }

  public getById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, id);
  }

  public findBidtWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.findBidtWarehouseById, id);
  }

  public deleteStorageBin(ids: Number[]): Observable<boolean> {
    return super.post<Number[], boolean>(this.bidtStorageBinApi.deleteStorageBin, ids);
  }

  public findByWarehouseId(id: number): Observable<SearchResultsDTO<BidtStorageBinDTO>> {
    return super.post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, id);
  }

  public fillListSite(companyId?: number | undefined): Observable<LabelValue<number>[]> {
    return super.post<number, LabelValue<number>[]>(this.bidtWarehouseApi.fillListSite, companyId);
  }

  public fillListCompanies(): Observable<LabelValue<number>[]> {
    return super.post<void, LabelValue<number>[]>(this.bidtWarehouseApi.fillListCompanies);
  }

  public fillListSupplyingWarehouses(siteId?: number | undefined): Observable<LabelValue<number>[]> {
    return super.post<number, LabelValue<number>[]>(this.bidtWarehouseApi.fillListSupplyingWarehouses, siteId);
  }

  public findWorkshopArea(): Observable<LabelValue<number>[]> {
    return super.post<void, LabelValue<number>[]>(this.bidtStorageBinTypeApi.findWorkshopAreaType);
  }

  public findStorageBinType(): Observable<LabelValue<number>[]> {
    return super.post<void, LabelValue<number>[]>(this.bidtStorageBinTypeApi.findStorageBinType);
  }

  public saveWarehouse(saveWarehouseInput: SaveWarehouseInput): Observable<number> {
    return super.post<SaveWarehouseInput, number>(this.bidtWarehouseApi.saveWarehouse, saveWarehouseInput);
  }
}
