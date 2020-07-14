import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtMedicalVisitApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_medical_visit';

  // public readonly findLastByEmployeeId: string = super.appendToBaseUrl('/find_last_by_employee_id');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly findByEmployeeId: string = super.appendToBaseUrl('/find_by_employee_id');

  // public readonly deleteByEmployeeId: string = super.appendToBaseUrl('/delete_by_employee_id');

  public readonly findByEmployeeIdMedicalEmployee: string = super.appendToBaseUrl(
    '/find_by_employee_id_medical_employee'
  );

  public constructor() {
    super(BidtMedicalVisitApi.baseUrl);
  }
}
