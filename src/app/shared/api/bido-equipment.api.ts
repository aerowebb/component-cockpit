import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidoEquipmentApi extends AbstractApi {
  private static readonly baseUrl: string = '/bido_equipment';

  public readonly findSubBatches: string = super.appendToBaseUrl('/find_sub_batches');

  public readonly findPackagingBatchesByCriteria: string = super.appendToBaseUrl('/find_packaging_batches_by_criteria');

  public readonly addOrUpdateBatch: string = super.appendToBaseUrl('/add_or_update_batch');

  public readonly findManufacturingBatchesByCriteria: string = super.appendToBaseUrl(
    '/find_manufacturing_batches_by_criteria'
  );

  public readonly getStockInformationByAsset: string = super.appendToBaseUrl('/get_stock_information_by_asset');

  public readonly getTopManufacturingBatch: string = super.appendToBaseUrl('/get_top_manufacturing_batch');

  public constructor() {
    super(BidoEquipmentApi.baseUrl);
  }
}
