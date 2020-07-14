import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class TaskHistoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/task_history';

  public readonly findHBireOperationAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_operation_attributes_by_atribute_id'
  );

  public readonly findHBireTaskAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_task_attributes_by_atribute_id'
  );

  public readonly removeHBireOperationAttribute: string = super.appendToBaseUrl('/remove_h_bire_operation_attribute');

  public readonly removeHBireTaskAttribute: string = super.appendToBaseUrl('/remove_h_bire_task_attribute');

  public readonly findBireTaskHistoric: string = super.appendToBaseUrl('/find_bire_task_historic');

  public readonly removeBireTaskHistory: string = super.appendToBaseUrl('/remove_bire_task_history');

  public constructor() {
    super(TaskHistoryApi.baseUrl);
  }
}
