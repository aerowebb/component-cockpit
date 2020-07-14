import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class BonitaApi extends AbstractApi {
  private static readonly baseUrl: string = 'brasidas/dea_dia';

  public readonly submitDeaDiaToDmae: string = super.appendToBaseUrl('submit_dea_dia_to_dmae');

  public readonly submitUpdatedDeaDiaToDmae: string = super.appendToBaseUrl('submit_updated_dea_dia_to_dmae');

  public readonly submitRTAToCentral: string = super.appendToBaseUrl('submit_rta_to_central');

  public constructor() {
    super(BonitaApi.baseUrl);
  }
}
