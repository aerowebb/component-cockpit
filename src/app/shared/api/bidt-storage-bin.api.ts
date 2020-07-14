import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStorageBinApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_storage_bin';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly findByWarehouseId: string = super.appendToBaseUrl('/find_by_warehouse_id');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByWarehouseId: string = super.appendToBaseUrl('/delete_by_warehouse_id');

  // public readonly findByStorageBinTypeId: string = super.appendToBaseUrl('/find_by_storage_bin_type_id');

  // public readonly deleteByStorageBinTypeId: string = super.appendToBaseUrl('/delete_by_storage_bin_type_id');

  public readonly deleteStorageBin: string = super.appendToBaseUrl('/delete_storage_bin');

  public readonly findAllByWarehouseId: string = super.appendToBaseUrl('/find_all_by_warehouse_id');

  public constructor() {
    super(BidtStorageBinApi.baseUrl);
  }
}
