import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtStockMvtTypeApi } from '../../../../../../shared/api/bidt-stock-mvt-type.api';
import { BidtStorageBinTypeApi } from '../../../../../../shared/api/bidt-storage-bin-type.api';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BidtStockMvtTypeDTO } from '../../../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStockMvtTypeIdDTO } from '../../../../../../shared/types/api-types/bidt-stock-mvt-type-id-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
@Injectable({
  providedIn: 'root'
})
export class StockMovementTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtStockMvtTypeApi: BidtStockMvtTypeApi,
    private readonly bidtStorageBinTypeApi: BidtStorageBinTypeApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public loadStockMovementType(): Observable<BidtStockMvtTypeDTO[]> {
    return super.post<void, BidtStockMvtTypeDTO[]>(this.bidtStockMvtTypeApi.findAll);
  }

  public removeStockMovementType(bidtStockMvtTypeDTOId: BidtStockMvtTypeIdDTO): Observable<boolean> {
    return super.post<BidtStockMvtTypeIdDTO, boolean>(this.bidtStockMvtTypeApi.delete, bidtStockMvtTypeDTOId);
  }

  public findStockMvtTypeById(bidtStockMvtTypeIdDTO: number): Observable<BidtStockMvtTypeDTO> {
    return super.post<number, BidtStockMvtTypeDTO>(
      this.bidtStockMvtTypeApi.findStockMvtTypeById,
      bidtStockMvtTypeIdDTO
    );
  }

  public addOrUpdate(addOrUpdateStockMvtTypeInput: BidtStockMvtTypeDTO): Observable<BidtStockMvtTypeDTO> {
    return super.post<BidtStockMvtTypeDTO, BidtStockMvtTypeDTO>(
      this.bidtStockMvtTypeApi.addOrUpdate,
      addOrUpdateStockMvtTypeInput
    );
  }

  public findAllBinType(): Observable<LabelValue<number>[]> {
    return super.post<void, LabelValue<number>[]>(this.bidtStorageBinTypeApi.findAllBinType);
  }

  /*************************************************************************
   * PropertiesService
   *************************************************************************/

  public getMvtStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP);
  }

  public getMovementCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.MOVEMENT_CATEGORY_MAP);
  }
}
