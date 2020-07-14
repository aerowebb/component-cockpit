import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtSalesRequestApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_sales_request';

  // public readonly findBySRCode: string = super.appendToBaseUrl('/find_by_sr_code');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findBidtSalesRequestsByCriteriaForOVS: string = super.appendToBaseUrl(
    '/find_bidt_sales_request_by_criteria_for_ovs'
  );

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly saveSalesDocument: string = super.appendToBaseUrl('/save_sales_document');

  public constructor() {
    super(BidtSalesRequestApi.baseUrl);
  }
}
