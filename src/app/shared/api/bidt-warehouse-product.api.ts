import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtWarehouseProductApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_warehouse_product';

  public readonly findByWarehouseIdAndProductCode: string = super.appendToBaseUrl(
    '/find_by_warehouse_id_and_product_code'
  );

  // public readonly deleteByProductCode: string = super.appendToBaseUrl('/delete_by_product_code');

  // public readonly findByProductCode: string = super.appendToBaseUrl('/find_by_product_code');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly findByWarehouseId: string = super.appendToBaseUrl('/find_by_warehouse_id');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByWarehouseId: string = super.appendToBaseUrl('/delete_by_warehouse_id');

  public constructor() {
    super(BidtWarehouseProductApi.baseUrl);
  }
}
