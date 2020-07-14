import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AirworthinessManagementApi } from '../../../shared/api/airworthiness-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskBusinessApi } from '../../../shared/api/task-business.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../shared/api/user-profile-business.api';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { AssetAssignmentMPSaveInput } from '../../../shared/types/api-input-types/airworthiness-management/asset-assignment-mp-save-input.interface';
import { CreateUpdateBireDocPlanInput } from '../../../shared/types/api-input-types/fleet-management/create-update-bire-doc-plan-input.interface';
import { RemoveBireDocPlanInput } from '../../../shared/types/api-input-types/fleet-management/remove-bire-doc-plan-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { CheckAMPComplianceRMPInput } from '../../../shared/types/api-input-types/task-management/check-amp-compliance-rmp-input.interface';
import { PartsSearchInput } from '../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { SaveMaintenanceProgramScreenInput } from '../../../shared/types/api-input-types/task-management/save-maintenance-program-screen-input.interface';
import { UpgradeBireMaintenancePlanInput } from '../../../shared/types/api-input-types/task-management/upgrade-bire-maintenance-plan-input.interface';
import { VisitCriteriaMPInput } from '../../../shared/types/api-input-types/task-management/visit-criteria-mp-input.interface';
import { GetVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-variant-output-dto.interface';
import { BireDocPlanDTO } from '../../../shared/types/api-output-types/fleet-management/bire-doc-plan-dto.interface';
import { MaintenanceProgramReports } from '../../../shared/types/api-output-types/task-business/maintenance-program-reports.interface';
import { AssetAssignmentMPTableDTO } from '../../../shared/types/api-output-types/task-management/asset-assignment-mp-table-dto.interface';
import { CheckComplianceMissingTaskVisitsDTO } from '../../../shared/types/api-output-types/task-management/check-compliance-missing-task-visits-dto.interface';
import { ItemsAssociatedTableDTO } from '../../../shared/types/api-output-types/task-management/items-associated-table-dto.interface';
import { PartAssociateTableDTO } from '../../../shared/types/api-output-types/task-management/part-associate-table-dto.interface';
import { PartsAssociatedTableDTO } from '../../../shared/types/api-output-types/task-management/parts-associated-table-dto.interface';
import { PlanTaskCounterTableDTO } from '../../../shared/types/api-output-types/task-management/plan-task-counter-table-dto.interface';
import { UpgradedMaintenacePlanDTO } from '../../../shared/types/api-output-types/task-management/upgraded-maintenance-plan-dto.interface';
import { AccessRightQueryDTO } from '../../../shared/types/api-types/access-right-query-dto.interface';
import { BidoMaintenancePlanDTO } from '../../../shared/types/api-types/bido-maintenance-plan-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireMeasureReferenceDTO } from '../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePlanAttributeDTO } from '../../../shared/types/api-types/bire-plan-attribute-dto.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { FindBireTaskByCriteriaInput } from '../../../shared/types/api-types/find-bire-task-by-criteria-input.interface';
import { MaintenancePlanDTO } from '../../../shared/types/api-types/maintenance-plan-dto.interface';
import { ReportDTO } from '../../../shared/types/api-types/report-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class MaintenanceProgramFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly taskBusinessApi: TaskBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi
  ) {
    super(http, appConfigService);
  }

  public findBireMaintenancePlan(
    bireMaintenancePlanDTOId: BireMaintenancePlanDTOId
  ): Observable<BireMaintenancePlanDTO> {
    if (bireMaintenancePlanDTOId.planCode) {
      return super.post<BireMaintenancePlanDTOId, BireMaintenancePlanDTO>(
        this.taskManagementApi.findBireMaintenancePlan,
        bireMaintenancePlanDTOId
      );
    } else {
      return of({});
    }
  }

  public findBirePlanAttributesByPlanCode(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<BirePlanAttributeDTO[]> {
    return super.post<BireMaintenancePlanDTO, BirePlanAttributeDTO[]>(
      this.taskManagementApi.findBirePlanAttributesByPlanCode,
      bireMaintenancePlanDTO
    );
  }

  public findBirePlanPnsByPlanCode(planCode: string): Observable<PartAssociateTableDTO[]> {
    return super.post<string, PartAssociateTableDTO[]>(this.taskManagementApi.findBirePlanPnsByPlanCode, planCode);
  }

  public findBirePlanTaskCountersByPlanCode(planCode: string): Observable<PlanTaskCounterTableDTO[]> {
    return super.post<string, PlanTaskCounterTableDTO[]>(
      this.taskManagementApi.findBirePlanTaskCountersByPlanCode,
      planCode
    );
  }

  public findBirePlanItemsByPlanCode(planCode: string): Observable<ItemsAssociatedTableDTO[]> {
    return super.post<string, ItemsAssociatedTableDTO[]>(this.taskManagementApi.findBirePlanItemsByPlanCode, planCode);
  }

  public findBireFamilyVariantDropdownForMaintenanceProgram(
    familyVariantInput: FindFamilyVariantInput
  ): Observable<GetVariantOutputDTO[]> {
    return super.post<FindFamilyVariantInput, GetVariantOutputDTO[]>(
      this.productStructureManagementApi.findBireFamilyVariantDropdownForMaintenanceProgram,
      familyVariantInput
    );
  }

  public findBireItemsBySearchCriteria(
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    const params: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: {
        familyCode,
        structureType,
        variantCode
      },
      pnCode: undefined,
      attribute: undefined
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      params
    );
  }

  public findBirePartNumbersBySearchCriteria(
    partsSearchInputCriteria: PartsSearchInput
  ): Observable<SearchResultsDTO<PartsAssociatedTableDTO>> {
    return super.post<PartsSearchInput, SearchResultsDTO<PartsAssociatedTableDTO>>(
      this.taskManagementApi.findBirePartNumbersBySearchCriteria,
      partsSearchInputCriteria
    );
  }

  public findBirePnsBySearchCriteriaForParts(
    partsSearchInputCriteria: PartsSearchInput
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<PartsSearchInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteriaForParts,
      partsSearchInputCriteria
    );
  }

  public findAllBireTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findAllBireMeasureReferences(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireMeasureReferences);
  }

  public findAllBireMeasureReferencesMaintenanceProgram(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram
    );
  }

  public findBidoEquipmentsEligibleToMaintenancePlan(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<AssetAssignmentMPTableDTO[]> {
    return super.post<BireMaintenancePlanDTO, AssetAssignmentMPTableDTO[]>(
      this.airworthinessManagementApi.findBidoEquipmentsEligibleToMaintenancePlan,
      bireMaintenancePlanDTO
    );
  }

  public findApplicableMaintenancePlanCodeByRecommendedPlanCode(rmpCode: string): Observable<string> {
    return super.post<string, string>(
      this.taskManagementApi.findApplicableMaintenancePlanCodeByRecommendedPlanCode,
      rmpCode
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public saveMaintenanceProgram(
    saveMaintenanceProgramScreenInput: SaveMaintenanceProgramScreenInput
  ): Observable<string> {
    return super.post<SaveMaintenanceProgramScreenInput, string>(
      this.taskManagementApi.saveMaintenanceProgram,
      saveMaintenanceProgramScreenInput
    );
  }

  public generateAMPFromRMP(planCode: string): Observable<BireMaintenancePlanDTO> {
    return super.post<string, BireMaintenancePlanDTO>(this.taskBusinessApi.generateAMPFromRMP, planCode);
  }

  public createAmp(maintenancePlanDTO: MaintenancePlanDTO): Observable<BireMaintenancePlanDTO> {
    return super.post<MaintenancePlanDTO, BireMaintenancePlanDTO>(this.taskBusinessApi.createAmp, maintenancePlanDTO);
  }

  public applyPreviousAMPCustomizationOnAMP(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<BireMaintenancePlanDTO> {
    return super.post<BireMaintenancePlanDTO, BireMaintenancePlanDTO>(
      this.taskBusinessApi.applyPreviousAMPCustomizationOnAMP,
      bireMaintenancePlanDTO
    );
  }

  public getPreviousAMPRevisionOfMaintenancePlan(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<BireMaintenancePlanDTO> {
    return super.post<BireMaintenancePlanDTO, BireMaintenancePlanDTO>(
      this.taskManagementApi.getPreviousAMPRevisionOfMaintenancePlan,
      bireMaintenancePlanDTO
    );
  }

  public getPreviousRMPRevisionOfMaintenancePlan(
    bireMaintenancePlanDTO: BireMaintenancePlanDTO
  ): Observable<BireMaintenancePlanDTO> {
    return super.post<BireMaintenancePlanDTO, BireMaintenancePlanDTO>(
      this.taskManagementApi.getPreviousRMPRevisionOfMaintenancePlan,
      bireMaintenancePlanDTO
    );
  }

  public findBireTasksByCriteria(criteria: FindBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireTasksByCriteria,
      criteria
    );
  }

  public findBireVisitsByCriteriaForMP(criteria: VisitCriteriaMPInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<VisitCriteriaMPInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findBireVisitsByCriteriaForMP,
      criteria
    );
  }

  public checkAndReturnNewRevisionNumberByMaintenancePlan(
    upgradeBireMaintenancePlanInput?: UpgradeBireMaintenancePlanInput
  ): Observable<UpgradedMaintenacePlanDTO | undefined> {
    if (upgradeBireMaintenancePlanInput) {
      return super.post<UpgradeBireMaintenancePlanInput, UpgradedMaintenacePlanDTO>(
        this.taskManagementApi.checkAndReturnNewRevisionNumberByMaintenancePlan,
        upgradeBireMaintenancePlanInput
      );
    } else {
      return of(undefined);
    }
  }

  public saveAssetAssignedToMaintenancePlan(
    assetAssignmentMPSaveInput: AssetAssignmentMPSaveInput
  ): Observable<MaintenanceProgramReports> {
    return super.post<AssetAssignmentMPSaveInput, MaintenanceProgramReports>(
      this.airworthinessManagementApi.saveAssetAssignedToMaintenancePlan,
      assetAssignmentMPSaveInput
    );
  }

  public upgradeBireMaintenancePlanData(
    upgradeBireMaintenancePlanInput: UpgradeBireMaintenancePlanInput
  ): Observable<BireMaintenancePlanDTO> {
    return super.post<UpgradeBireMaintenancePlanInput, BireMaintenancePlanDTO>(
      this.taskManagementApi.upgradeBireMaintenancePlanData,
      upgradeBireMaintenancePlanInput
    );
  }

  public controlComplianceWithRMP(
    checkAMPComplianceRMPInput: CheckAMPComplianceRMPInput
  ): Observable<CheckComplianceMissingTaskVisitsDTO> {
    return super.post<CheckAMPComplianceRMPInput, CheckComplianceMissingTaskVisitsDTO>(
      this.taskManagementApi.controlComplianceWithRMP,
      checkAMPComplianceRMPInput
    );
  }

  public updateMaintenancePlans(planCode: string): Observable<ReportDTO[]> {
    return super.post<string, ReportDTO[]>(this.airworthinessManagementApi.updateMaintenancePlans, planCode);
  }

  public findBidoMaintenancePlanByPlanCode(planCode: string): Observable<BidoMaintenancePlanDTO[]> {
    return super.post<string, BidoMaintenancePlanDTO[]>(
      this.airworthinessManagementApi.findBidoMaintenancePlanByPlanCode,
      planCode
    );
  }

  public findBireTaskTasksByVisit(bireTaskDTO: BireTaskDTO): Observable<BireTaskDTO[]> {
    return super.post<BireTaskDTO, BireTaskDTO[]>(this.taskManagementApi.findBireTaskTasksByVisit, bireTaskDTO);
  }

  public hasUpdateRights(): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_TASK,
      functionCode: undefined
    };

    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasUpdateRights, accessRightQueryDTO);
  }

  public hasDisplayRights(useCaseCode?: string): Observable<boolean> {
    const accessRightQueryDTO: AccessRightQueryDTO = {
      useCaseCode: useCaseCode || BidoFunctionTypeConstants.UC_MCH_TASK,
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

  public checkAmpTaskCompliance(
    checkAMPComplianceRMPInput: CheckAMPComplianceRMPInput
  ): Observable<CheckComplianceMissingTaskVisitsDTO> {
    return super.post<CheckAMPComplianceRMPInput, CheckComplianceMissingTaskVisitsDTO>(
      this.taskManagementApi.checkAmpTaskCompliance,
      checkAMPComplianceRMPInput
    );
  }

  public findBreDocPlansListByPlanCode(planCode: string): Observable<BireDocPlanDTO[]> {
    return super.post<string, BireDocPlanDTO[]>(this.taskManagementApi.findBreDocPlansListByPlanCode, planCode);
  }

  public createBireDocPlan(createBireDocPlanInputList: CreateUpdateBireDocPlanInput[]): Observable<void> {
    return super.post<CreateUpdateBireDocPlanInput[], void>(
      this.taskManagementApi.createBireDocPlan,
      createBireDocPlanInputList
    );
  }

  public updateBireDocPlan(updateBireDocPlanInputList: CreateUpdateBireDocPlanInput[]): Observable<void> {
    return super.post<CreateUpdateBireDocPlanInput[], void>(
      this.taskManagementApi.updateBireDocPlan,
      updateBireDocPlanInputList
    );
  }

  public removeBireDocPlan(bireDocPlanInputDeletedList: RemoveBireDocPlanInput[]): Observable<void> {
    return super.post<RemoveBireDocPlanInput[], void>(
      this.taskManagementApi.removeBireDocPlan,
      bireDocPlanInputDeletedList
    );
  }
}
