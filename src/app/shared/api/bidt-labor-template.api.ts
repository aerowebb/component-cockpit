import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtLaborTemplateApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_labor_template';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly getWorkTemplateById: string = super.appendToBaseUrl('/get_work_template_by_id');

  public constructor() {
    super(BidtLaborTemplateApi.baseUrl);
  }
}