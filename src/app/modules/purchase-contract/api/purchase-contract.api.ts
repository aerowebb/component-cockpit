import { Injectable } from '@angular/core';

import { AbstractApi } from '../../../shared/api/abstract.api';

@Injectable()
export class PurchaseContractApi extends AbstractApi {
  private static readonly baseUrl: string = 'purchasecontract/bidt_purchase_contract';

  // public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly getContractSlices: string = super.appendToBaseUrl('/get_contract_slices');

  public readonly getContractPartners: string = super.appendToBaseUrl('/get_contract_partners');

  public readonly getContractDocuments: string = super.appendToBaseUrl('/get_documents');

  public constructor() {
    super(PurchaseContractApi.baseUrl);
  }
}
