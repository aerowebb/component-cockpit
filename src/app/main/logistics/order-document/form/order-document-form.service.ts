import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtProductCustomerApi } from '../../../../shared/api/bidt-product-customer.api';
import { BidtPurchaseRequestApi } from '../../../../shared/api/bidt-purchase-request.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveOrderDocumentDTO } from '../../../../shared/types/api-input-types/bidt-purchase-request/save-order-document-dto.interface';
import { FindByCustomerAndProductInput } from '../../../../shared/types/api-input-types/product-customer/find-by-customer-and-product-input.interface';
import { OrderDocumentByIdOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/order-document-by-id-output.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtProductCustomerDTO } from '../../../../shared/types/api-types/bidt-product-customer-dto.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class OrderDocumentFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtProductCustomerApi: BidtProductCustomerApi,
    private readonly bidtPurchaseRequest: BidtPurchaseRequestApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly productStructureManagement: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findByCustomerAndProduct(input: FindByCustomerAndProductInput): Observable<BidtProductCustomerDTO[]> {
    return super.post<FindByCustomerAndProductInput, BidtProductCustomerDTO[]>(
      this.bidtProductCustomerApi.findByCustomerAndProduct,
      input
    );
  }

  public getById(id: number): Observable<OrderDocumentByIdOutput> {
    return super.post<number, OrderDocumentByIdOutput>(this.bidtPurchaseRequest.getById, id);
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public displayWarehouse(pnCode: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.bidtPurchaseRequest.displayWarehouse, pnCode);
  }

  public saveOrderDocument(input: SaveOrderDocumentDTO): Observable<BidtPurchaseRequestDTO> {
    return super.post<SaveOrderDocumentDTO, BidtPurchaseRequestDTO>(this.bidtPurchaseRequest.saveOrderDocument, input);
  }

  public findBirePn(id: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagement.findBirePn, id);
  }

  public createConsecutiveDocument(input: SaveOrderDocumentDTO): Observable<number> {
    return super.post<SaveOrderDocumentDTO, number>(this.bidtPurchaseRequest.createAfterwardDocument, input);
  }

  // get Euipment BY sn and pn
  public getEuipmentBYpnAndSN(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }
}
