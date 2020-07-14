import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtPurchaseRequestApi } from '../../../../shared/api/bidt-purchase-request.api';
import { BidtSalesRequestApi } from '../../../../shared/api/bidt-sales-request.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveSalesDocumentDTO } from '../../../../shared/types/api-input-types/bidt-sales-request/save-sales-document-dto.interface';
import { SalesDocumentListOutput } from '../../../../shared/types/api-output-types/bidt-sales-request/sales-document-list-output.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SalesDocumentFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSalesRequestApi: BidtSalesRequestApi,
    private readonly productStructureManagement: ProductStructureManagementApi,
    private readonly bidtPurchaseRequest: BidtPurchaseRequestApi
  ) {
    super(http, appConfigService);
  }

  public getById(id: number): Observable<SalesDocumentListOutput> {
    return super.post<number, SalesDocumentListOutput>(this.bidtSalesRequestApi.getById, id);
  }

  public displayWarehouse(pnCode: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.bidtPurchaseRequest.displayWarehouse, pnCode);
  }

  public findBirePn(id: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagement.findBirePn, id);
  }

  public saveSalesDocument(input: SaveSalesDocumentDTO): Observable<number> {
    return super.post<SaveSalesDocumentDTO, number>(this.bidtSalesRequestApi.saveSalesDocument, input);
  }
}
