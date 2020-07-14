import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtProductCustomerApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_product_customer';

  public readonly findByCustomerAndProduct: string = super.appendToBaseUrl('/find_by_customer_and_product');

  public readonly findByProduct: string = super.appendToBaseUrl('/find_by_product');

  // public readonly deleteByProduct: string = super.appendToBaseUrl('/delete_by_product');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public constructor() {
    super(BidtProductCustomerApi.baseUrl);
  }
}
