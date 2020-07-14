import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { MaintenancePlanApi } from '../../../../shared/api/maintenance-plan.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllBsdeProjectByCriteriaInput } from '../../../../shared/types/api-input-types/project-management/find-all-bsde-project-by-criteria-input.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoFunctionTypeDTO } from '../../../../shared/types/api-types/bido-function-type-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BsdeAttributeDTO } from '../../../../shared/types/api-types/bsde-attribute-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { BsdeSiteDTO } from '../../../../shared/types/api-types/bsde-site-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

export enum ForecastCategory {
  ALL,
  ASSET,
  FLEET
}
export enum ForecastCreateCategory {
  ASSET,
  FLEET
}

@Injectable()
export class ForecastSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly maintenancePlanApi: MaintenancePlanApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public openForecast(openMode: ComponentOpenMode, forecastId?: string): void {
    const data: PageComponentData = {
      openMode,
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_FORECAST_FORM,
      objectId: this.serializationService.serialize(forecastId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Maintenance plan api
  // ////////////////////////////////////////////////////////////////////////////

  public getAllBidoCustomer(): Observable<LabelValue<string>[]> {
    return super
      .post<void, LabelValue<BidoCustomerDTO>[]>(this.maintenancePlanApi.geAllMaintenanceForecastingCustomer)
      .pipe(
        map((customerList) => {
          return customerList
            .filter((customer) => !StringUtils.isNullOrEmpty(customer.value.customerName))
            .map((customer) => {
              return {
                label: customer.value.customerName as string,
                value: customer.value.customerCode as string
              };
            });
        })
      );
  }

  public getAllBidtSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<BsdeSiteDTO>[]>(this.maintenancePlanApi.geAllMaintenanceForecastingSite).pipe(
      map((siteList) => {
        return siteList
          .filter((site) => !StringUtils.isNullOrEmpty(site.value.repairCenterName))
          .map((site) => {
            return {
              label: site.value.repairCenterName as string,
              value: site.value.repairCenterCode as string
            };
          });
      })
    );
  }

  public isForecastProjectLocked(input: string): Observable<boolean> {
    return super.post<string, boolean>(this.maintenancePlanApi.isForecastProjectLocked, input);
  }

  // ////////////////////////////////////////////////////////////////////////////
  // Project management api
  // ////////////////////////////////////////////////////////////////////////////

  public getAllBsdeAttributesForForecast(): Observable<LabelValue<BsdeAttributeDTO>[]> {
    return super.post<void, LabelValue<BsdeAttributeDTO>[]>(this.projectManagementApi.findBsdeAttributesForForecast);
  }

  public getAllBsdeProjectByCriteria(input: FindAllBsdeProjectByCriteriaInput): Observable<BsdeProjectDTO[]> {
    return super.post<FindAllBsdeProjectByCriteriaInput, BsdeProjectDTO[]>(
      this.projectManagementApi.findAllBsdeProjectByCriteria,
      input
    );
  }

  public removeBsdeProject(input: BsdeProjectDTOId): Observable<void> {
    return super.post<BsdeProjectDTOId, void>(this.projectManagementApi.removeBsdeProject, input);
  }

  private getBsdeProjectDateCriteria(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.amProjectManagementApi.getBsdeProjectDateCriteria);
  }

  public loadDateCriteriaList(): Observable<SelectItem[]> {
    return this.getBsdeProjectDateCriteria().pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  // ////////////////////////////////////////////////////////////////////////////
  // User profile management api
  // ////////////////////////////////////////////////////////////////////////////

  public getAllBidoFunctionTypeByModule(input: string): Observable<LabelValue<string>[]> {
    return super
      .post<string, BidoFunctionTypeDTO[]>(this.userProfileManagementApi.findAllBidoFunctionTypeByModule, input)
      .pipe(
        map((functionTypeList) => {
          return functionTypeList
            .filter((functionType) => !StringUtils.isNullOrEmpty(functionType.functionName))
            .map((functionType) => {
              return {
                label: functionType.functionName as string,
                value: functionType.functionCode as string
              };
            });
        })
      );
  }

  public getAllBidoUser(): Observable<LabelValue<string>[]> {
    return super.post<void, BidoUserDTO[]>(this.userProfileManagementApi.findAllBidoUser).pipe(
      map((userList) => {
        return userList
          .filter((user) => !StringUtils.isNullOrEmpty(user.firstname) || !StringUtils.isNullOrEmpty(user.lastname))
          .map((user) => {
            return {
              label: `${user.firstname} ${user.lastname}`,
              value: user.userId as string
            };
          });
      })
    );
  }
}
