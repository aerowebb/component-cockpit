import { Injectable } from '@angular/core';

import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtStockTypeApi } from '../../../../shared/api/bidt-stock-type.api';
import { BidtStorageBinApi } from '../../../../shared/api/bidt-storage-bin.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { StockConsultInput } from '../../../../shared/types/api-input-types/bidt-stock-consult/stock-consult-input.interface';
import { StockInformaionDto } from '../../../../shared/types/api-output-types/logistics-stock-consult/stock-information-dto-interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtStockTypeDTO } from '../../../../shared/types/api-types/bidt-stock-type-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class StockConsultSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStorageBinApi: BidtStorageBinApi,
    private readonly bidtStockTypeApi: BidtStockTypeApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  // Find all storage bin list
  public findAllStorageBinsList(): Observable<BidtStorageBinDTO[]> {
    return super.post<void, BidtStorageBinDTO[]>(this.bidtStorageBinApi.findAll);
  }

  // Find all stock type List
  public findAllStockTypeList(): Observable<BidtStockTypeDTO[]> {
    return super.post<void, BidtStockTypeDTO[]>(this.bidtStockTypeApi.findAll);
  }

  // find bin storage by warehouse Id
  public findBinStorageByWarehouseId(input: number): Observable<SearchResultsDTO<BidtStorageBinDTO>> {
    return super.post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, input);
  }

  // find all stock information
  public getStockInformationList(searchInput: StockConsultInput): Observable<StockInformaionDto[]> {
    return super.post<StockConsultInput, StockInformaionDto[]>(
      this.bidtStockMvtApi.getStockInformationList,
      searchInput
    );
  }

  // get Target Days
  public getIssuePeriodDropDown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtWarehouseApi.getTargetDays);
  }

  // get Euipment BY sn and pn
  public getEuipmentBYpnAndSN(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  // get Euipment BY sn and pn
  public getFirstEquipmentByPnAndSn(pn: string, sn: string): Observable<BidoEquipmentDTO> {
    const equipment: BidoEquipmentDTO = {
      pnCode: pn,
      sn
    };

    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      equipment
    );
  }
}
