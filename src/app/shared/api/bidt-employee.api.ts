import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtEmployeeApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_employee';

  // public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly findBidtEmployeeBySearchCriteria: string = super.appendToBaseUrl(
    '/find_bidt_employee_by_search_criteria'
  );

  // public readonly getSiteAvailabilityPerDayAndPerQualification: string = super.appendToBaseUrl('/get_site_availability_per_day_and_per_qualification');

  // public readonly getEmployeeAvailabilityPerDayAndPerQualification: string = super.appendToBaseUrl('/get_employee_availability_per_day_and_per_qualification');

  public readonly findAllEmployeeByQualificationType: string = super.appendToBaseUrl(
    '/find_all_employee_by_qualification_type'
  );

  public readonly findAllEmployeeByQualificationCode: string = super.appendToBaseUrl(
    '/find_all_employee_by_qualification_code'
  );

  // public readonly getAvailabilityPerDay: string = super.appendToBaseUrl('/get_availability_per_day');

  public readonly generateEmployeeCard: string = super.appendToBaseUrl('/generate_employee_card');

  // public readonly getEmployeeListByQualificationId: string = super.appendToBaseUrl('/get_employee_list_by_qualification_id');

  // public readonly getEmployeeActivityForPeriod: string = super.appendToBaseUrl('/get_employee_activity_for_period');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly findByEmployeeId: string = super.appendToBaseUrl('/find_by_employee_id');

  // public readonly deleteByLicenseId: string = super.appendToBaseUrl('/delete_by_license_id');

  // public readonly deleteByEmployeeId: string = super.appendToBaseUrl('/delete_by_employee_id');

  // public readonly findByLaborTemplateId: string = super.appendToBaseUrl('/find_by_labor_template_id');

  // public readonly deleteByLaborTemplateId: string = super.appendToBaseUrl('/delete_by_labor_template_id');

  // public readonly deleteByContractId: string = super.appendToBaseUrl('/delete_by_contract_id');

  // public readonly findByLicenseId: string = super.appendToBaseUrl('/find_by_license_id');

  // public readonly findBySalaryId: string = super.appendToBaseUrl('/find_by_salary_id');

  // public readonly deleteBySalaryId: string = super.appendToBaseUrl('/delete_by_salary_id');

  // public readonly findBySiteId: string = super.appendToBaseUrl('/find_by_site_id');

  // public readonly deleteBySiteId: string = super.appendToBaseUrl('/delete_by_site_id');

  // public readonly findByContractId: string = super.appendToBaseUrl('/find_by_contract_id');

  public readonly findEmployeeBySearchCriteria: string = super.appendToBaseUrl('/find_by_search_criteria_employee');

  public readonly getEmployeeDetails: string = super.appendToBaseUrl('/get_employee_details');

  public readonly saveEmployees: string = super.appendToBaseUrl('/save_employees');

  public readonly findEmployeeByCompany: string = super.appendToBaseUrl('/find_employee_by_company');

  public readonly findStaffAlerts: string = super.appendToBaseUrl('/find_staff_alerts');

  public readonly getViewByCompanyData: string = super.appendToBaseUrl('/get_view_by_company_data');

  public readonly getWorksByEmployee: string = super.appendToBaseUrl('/get_works_by_employee');

  public readonly getFlightsByEmployee: string = super.appendToBaseUrl('/get_flights_by_employee');

  public readonly findWorksInformationByCriteria: string = super.appendToBaseUrl('/find_works_information_by_criteria');

  public constructor() {
    super(BidtEmployeeApi.baseUrl);
  }
}
