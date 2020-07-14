import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class RunwaySchedulingApi extends AbstractApi {
  private static readonly baseUrl: string = '/runway_scheduling';

  public readonly getMissionSchedulingFlightInfo: string = super.appendToBaseUrl(' /get_runway_scheduling_flight_info');

  public constructor() {
    super(RunwaySchedulingApi.baseUrl);
  }
}
