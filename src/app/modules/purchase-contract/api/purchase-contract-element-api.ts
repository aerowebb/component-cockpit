import { Injectable } from '@angular/core';

import { AbstractApi } from '../../../shared/api/abstract.api';

@Injectable()
export class PurchaseContractElementApi extends AbstractApi {
  private static readonly baseUrl: string = 'purchasecontract/bidt_purchase_contract_element';

  public readonly getElementsByItemId: string = super.appendToBaseUrl('/find_elements_by_item_id');

  public constructor() {
    super(PurchaseContractElementApi.baseUrl);
  }
}
