import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtCategoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_category';

  // public readonly findCategoriesByTypeAndLevelAndLicenseId: string = super.appendToBaseUrl('/find_categories_by_type_and_level_and_license_id');

  // public readonly findCategoriesByTypeAndLevel: string = super.appendToBaseUrl('/find_categories_by_type_and_level');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly deleteByLicenseId: string = super.appendToBaseUrl('/delete_by_license_id');

  public readonly findByLicenseId: string = super.appendToBaseUrl('/find_by_license_id');

  public constructor() {
    super(BidtCategoryApi.baseUrl);
  }
}
