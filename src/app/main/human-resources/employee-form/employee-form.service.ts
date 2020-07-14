import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { BidtAbsenceApi } from '../../../shared/api/bidt-absence.api';
import { BidtCategoryApi } from '../../../shared/api/bidt-category.api';
import { BidtCompanyApi } from '../../../shared/api/bidt-company.api';
import { BidtContractApi } from '../../../shared/api/bidt-contract.api';
import { BidtDocumentApi } from '../../../shared/api/bidt-document.api';
import { BidtEmployeeApi } from '../../../shared/api/bidt-employee.api';
import { BidtEvaluationApi } from '../../../shared/api/bidt-evaluation.api';
import { BidtExpenseApi } from '../../../shared/api/bidt-expense.api';
import { BidtHourlyCostApi } from '../../../shared/api/bidt-hourly-cost.api';
import { BidtLaborTemplateApi } from '../../../shared/api/bidt-labor-template.api';
import { BidtMedicalVisitApi } from '../../../shared/api/bidt-medical-visit.api';
import { BidtQualifEmployeeApi } from '../../../shared/api/bidt-qualif-employee.api';
import { BidtSiteApi } from '../../../shared/api/bidt-site.api';
import { BidtTrainingApi } from '../../../shared/api/bidt-training.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindEmployeeWorksInput } from '../../../shared/types/api-input-types/bidt-employee/find-employee-works-input.interface';
import { FindWorksInformationByCriteriaInput } from '../../../shared/types/api-input-types/bidt-employee/find-works-information-by-criteria-input.interface';
import { SaveEmployeesInput } from '../../../shared/types/api-input-types/bidt-employee/save-employee-input.interface';
import { FindAcrsEventListByUserInput } from '../../../shared/types/api-input-types/fleet-management/find-acrs-event-list-by-user-input.interface';
import { CatalogPropertiesTableDTO } from '../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidtEvaluationsOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/bidt-evaluations-output.interface';
import { BidtHourlyCostsOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/bidt-hourly-costs-output-dto.interface';
import { EmployeeFlightOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-flight-output-dto.interface';
import { EmployeeHolidaysTableDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-holidays-table-dto.interface';
import { EmployeeWorkOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-work-output-dto.interface';
import { FindEmployeeQualificationDTO } from '../../../shared/types/api-output-types/bidt-qualif-employee/find-employee-qualification-dto.interface';
import { EmployeeWorksInformationOutputDTO } from '../../../shared/types/api-output-types/employee-works-information/employee-works-information-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtAbsenceDTO } from '../../../shared/types/api-types/bidt-absence-dto.interface';
import { BidtCategoryDTO } from '../../../shared/types/api-types/bidt-category-dto.interface';
import { BidtCompanyDTO } from '../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtContractDTO } from '../../../shared/types/api-types/bidt-contract-dto.interface';
import { BidtDocumentDTO } from '../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtExpenseDTO } from '../../../shared/types/api-types/bidt-expense-dto.interface';
import { BidtLaborTemplateDTO } from '../../../shared/types/api-types/bidt-labor-template-dto.interface';
import { BidtMedicalVisitDTO } from '../../../shared/types/api-types/bidt-medical-visit-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtTrainingDTO } from '../../../shared/types/api-types/bidt-training-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { FileContent } from '../../../shared/types/api-types/file-content.interface';
import { GetEmployeeFormDTO } from '../../../shared/types/api-types/get-employee-form-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EmployeeFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtContractApi: BidtContractApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly bidtLaborTemplateApi: BidtLaborTemplateApi,
    private readonly bidtAbsenceApi: BidtAbsenceApi,
    private readonly bidtCategoryApi: BidtCategoryApi,
    private readonly bidtEvaluationApi: BidtEvaluationApi,
    private readonly bidtExpenseApi: BidtExpenseApi,
    private readonly bidtHourlyCostApi: BidtHourlyCostApi,
    private readonly bidtMedicalVisitApi: BidtMedicalVisitApi,
    private readonly bidtQualifEmployeeApi: BidtQualifEmployeeApi,
    private readonly bidtTrainingApi: BidtTrainingApi,
    private readonly bidtDocumentApi: BidtDocumentApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtWarehouse: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  public getEmployeeDetails(employeeId: number): Observable<GetEmployeeFormDTO[]> {
    return super.post<number, GetEmployeeFormDTO[]>(this.bidtEmployeeApi.getEmployeeDetails, employeeId);
  }

  public saveEmployees(employee: SaveEmployeesInput): Observable<number> {
    return super.post<SaveEmployeesInput, number>(this.bidtEmployeeApi.saveEmployees, employee);
  }

  public generateEmployeeCard(employee: BidtEmployeeDTO): Observable<FileContent> {
    return super.post<BidtEmployeeDTO, FileContent>(this.bidtEmployeeApi.generateEmployeeCard, employee);
  }

  /**************************************************************************
   * Company api
   *************************************************************************/
  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  /**************************************************************************
   * Site api
   *************************************************************************/
  public findBidtSiteByCriteria(criteria: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.findAll, criteria);
  }
  /**************************************************************************
   * Contract api
   *************************************************************************/
  public findAllContractNames(criteria: BidtContractDTO): Observable<BidtContractDTO[]> {
    return super.post<BidtContractDTO, BidtContractDTO[]>(this.bidtContractApi.findAll, criteria);
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  /**************************************************************************
   * Work Template api
   *************************************************************************/
  public findAllWorkTemplateNames(): Observable<SearchResultsDTO<BidtLaborTemplateDTO>> {
    return super.post<void, SearchResultsDTO<BidtLaborTemplateDTO>>(this.bidtLaborTemplateApi.findAll);
  }

  /**************************************************************************
   * Hourly Costs api
   *************************************************************************/
  public findHourlyCostsByEmployeeId(employeeId: number): Observable<BidtHourlyCostsOutputDTO[]> {
    return super.post<number, BidtHourlyCostsOutputDTO[]>(this.bidtHourlyCostApi.findByEmployeeId, employeeId);
  }

  /**************************************************************************
   * Qualification api
   *************************************************************************/
  public findQualificationsByEmployeeId(employeeId: number): Observable<FindEmployeeQualificationDTO[]> {
    return super.post<number, FindEmployeeQualificationDTO[]>(
      this.bidtQualifEmployeeApi.findQualificationsByEmployeeId,
      employeeId
    );
  }

  public getEmployeeQualificationText(employeeId: string): Observable<string> {
    return super.post<string, string>(this.aircraftMaintenanceApi.getEmployeeQualificationText, employeeId);
  }

  /**************************************************************************
   * License api
   *************************************************************************/
  public findByLicenseId(license: BidtCategoryDTO): Observable<BidtCategoryDTO[]> {
    return super.post<BidtCategoryDTO, BidtCategoryDTO[]>(this.bidtCategoryApi.findByLicenseId, license);
  }

  /**************************************************************************
   * Training api
   *************************************************************************/
  public findTrainingByEmployeeId(employeeId: number): Observable<BidtTrainingDTO[]> {
    return super.post<number, BidtTrainingDTO[]>(this.bidtTrainingApi.findTrainingsByEmployeeId, employeeId);
  }

  /**************************************************************************
   * Evaluation api
   *************************************************************************/
  public findEvaluationsByEmployeeId(employeeId: number): Observable<BidtEvaluationsOutputDTO[]> {
    return super.post<number, BidtEvaluationsOutputDTO[]>(
      this.bidtEvaluationApi.findEvaluationsByEmployeeId,
      employeeId
    );
  }

  /**************************************************************************
   * Absence api
   *************************************************************************/
  public findAbsenceByEmployeeId(employeeId: number): Observable<BidtAbsenceDTO[]> {
    return super.post<number, BidtAbsenceDTO[]>(this.bidtAbsenceApi.findAbsenceByEmployeeId, employeeId);
  }

  /**************************************************************************
   * Holiday api
   *************************************************************************/
  public findHolidaysByEmployeeId(employeeId: number): Observable<EmployeeHolidaysTableDTO[]> {
    return super.post<number, EmployeeHolidaysTableDTO[]>(this.bidtAbsenceApi.findHolidaysByEmployeeId, employeeId);
  }

  /**************************************************************************
   * Expense api
   *************************************************************************/
  public findExpenseByEmployeeId(employeeId: number): Observable<BidtExpenseDTO[]> {
    return super.post<number, BidtExpenseDTO[]>(this.bidtExpenseApi.findByEmployeeId, employeeId);
  }

  /**************************************************************************
   * Medical Visit api
   *************************************************************************/
  public findByEmployeeIdMedicalEmployee(employeeId: number): Observable<BidtMedicalVisitDTO[]> {
    return super.post<number, BidtMedicalVisitDTO[]>(
      this.bidtMedicalVisitApi.findByEmployeeIdMedicalEmployee,
      employeeId
    );
  }

  /**************************************************************************
   * Document api
   *************************************************************************/
  public findDocumentByEmployeeId(employeeId: number): Observable<BidtDocumentDTO[]> {
    return super.post<number, BidtDocumentDTO[]>(this.bidtDocumentApi.findByEmployeeId, employeeId);
  }

  public findDocumentCategories(propertyId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagementApi.findBidoPropertiesValuesByPropertiesId,
      propertyId
    );
  }

  /**************************************************************************
   * Works api
   *************************************************************************/
  public getWorksByEmployee(input: FindEmployeeWorksInput): Observable<EmployeeWorkOutputDTO[]> {
    return super.post<FindEmployeeWorksInput, EmployeeWorkOutputDTO[]>(this.bidtEmployeeApi.getWorksByEmployee, input);
  }

  /**************************************************************************
   * Flights api
   *************************************************************************/
  public getFlightsByEmployee(input: FindEmployeeWorksInput): Observable<EmployeeFlightOutputDTO[]> {
    return super.post<FindEmployeeWorksInput, EmployeeFlightOutputDTO[]>(
      this.bidtEmployeeApi.getFlightsByEmployee,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAcrsEventListByUser(
    input: FindAcrsEventListByUserInput
  ): Observable<SearchResultsDTO<BidoNotificationDTO>> {
    return super.post<FindAcrsEventListByUserInput, SearchResultsDTO<BidoNotificationDTO>>(
      this.fleetManagementApi.findAcrsEventListByUser,
      input
    );
  }

  public findBidoEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public getEventStatusValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventStatusValues);
  }

  /**************************************************************************
   * Employee works information api
   *************************************************************************/

  public findWorksInformationByCriteria(
    criteria: FindWorksInformationByCriteriaInput
  ): Observable<EmployeeWorksInformationOutputDTO[]> {
    return super.post<FindWorksInformationByCriteriaInput, EmployeeWorksInformationOutputDTO[]>(
      this.bidtEmployeeApi.findWorksInformationByCriteria,
      criteria
    );
  }

  /**************************************************************************
   * Warehouse api
   *************************************************************************/
  public findWarehousesBySite(input: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouse.findBySiteId, input);
  }
}
