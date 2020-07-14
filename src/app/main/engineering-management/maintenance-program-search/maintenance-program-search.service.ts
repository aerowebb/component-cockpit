import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskBusinessApi } from '../../../shared/api/task-business.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../shared/api/user-profile-business.api';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { CompareMaintenancePlansInput } from '../../../shared/types/api-input-types/task-business/compare-maintenance-plans-input.interface';
import { FindBireMaintenancePlansByCriteriaInput } from '../../../shared/types/api-input-types/task-management/find-bire-maintenance-plans-by-criteria-input.interface';
import { GetVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-variant-output-dto.interface';
import { MaintenanceProgramReports } from '../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { MaintenanaceProgramTableDTO } from '../../../shared/types/api-output-types/task-management/maintenanace-program-table-dto.interface';
import { AccessRightQueryDTO } from '../../../shared/types/api-types/access-right-query-dto.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-types/find-family-variant-input.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class MaintenanceProgramSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly taskBusinessApi: TaskBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi
  ) {
    super(http, appConfigService);
  }

  public findBireFamilyVariantDropdownForMaintenanceProgram(
    familyVariantInput: FindFamilyVariantInput
  ): Observable<GetVariantOutputDTO[]> {
    return super.post<FindFamilyVariantInput, GetVariantOutputDTO[]>(
      this.productStructureManagementApi.findBireFamilyVariantDropdownForMaintenanceProgram,
      familyVariantInput
    );
  }

  public findBireMaintenancePlansByCriteria(
    criteria: FindBireMaintenancePlansByCriteriaInput
  ): Observable<SearchResultsDTO<MaintenanaceProgramTableDTO>> {
    return super.post<FindBireMaintenancePlansByCriteriaInput, SearchResultsDTO<MaintenanaceProgramTableDTO>>(
      this.taskManagementApi.findBireMaintenancePlansByCriteria,
      criteria
    );
  }

  public removeBireMaintenancePlan(bireMaintenancePlanDTOIds: BireMaintenancePlanDTO[]): Observable<boolean> {
    return super.post<BireMaintenancePlanDTO[], boolean>(
      this.taskManagementApi.removeBireMaintenancePlan,
      bireMaintenancePlanDTOIds
    );
  }

  public compareMaintenancePlansByDeltaTasks(
    compareMaintenancePlansInput: CompareMaintenancePlansInput
  ): Observable<MaintenanceProgramReports> {
    return super.post<CompareMaintenancePlansInput, MaintenanceProgramReports>(
      this.taskBusinessApi.compareMaintenancePlansByDeltaTasks,
      compareMaintenancePlansInput
    );
  }

  public compareMaintenancePlans(
    compareMaintenancePlansInput: CompareMaintenancePlansInput
  ): Observable<MaintenanceProgramReports> {
    return super.post<CompareMaintenancePlansInput, MaintenanceProgramReports>(
      this.taskBusinessApi.compareMaintenancePlans,
      compareMaintenancePlansInput
    );
  }

  public hasUpdateRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasUpdateRights, accessRightQueryDTO);
  }

  public hasDisplayRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasDisplayRights, accessRightQueryDTO);
  }

  public hasManageRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasManageRights, accessRightQueryDTO);
  }
}
