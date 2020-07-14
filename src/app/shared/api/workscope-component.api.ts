import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class WorkscopeComponentApi extends AbstractApi {
  private static readonly baseUrl: string = '/workscope_component';

  public readonly getWorkscope: string = super.appendToBaseUrl('/get_workscope');

  public readonly getLoadWorkscope: string = super.appendToBaseUrl('/get_load_workscope');

  public readonly getWorkscopeTargetNumberAndVariantName: string = super.appendToBaseUrl(
    '/get_workscope_target_number_and_variant_name'
  );

  public readonly loadWorkscopeTemplate: string = super.appendToBaseUrl('/load_workscope_template');

  public readonly saveWorkscope: string = super.appendToBaseUrl('/save_workscope');

  public readonly saveCauseRemoval: string = super.appendToBaseUrl('/save_cause_removal');

  public constructor() {
    super(WorkscopeComponentApi.baseUrl);
  }
}
