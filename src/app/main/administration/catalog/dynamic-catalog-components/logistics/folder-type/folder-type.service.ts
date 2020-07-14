import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtDfTypeOperationApi } from '../../../../../../shared/api/bidt-df-type-operation.api';
import { BidtDfTypeApi } from '../../../../../../shared/api/bidt-df-type.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { BidtDfTypeDTO } from '../../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeIdDTO } from '../../../../../../shared/types/api-types/bidt-df-type-id-dto.interface';
import { BidtDfTypeOperationDTO } from '../../../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class FolderTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtDfTypeOperationApi: BidtDfTypeOperationApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi
  ) {
    super(http, appConfigService);
  }

  public loadReceiptType(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findReceiptDfTypes);
  }

  public loadShipmentType(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes);
  }

  public findReceiptDfType(bidtDfTypeIdDTO: BidtDfTypeIdDTO): Observable<BidtDfTypeDTO> {
    return super.post<BidtDfTypeIdDTO, BidtDfTypeDTO>(this.bidtDfTypeApi.findReceiptDfTypeById, bidtDfTypeIdDTO);
  }

  public findShipmentDfType(bidtDfTypeIdDTO: BidtDfTypeIdDTO): Observable<BidtDfTypeDTO> {
    return super.post<BidtDfTypeIdDTO, BidtDfTypeDTO>(this.bidtDfTypeApi.findShipmentDfTypeById, bidtDfTypeIdDTO);
  }

  public removeFolderType(bidtDfTypeDTOId: BidtDfTypeIdDTO): Observable<boolean> {
    return super.post<BidtDfTypeIdDTO, boolean>(this.bidtDfTypeApi.delete, bidtDfTypeDTOId);
  }

  public addOrUpdateDfType(input: BidtDfTypeDTO): Observable<BidtDfTypeDTO> {
    return super.post<BidtDfTypeDTO, BidtDfTypeDTO>(this.bidtDfTypeApi.addOrUpdate, input);
  }

  public addOrUpdateOperations(input: BidtDfTypeOperationDTO[]): Observable<void> {
    return super.post<BidtDfTypeOperationDTO[], void>(this.bidtDfTypeOperationApi.addOrUpdateOperations, input);
  }
}
