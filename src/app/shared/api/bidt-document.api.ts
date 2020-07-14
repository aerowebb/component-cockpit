import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDocumentApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_document';

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly findByPurchaseRequestId: string = super.appendToBaseUrl('/find_by_purchase_request_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findByEmployeeId: string = super.appendToBaseUrl('/find_by_employee_id');

  public readonly findByDeliveryFolderId: string = super.appendToBaseUrl('find_by_delivery_folder_id');

  public readonly deleteByid: string = super.appendToBaseUrl('delete_by_id');

  public readonly findByProcurementRequestId: string = super.appendToBaseUrl('find_by_procurement_request_id');

  // public readonly findBySalesRequestId: string = super.appendToBaseUrl('/find_by_sales_request_id');

  // public readonly deleteBySalesRequestId: string = super.appendToBaseUrl('/delete_by_sales_request_id');

  // public readonly deleteByEmployeeId: string = super.appendToBaseUrl('/delete_by_employee_id');

  // public readonly deleteByStockMvtId: string = super.appendToBaseUrl('/delete_by_stock_mvt_id');

  // public readonly deleteByPurchaseRequestId: string = super.appendToBaseUrl('/delete_by_purchase_request_id');

  // public readonly findByStockMvtId: string = super.appendToBaseUrl('/find_by_stock_mvt_id');

  public readonly findByTransferOrderId: string = super.appendToBaseUrl('find_by_transfer_order_id');

  public constructor() {
    super(BidtDocumentApi.baseUrl);
  }
}
