import { Injectable } from '@angular/core';

import { AbstractApi } from '../../api/abstract.api';

@Injectable()
export class BidtScenarioApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_scenario';

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  // public readonly findByFuncObjectIdAndInitialStatusKeyAndProfileList: string = super.appendToBaseUrl('/find_by_func_object_id_and_initial_status_key_and_profile_list');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly findByFuncObjectId: string = super.appendToBaseUrl('/find_by_func_object_id');

  // public readonly deleteByFuncObjectId: string = super.appendToBaseUrl('/delete_by_func_object_id');

  public readonly searchScenarioByCriteria: string = super.appendToBaseUrl('/search_scenario_by_criteria');

  public readonly getControlMgmtTableData: string = super.appendToBaseUrl('/get_control_mgmt_table_data');

  public readonly saveWorkflowManagement: string = super.appendToBaseUrl('/save_workflow_management');

  public readonly getTodoList: string = super.appendToBaseUrl('/todo_list');

  public constructor() {
    super(BidtScenarioApi.baseUrl);
  }
}
