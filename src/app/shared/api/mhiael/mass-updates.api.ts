import { Injectable } from '@angular/core';

import { AbstractApi } from '../abstract.api';

@Injectable()
export class MassUpdatesApi extends AbstractApi {
  private static readonly baseUrl: string = '/mass_updates';

  public readonly updateInMassIDPSubObjectStatus: string = super.appendToBaseUrl(
    '/update_in_mass_IPD_sub_object_status'
  );

  public readonly updateInMassRMPObjectStatus: string = super.appendToBaseUrl('/update_in_mass_RMP_sub_object_status');

  public readonly updateSBADCsv: string = super.appendToBaseUrl('/sbad/csv');

  public readonly updateRMPCsv: string = super.appendToBaseUrl('/rmp/csv');

  public readonly updateIPCCsv: string = super.appendToBaseUrl('/ipc/csv');

  public constructor() {
    super(MassUpdatesApi.baseUrl);
  }
}
