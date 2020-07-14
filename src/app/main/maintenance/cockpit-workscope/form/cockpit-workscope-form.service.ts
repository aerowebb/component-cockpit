import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { FamilyVariantDTO } from '../../../..//shared/types/api-types/family-variant-dto.interface';
import { CockpitComponentApi } from '../../../../shared/api/cockpit-component.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { StandardImportPmApi } from '../../../../shared/api/standard-import-pm.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { WorkscopeComponentApi } from '../../../../shared/api/workscope-component.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { CockpitInspectionInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { SaveCauseRemovalInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/save-cause-removal-input.interface';
import { SaveWorkscopeInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/save-workscope-input.interface';
import { BirePackEvolutionInput } from '../../../../shared/types/api-input-types/product-structure-management/bire-pack-evolution-input.interface';
import { ConfigurationPackListInput } from '../../../../shared/types/api-input-types/product-structure-management/configuration-pack-list-input.interface';
import { SaveBsdeReturnReasonWithProjectInput } from '../../../../shared/types/api-input-types/project-management/save-bsde-return-reason-with-project-input.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { BirePackEvolutionOutput } from '../../../../shared/types/api-output-types/product-structure-management/bire-pack-evolution-output.interface';
import { ManageCauseRemovalOutputDTO } from '../../../../shared/types/api-output-types/task-management/manage-cause-removal-output-dto.interface';
import { WorkscopeTargetAndVariantOutput } from '../../../../shared/types/api-output-types/workscope-component/workscope-target-and-varaint-output.interface';
import { WorkscopeTreeData } from '../../../../shared/types/api-output-types/workscope-component/workscope-tree-data-output';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireConfigurationPackDTO } from '../../../../shared/types/api-types/bire-configuration-pack-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class CockpitWorkscopeFormService extends AbstractAwHttpService {
  public saveInventory: Subject<boolean> = new Subject();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly workscopeComponentApi: WorkscopeComponentApi,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly standardImportPmApi: StandardImportPmApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly cockpitComponentApi: CockpitComponentApi
  ) {
    super(http, appConfigService);
  }

  public findBsdeProjectByProjectNumber(projectNumber: number): Observable<BsdeProjectDTO> {
    return super.post<number, BsdeProjectDTO>(this.projectManagementApi.findBsdeProjectByProjectNumber, projectNumber);
  }

  public getWorkscope(input: CockpitInspectionInput): Observable<WorkscopeTreeData[]> {
    return super.post<CockpitInspectionInput, WorkscopeTreeData[]>(this.workscopeComponentApi.getWorkscope, input);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public findAllCustomers(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findMroBireSite);
  }

  public getImportTaskBsdeXLS(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.standardImportPmApi.getImportTaskBsdeXLS);
  }

  public findBireReturnReasonsByItem(projectNumber: number): Observable<ManageCauseRemovalOutputDTO[]> {
    return super.post<number, ManageCauseRemovalOutputDTO[]>(
      this.taskManagementApi.findBireReturnReasonsByItem,
      projectNumber
    );
  }

  public saveBsdeReturnReasonWithBsdeProject(
    saveBsdeReturnReasonWithProjectInput: SaveBsdeReturnReasonWithProjectInput
  ): Observable<void> {
    return super.post<SaveBsdeReturnReasonWithProjectInput, void>(
      this.projectManagementApi.saveBsdeReturnReasonWithBsdeProject,
      saveBsdeReturnReasonWithProjectInput
    );
  }

  public getWorkscopeTargetNumberAndVariantName(
    input: CockpitInspectionInput
  ): Observable<WorkscopeTargetAndVariantOutput> {
    return super.post<CockpitInspectionInput, WorkscopeTargetAndVariantOutput>(
      this.workscopeComponentApi.getWorkscopeTargetNumberAndVariantName,
      input
    );
  }

  public loadFamilyVariants(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public loadWorkshopScopeByProjectNumber(input: CockpitInspectionInput): Observable<string> {
    return super.post<CockpitInspectionInput, string>(this.workscopeComponentApi.getLoadWorkscope, input);
  }

  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public getPartNumberStructure(bireItemDTOId: BireItemDTOId): Observable<GetPartNumberStructureOutputDTO[]> {
    return super.post<BireItemDTOId, GetPartNumberStructureOutputDTO[]>(
      this.productStructureManagementApi.getPartNumberStructure,
      bireItemDTOId
    );
  }

  public downloadTemplate(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.workscopeComponentApi.loadWorkscopeTemplate);
  }

  public findBireConfigurationPacksByItemVersionAndConfigurationCode(
    input: ConfigurationPackListInput
  ): Observable<BireConfigurationPackDTO[]> {
    return super.post<ConfigurationPackListInput, BireConfigurationPackDTO[]>(
      this.productStructureManagementApi.findBireConfigurationPacksByItemVersionAndConfigurationCode,
      input
    );
  }

  public findBirePackEvolutionsByItemAndPackBaseOptionCodeItem(
    input: BirePackEvolutionInput
  ): Observable<BirePackEvolutionOutput[]> {
    return super.post<BirePackEvolutionInput, BirePackEvolutionOutput[]>(
      this.productStructureManagementApi.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem,
      input
    );
  }

  // Save inventory event
  public updateInventory(): void {
    this.saveInventory.next(true);
  }

  // Save Workscope
  public saveWorkscope(input: SaveWorkscopeInput): Observable<void> {
    return super.post<SaveWorkscopeInput, void>(this.workscopeComponentApi.saveWorkscope, input);
  }

  // Save Removal Causes
  public saveCauseRemovalList(input: SaveCauseRemovalInput): Observable<void> {
    return super.post<SaveCauseRemovalInput, void>(this.workscopeComponentApi.saveCauseRemoval, input);
  }

  public fetchSentenceList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getSentenceList);
  }

  public fetchDecisionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getDecisionList);
  }
}
