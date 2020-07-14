import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtCompHolidayCompanyApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_comp_holiday_company';

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByCompanyId: string = super.appendToBaseUrl('/delete_by_company_id');

  // public readonly findByCompanyHolidayId: string = super.appendToBaseUrl('/find_by_company_holiday_id');

  // public readonly deleteByCompanyHolidayId: string = super.appendToBaseUrl('/delete_by_company_holiday_id');

  public readonly findByCompanyId: string = super.appendToBaseUrl('/find_by_company_id');

  public constructor() {
    super(BidtCompHolidayCompanyApi.baseUrl);
  }
}
