import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStorageBinTypeApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_storage_bin_type';

  public readonly findAll: string = super.appendToBaseUrl('/find_all_bidt_storage_bin_type');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findAllBinType: string = super.appendToBaseUrl('/find_all_bin_type');

  public readonly findWarehouseAreaType: string = super.appendToBaseUrl('/find_warehouse_area_types');

  public readonly findWorkshopAreaType: string = super.appendToBaseUrl('/find_workshop_area_types');

  public readonly findStorageBinType: string = super.appendToBaseUrl('/find_storage_bin_types');

  public constructor() {
    super(BidtStorageBinTypeApi.baseUrl);
  }
}
