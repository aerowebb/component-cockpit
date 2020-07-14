import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDfTypeApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_df_type';

  public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly findReceiptDfTypes: string = super.appendToBaseUrl('/find_receipt_df_types');

  public readonly findShipmentDfTypes: string = super.appendToBaseUrl('/find_shipment_df_types');

  public readonly findReceiptDfTypeById: string = super.appendToBaseUrl('/find_receipt_df_type_by_id');

  public readonly findShipmentDfTypeById: string = super.appendToBaseUrl('/find_shipment_df_type_by_id');

  public constructor() {
    super(BidtDfTypeApi.baseUrl);
  }
}
