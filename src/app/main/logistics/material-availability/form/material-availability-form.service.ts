import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseProductApi } from '../../../../shared/api/bidt-warehouse-product.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { GetPotentialListInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-potential-list-input.interface';
import { GetQuantityInStockBySiteInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-quantity-in-stock-by-site-input.interface';
import { GetQuantityInStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-quantity-in-stock-input.interface';
import { GetStockInformationListByCriteriaInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-stock-information-list-by-criteria-input.interface';
import { FindProductByWarehouseIdAndProductCodeInput } from '../../../../shared/types/api-input-types/logistics-material/find-product-by-warehouse-and-product-input.interface';
import { GetPotentialListOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-potential-list-output.interface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { BidtWarehouseProductDTO } from '../../../../shared/types/api-output-types/bidt-warehouse/bidt-warehouse-product-dto.interface';
import { MaterialDataDTO } from '../../../../shared/types/api-output-types/logistics-material/material-data-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';

@Injectable()
export class MaterialAvailabilityFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtWarehouseProductApi: BidtWarehouseProductApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly taskManagementApi: TaskManagementApi
  ) {
    super(http, appConfigService);
  }

  /*************************
   * Aircraft maintenance api
   *************************/

  public findBidmWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<BidmWorkOrderDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDTO>(
      this.aircraftMaintenanceApi.findBidmWorkOrder,
      bidmWorkOrderDTOId
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public findBidmProjectById(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  /*************************
   * Bidt site api
   *************************/
  public getSiteById(input: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, input);
  }

  public findAllSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.getSites);
  }

  /*************************
   * Bidt stock mvt api
   *************************/
  public addOrUpdateStockMvt(input: BidtStockMvtDTO): Observable<BidtStockMvtDTO> {
    return super.post<BidtStockMvtDTO, BidtStockMvtDTO>(this.bidtStockMvtApi.addOrUpdateStockMvt, input);
  }

  public findStockInformationListByCriteria(
    input: GetStockInformationListByCriteriaInput
  ): Observable<StockInformationDTO[]> {
    return super.post<GetStockInformationListByCriteriaInput, StockInformationDTO[]>(
      this.bidtStockMvtApi.getStockInformationListByCriteria,
      input
    );
  }

  public findPotentialListByStockMvt(input: GetPotentialListInput): Observable<GetPotentialListOutput[]> {
    return super.post<GetPotentialListInput, GetPotentialListOutput[]>(this.bidtStockMvtApi.getPotentialList, input);
  }

  public getStockMvtById(getById: number): Observable<BidtStockMvtDTO> {
    return super.post<number, BidtStockMvtDTO>(this.bidtStockMvtApi.getById, getById);
  }

  public getQuantityInStock(getQuantityInStock: GetQuantityInStockInput): Observable<number> {
    return super.post<GetQuantityInStockInput, number>(this.bidtStockMvtApi.getQuantityInStock, getQuantityInStock);
  }

  public getQuantityInStockBySite(
    getQuantityInAllStock: GetQuantityInStockBySiteInput
  ): Observable<GetQuantityInStockBySiteOutput> {
    return super.post<GetQuantityInStockBySiteInput, GetQuantityInStockBySiteOutput>(
      this.bidtStockMvtApi.getQuantityInStockBySite,
      getQuantityInAllStock
    );
  }

  /*************************
   * Bidt warehouse api
   *************************/

  public findWarehouseByProduct(productPn: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findByProduct, productPn);
  }

  /*************************
   * Bidt warehouse product api
   *************************/

  public findByWarehouseIdAndProductCode(
    input: FindProductByWarehouseIdAndProductCodeInput
  ): Observable<BidtWarehouseProductDTO> {
    return super.post<FindProductByWarehouseIdAndProductCodeInput, BidtWarehouseProductDTO>(
      this.bidtWarehouseProductApi.findByWarehouseIdAndProductCode,
      input
    );
  }

  /*************************
   * Fleet Management api
   *************************/
  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  /*************************
   * Task Management api
   *************************/
  public getMaterialDetails(input: object): Observable<MaterialDataDTO> {
    return super.post<object, MaterialDataDTO>(this.taskManagementApi.fetchProductDetails, input);
  }
}
