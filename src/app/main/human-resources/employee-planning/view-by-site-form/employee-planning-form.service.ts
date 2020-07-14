import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../../shared/api/bidt-company.api';
import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { BidtQualificationApi } from '../../../../shared/api/bidt-qualification.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { EventModel as GenericEventModel } from '../../../../shared/components/scheduler/event-model.interface';
import { ResourceModel as GenericResourceModel } from '../../../../shared/components/scheduler/resource-model.interface';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { StaffPlanningInput } from '../../../../shared/types/api-input-types/bidt-employee/staff-planning-input.interface';
import { StaffPlanningOutput } from '../../../../shared/types/api-output-types/bidt-employee/staff-planning-output.interface';
import { QualificationTitleListDTO } from '../../../../shared/types/api-output-types/bidt-qualification/qualification-title-list-dto.interface';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { GetEmployeeFormDTO } from '../../../../shared/types/api-types/get-employee-form-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

export interface ResourceModel extends GenericResourceModel {
  name: string;
  idGenerated?: number;
  hoursAvailability?: number;
  qualification?: string[];
}

export interface EventSchedulerModel extends GenericEventModel {
  desc: string;
  children: ResourceModel[];
}

export interface ResourceTimeRangeSchedulerModel extends GenericEventModel {
  timeRangeColor?: string;
  duration?: number;
  durationUnit?: string;
  style?: string;
}

export interface EventModel<T> extends GenericEventModel {
  _obj: T;
}

export enum UpcomingEventStatus {
  ABSENCES = 'ABSENCES',
  TRAINING = 'TRAINING',
  HOLIDAYS = 'HOLIDAYS',
  WORKORDER = 'JOBS'
}

@Injectable()
export class EmployeePlanningFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtQualificationApi: BidtQualificationApi
  ) {
    super(http, appConfigService);
  }

  public findBidtSiteById(siteId: number | undefined): Observable<BidtSiteDTO> {
    return super.post<number | undefined, BidtSiteDTO>(this.bidtSiteApi.getById, siteId);
  }

  public findBidtCompanyById(companyId: number): Observable<BidtCompanyDTO> {
    return super.post<number, BidtCompanyDTO>(this.bidtCompanyApi.getById, companyId);
  }

  public findBidtEmployeeBySearchCriteria(
    searchCriteria: BidtEmployeeDTO
  ): Observable<SearchResultsDTO<BidtEmployeeDTO>> {
    return super.post<BidtEmployeeDTO, SearchResultsDTO<BidtEmployeeDTO>>(
      this.bidtEmployeeApi.findBidtEmployeeBySearchCriteria,
      searchCriteria
    );
  }

  public getViewByCompanyData(input: StaffPlanningInput): Observable<StaffPlanningOutput[]> {
    return super.post<StaffPlanningInput, StaffPlanningOutput[]>(this.bidtEmployeeApi.getViewByCompanyData, input);
  }

  public getEmployeeDetails(input: number): Observable<GetEmployeeFormDTO[]> {
    return super.post<number, GetEmployeeFormDTO[]>(this.bidtEmployeeApi.getEmployeeDetails, input);
  }

  public getBidtWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, id);
  }

  public findQualificationTitle(): Observable<QualificationTitleListDTO[]> {
    return super.post<void, QualificationTitleListDTO[]>(this.bidtQualificationApi.findQualificationTitle);
  }
}
