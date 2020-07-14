import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { InspectorWorkBenchSearchInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/inspector-workbench-search-input-dto.interface';
import { ProjectSearchOutputDTO } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/product-search-output-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ComponentCockpitOperationSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  // Dropdown API's
  public findMroBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findMroBireSite);
  }

  public findAllCustomers(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findMroBireSite);
  }

  public findBsdeAttributes(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.projectManagementApi.findBsdeAttributes);
  }

  public fillStatusList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.fillStatusDropDown);
  }

  public getAllUserList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getAllUsersDropdown);
  }

  public initDate(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.initDate);
  }

  // Search API
  public findBsdeProjectsByProjectCriteria(obj: InspectorWorkBenchSearchInput): Observable<ProjectSearchOutputDTO[]> {
    return super.post<InspectorWorkBenchSearchInput, ProjectSearchOutputDTO[]>(
      this.projectManagementApi.findBsdeProjectsByProjectCriteria,
      obj
    );
  }

  // Remove API
  public removeComponentCockpit(bsdeProjectDTOIds: BsdeProjectDTOId[]): Observable<boolean> {
    return super.post<BsdeProjectDTOId[], boolean>(this.projectManagementApi.removeComponentCockpit, bsdeProjectDTOIds);
  }
}
