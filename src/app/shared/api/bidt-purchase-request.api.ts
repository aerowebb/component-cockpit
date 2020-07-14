import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtPurchaseRequestApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_purchase_request';

  // public readonly remove: string = super.appendToBaseUrl('/remove');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly getCreateOrderNameFormStockAlert: string = super.appendToBaseUrl(
    '/get_create_order_name_from_stock_alert'
  );

  // public readonly findByWorkOrder: string = super.appendToBaseUrl('/find_by_work_order');

  // public readonly findByOperation: string = super.appendToBaseUrl('/find_by_operation');

  // public readonly findByProject: string = super.appendToBaseUrl('/find_by_project');

  // public readonly findByPRCode: string = super.appendToBaseUrl('/find_by_pr_code');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly findByPurchaseRequestId: string = super.appendToBaseUrl('/find_by_purchase_request_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByPurchaseRequestId: string = super.appendToBaseUrl('/delete_by_purchase_request_id');

  public readonly findBidtPurchaseRequestsByCriteriaForOVS: string = super.appendToBaseUrl(
    '/find_bidt_purchase_request_by_criteria_for_ovs'
  );

  public readonly remove: string = super.appendToBaseUrl('/remove');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly displayWarehouse: string = super.appendToBaseUrl('/display_warehouse');

  public readonly saveOrderDocument: string = super.appendToBaseUrl('/save_order_document');

  public readonly createAfterwardDocument: string = super.appendToBaseUrl('/create_afterward_document');

  public readonly fetchSupplierDropDownData: string = super.appendToBaseUrl('/fetch_supplier_drop_down_data');

  public constructor() {
    super(BidtPurchaseRequestApi.baseUrl);
  }
}
