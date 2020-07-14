import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtWorkCenterApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_work_center';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  // public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findBySiteId: string = super.appendToBaseUrl('/find_by_site_id');

  // public readonly deleteBySiteId: string = super.appendToBaseUrl('/delete_by_site_id');

  public readonly findByMandantAndSiteCode: string = super.appendToBaseUrl('/find_by_mandant_and_site_code');

  public constructor() {
    super(BidtWorkCenterApi.baseUrl);
  }
}
