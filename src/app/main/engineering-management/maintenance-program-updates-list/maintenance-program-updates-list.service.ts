import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { MaintenanceProgramUpdatedOutputDTO } from '../../../shared/types/api-output-types/task-management/maintenance-program-updated-output-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class MaintenanceProgramUpdatesListService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public getMainteanceProgramUpdatedList(planCode: string): Observable<MaintenanceProgramUpdatedOutputDTO[]> {
    return super.post<string, MaintenanceProgramUpdatedOutputDTO[]>(
      this.taskManagementApi.getMainteanceProgramUpdatedList,
      planCode
    );
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public getApplicability(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.TASK_APPLICABILITY_CODE_MAP);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public getTaskType(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP);
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP);
  }

  public getTaskEvolutionTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.TASK_EVOLUTION_TYPE_MAP);
  }
  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }
  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }
}
