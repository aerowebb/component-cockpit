import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class WoAssetManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/wo_asset_management';

  public readonly getByWorkPackage: string = super.appendToBaseUrl('/get_by_work_package');

  public readonly getByWorkOrder: string = super.appendToBaseUrl('/get_by_workorder');

  public readonly addToWorkOrder: string = super.appendToBaseUrl('/add_to_workorder');

  public readonly updateDecision: string = super.appendToBaseUrl('/update_decision');

  public readonly updateSuperiorAsset: string = super.appendToBaseUrl('/update_superior_asset');

  public readonly updateItemOrFunctionCode: string = super.appendToBaseUrl('/update_item_or_function_code');

  public readonly updatePn: string = super.appendToBaseUrl('/update_pn');

  public readonly updateSelectedEquipment: string = super.appendToBaseUrl('/update_selected_equipment');

  public readonly updateSelectedWarehouse: string = super.appendToBaseUrl('/update_selected_warehouse');

  public readonly control: string = super.appendToBaseUrl('/control');

  public readonly executeDecisions: string = super.appendToBaseUrl('/execute_decisions');

  public readonly undoDecisions: string = super.appendToBaseUrl('/undo_decisions');

  public readonly save: string = super.appendToBaseUrl('/save');

  public constructor() {
    super(WoAssetManagementApi.baseUrl);
  }
}
