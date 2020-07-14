import { Injectable } from '@angular/core';

import { AbstractApi } from '../../../shared/api/abstract.api';

@Injectable()
export class PurchaseContractItemApi extends AbstractApi {
  private static readonly baseUrl: string = 'purchasecontract/bidt_purchase_contract_item';

  public readonly getContractSliceItems: string = super.appendToBaseUrl('/get_contract_slice_items');

  public constructor() {
    super(PurchaseContractItemApi.baseUrl);
  }
}
