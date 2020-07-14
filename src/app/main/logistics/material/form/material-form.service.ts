import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStorageBinApi } from '../../../../shared/api/bidt-storage-bin.api';
import { BidtStorageConditionApi } from '../../../../shared/api/bidt-storage-condition.api';
import { BidtValuationGroupApi } from '../../../../shared/api/bidt-valuation-group.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { MaterialDataDTO } from '../../../../shared/types/api-output-types/logistics-material/material-data-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtStorageConditionDTO } from '../../../../shared/types/api-types/bidt-storage-condition-dto.interface';
import { BidtValuationGroupDTO } from '../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BirePnAttributeDTO } from '../../../../shared/types/api-types/bire-pn-attribute-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class MaterialFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly bidtStorageConditionApi: BidtStorageConditionApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtValuationGroupApi: BidtValuationGroupApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtStorageBinApi: BidtStorageBinApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireUnitMeasures(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }
  public findStorageCondition(): Observable<BidtStorageConditionDTO[]> {
    return super.post<void, BidtStorageConditionDTO[]>(this.bidtStorageConditionApi.findAll);
  }
  public getMaterialDetails(input: object): Observable<MaterialDataDTO> {
    return super.post<object, MaterialDataDTO>(this.taskManagementApi.fetchProductDetails, input);
  }
  public findAllSites(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findSiteByUseCaseCode);
  }
  public findWarehouseBySite(input: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, input);
  }
  public findAllValuation(): Observable<BidtValuationGroupDTO[]> {
    return super.post<void, BidtValuationGroupDTO[]>(this.bidtValuationGroupApi.findAll);
  }
  public findBidoCustomersBySearchCriteria(input): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<object, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      input
    );
  }
  public saveMaterial(input: MaterialDataDTO): Observable<Object> {
    return super.post<MaterialDataDTO, Object>(this.taskManagementApi.saveProductDetails, input);
  }
  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public findAllStockStatusSites(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
  }

  public findQuantityUnitMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findQuantityUnitMap);
  }

  public findByWarehouseId(id: number): Observable<SearchResultsDTO<BidtStorageBinDTO>> {
    return super.post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, id);
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBirePnAttributesByPn(pnCode: string): Observable<BirePnAttributeDTO[]> {
    const birePnId: BirePnDTOId = {
      pnCode
    };

    return super.post<BirePnDTOId, BirePnAttributeDTO[]>(
      this.productStructureManagementApi.findBirePnAttributesByPn,
      birePnId
    );
  }
}
