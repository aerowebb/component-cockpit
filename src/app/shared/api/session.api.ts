import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class SessionApi extends AbstractApi {
  private static readonly baseUrl: string = '/session';

  public readonly menu: string = super.appendToBaseUrl('/menu');
  public readonly dashboards: string = super.appendToBaseUrl('/dashboards');
  public readonly accessibleFunctions: string = super.appendToBaseUrl('accessible_functions');
  public readonly userWorflow: string = super.appendToBaseUrl('user_workflow');

  public constructor() {
    super(SessionApi.baseUrl);
  }
}
