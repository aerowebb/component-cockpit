import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidoEquipmentLfApi extends AbstractApi {
  private static readonly baseUrl: string = '/bido_equipment_lf';

  public constructor() {
    super(BidoEquipmentLfApi.baseUrl);
  }
}
