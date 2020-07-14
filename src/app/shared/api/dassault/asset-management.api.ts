import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class DavAssetManagementdApi extends AbstractApi {
  private static readonly baseUrl: string = '/asset_management';

  public readonly findBidoEquipmentsBySearchCriteria: string = super.appendToBaseUrl('/search_asset_by_criteria');

  public constructor() {
    super(DavAssetManagementdApi.baseUrl);
  }
}
