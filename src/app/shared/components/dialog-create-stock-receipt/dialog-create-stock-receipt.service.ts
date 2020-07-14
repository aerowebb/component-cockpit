import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidtStockMvtApi } from '../../api/bidt-stock-mvt.api';
import { BidtStockTypeApi } from '../../api/bidt-stock-type.api';
import { BidtStorageBinApi } from '../../api/bidt-storage-bin.api';
import { BidtValuationGroupApi } from '../../api/bidt-valuation-group.api';
import { BidtWarehouseApi } from '../../api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { CreateStockMovementInput } from '../../types/api-input-types/bidt-stock-mvt/create-stock-movement-input.interface';
import { BidtStockTypeDTO } from '../../types/api-types/bidt-stock-type-dto.interface';
import { BidtStorageBinDTO } from '../../types/api-types/bidt-storage-bin-dto.interface';
import { BidtValuationGroupDTO } from '../../types/api-types/bidt-valuation-group-dto.interface';
import { BidtWarehouseDTO } from '../../types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';


@Injectable()
export class DialogCreateStockReceiptService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtStorageBinApi: BidtStorageBinApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtValuationGroupApi: BidtValuationGroupApi,
    private readonly bidtStockTypeApi: BidtStockTypeApi
  ) {
    super(http, appConfigService);
  }

  public findAllWarehouse(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  public findAllWarehouseByProduct(productPn: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findByProduct, productPn);
  }

  // Find all storage bin list
  public findAllStorageBinsList(): Observable<BidtStorageBinDTO[]> {
    return super.post<void, BidtStorageBinDTO[]>(this.bidtStorageBinApi.findAll);
  }

  // find bin storage by warehouse Id
  public findBinStorageByWarehouseId(input: number): Observable<BidtStorageBinDTO[]> {
    return super
      .post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, input)
      .pipe(map<SearchResultsDTO<BidtStorageBinDTO>, BidtStorageBinDTO[]>((resp) => resp.list));
  }

  public findAllValuation(): Observable<BidtValuationGroupDTO[]> {
    return super.post<void, BidtValuationGroupDTO[]>(this.bidtValuationGroupApi.findAll);
  }

  // Find all stock type List
  public findAllStockTypeList(): Observable<BidtStockTypeDTO[]> {
    return super.post<void, BidtStockTypeDTO[]>(this.bidtStockTypeApi.findAll);
  }

  public createStockReceipt(parameter: CreateStockMovementInput): Observable<void> {
    return super.post<CreateStockMovementInput, void>(this.bidtStockMvtApi.createStockReceipt, parameter);
  }

  public createStockIssue(parameter: CreateStockMovementInput): Observable<void> {
    return super.post<CreateStockMovementInput, void>(this.bidtStockMvtApi.createStockIssue, parameter);
  }

  public createStockTransfert(parameter: CreateStockMovementInput[]): Observable<void> {
    return super.post<CreateStockMovementInput[], void>(this.bidtStockMvtApi.createStockTransfert, parameter);
  }
}
