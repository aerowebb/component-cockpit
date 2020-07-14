import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidmWoAssignmentApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidm_wo_assignment';

  public readonly findBidmWoAssignmentsByWorkOrder: string = super.appendToBaseUrl(
    '/find_bidm_wo_assignments_by_work_order'
  );

  public readonly removeBidmWoAssignment: string = super.appendToBaseUrl('/remove_bidm_wo_assignment');

  public readonly createBidmWoAssignment: string = super.appendToBaseUrl('/create_bidm_wo_assignment');

  public readonly updateBidmWoAssignment: string = super.appendToBaseUrl('/update_bidm_wo_assignment');

  public constructor() {
    super(BidmWoAssignmentApi.baseUrl);
  }
}
