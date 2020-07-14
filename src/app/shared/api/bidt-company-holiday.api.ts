import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtCompanyHolidayApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_company_holiday';

  public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public constructor() {
    super(BidtCompanyHolidayApi.baseUrl);
  }
}
