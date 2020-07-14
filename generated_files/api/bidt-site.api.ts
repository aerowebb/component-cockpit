import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class BidtSiteApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_site';

  // public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  // public readonly findByMandantAndSiteCode: string = super.appendToBaseUrl('/find_by_mandant_and_site_code');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByCompanyId: string = super.appendToBaseUrl('/delete_by_company_id');

  // public readonly findByCompanyId: string = super.appendToBaseUrl('/find_by_company_id');

  public constructor() {
    super(BidtSiteApi.baseUrl);
  }
}
