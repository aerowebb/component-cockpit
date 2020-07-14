import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';

@Injectable()
export class StockViewFormService extends AbstractAwHttpService {
  public constructor(
    appConfigService: AppConfigService,
    http: HttpClient,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public findBidtWarehouseById(warehouseId: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.findBidtWarehouseById, warehouseId);
  }

  public mmfCreateStockMvtLocationChange(stockMvtDtoList: BidtStockMvtDTO[]): Observable<BidtStockMvtDTO[]> {
    return super.post<BidtStockMvtDTO[], BidtStockMvtDTO[]>(
      this.bidtStockMvtApi.mmfCreateStockMvtLocationChange,
      stockMvtDtoList
    );
  }

  public findBidoEquipmentByPnAndBatchNumber(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber,
      input
    );
  }
}
