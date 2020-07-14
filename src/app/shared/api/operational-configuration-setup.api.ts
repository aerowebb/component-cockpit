import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class OperationalConfigurationSetupApi extends AbstractApi {
  private static readonly baseUrl: string = '/operational_configuration_setup';

  public readonly init: string = super.appendToBaseUrl('/init');

  public readonly count: string = super.appendToBaseUrl('/count');

  public readonly get: string = super.appendToBaseUrl('/get');

  public readonly updateWoAssetManagementPn: string = super.appendToBaseUrl('/update_wo_asset_management_pn');

  public readonly updateWoAssetManagementSelectedEquipment: string = super.appendToBaseUrl(
    '/update_wo_asset_management_selected_equipment'
  );

  public readonly executeWoAssetManagementDecision: string = super.appendToBaseUrl(
    '/execute_wo_asset_management_decision'
  );

  public readonly controlWOAssetManagement: string = super.appendToBaseUrl('/control_wo_asset_management');

  public constructor() {
    super(OperationalConfigurationSetupApi.baseUrl);
  }
}
