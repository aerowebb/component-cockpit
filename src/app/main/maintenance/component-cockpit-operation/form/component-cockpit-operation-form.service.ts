import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { CockpitComponentApi } from '../../../../shared/api/cockpit-component.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { WorkscopeComponentApi } from '../../../../shared/api/workscope-component.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { CockpitInspectionInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { InspectorWorkBenchSearchInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/inspector-workbench-search-input-dto.interface';
import { SaveBsdeProjectInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/save-bsde-project-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { ProjectSearchOutputDTO } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/product-search-output-dto.interface';
import { WorkscopeTreeData } from '../../../../shared/types/api-output-types/workscope-component/workscope-tree-data-output';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BsdeAttributeDTO } from '../../../../shared/types/api-types/bsde-attribute-dto.interface';
import { BsdeProjectAttributeDTO } from '../../../../shared/types/api-types/bsde-project-attribute-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ComponentCockpitOperationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly cockpitComponentApi: CockpitComponentApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly workscopeComponentApi: WorkscopeComponentApi
  ) {
    super(http, appConfigService);
  }

  // Dropdown API's
  public findMroBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findMroBireSite);
  }

  public findBsdeProjectByProjectNumber(projectNumber: number): Observable<BsdeProjectDTO> {
    return super.post<number, BsdeProjectDTO>(this.projectManagementApi.findBsdeProjectByProjectNumber, projectNumber);
  }

  public findAllCustomers(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findMroBireSite);
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public getCockpitInspection(input: CockpitInspectionInput): Observable<ACTreeData[]> {
    return super.post<CockpitInspectionInput, ACTreeData[]>(this.cockpitComponentApi.getCockpitInspection, input);
  }

  public loadFamilyVariants(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public findBirePn(id: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, id);
  }

  public saveBsdeProject(input: SaveBsdeProjectInput): Observable<BsdeProjectDTO> {
    return super.post<SaveBsdeProjectInput, BsdeProjectDTO>(this.projectManagementApi.saveBsdeProject, input);
  }

  public findBsdeAttributeList(): Observable<BsdeAttributeDTO[]> {
    return super.post<void, BsdeAttributeDTO[]>(this.projectManagementApi.findBsdeAttributeList);
  }

  public findBsdeProjectAttributesByProject(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.projectManagementApi.findBsdeProjectAttributesByProject);
  }

  public saveCreateAsset(bidoEquipmentDTO: BidoEquipmentDTO): Observable<BidoEquipmentDTOId> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTOId>(this.assetManagementApi.createAsset, bidoEquipmentDTO);
  }

  public findBireItemByBidoEquipment(bidoEquipmentDTO: BidoEquipmentDTO): Observable<BireItemDTO> {
    return super.post<BidoEquipmentDTO, BireItemDTO>(
      this.fleetManagementApi.findBireItemByBidoEquipment,
      bidoEquipmentDTO
    );
  }

  public findBidoEquipment(equipmentId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, equipmentId);
  }

  public findBsdeProjectAttributeByProjectId(input: BsdeProjectDTOId): Observable<BsdeProjectAttributeDTO[]> {
    return super.post<BsdeProjectDTOId, BsdeProjectAttributeDTO[]>(
      this.projectManagementApi.findBsdeProjectAttributeByProjectId,
      input
    );
  }

  public getWorkscope(input: CockpitInspectionInput): Observable<WorkscopeTreeData[]> {
    return super.post<CockpitInspectionInput, WorkscopeTreeData[]>(this.workscopeComponentApi.getWorkscope, input);
  }

  // Remove API
  public removeComponentCockpit(bsdeProjectDTOIds: BsdeProjectDTOId[]): Observable<boolean> {
    return super.post<BsdeProjectDTOId[], boolean>(this.projectManagementApi.removeComponentCockpit, bsdeProjectDTOIds);
  }

  public getPartNumberStructure(bireItemDTOId: BireItemDTOId): Observable<GetPartNumberStructureOutputDTO[]> {
    return super.post<BireItemDTOId, GetPartNumberStructureOutputDTO[]>(
      this.productStructureManagementApi.getPartNumberStructure,
      bireItemDTOId
    );
  }

  // Search API
  public findBsdeProjectsByProjectCriteria(obj: InspectorWorkBenchSearchInput): Observable<ProjectSearchOutputDTO[]> {
    return super.post<InspectorWorkBenchSearchInput, ProjectSearchOutputDTO[]>(
      this.projectManagementApi.findBsdeProjectsByProjectCriteria,
      obj
    );
  }

  // Bind Items Table
  public findBireItemsBySearchCriteria(pnCode: string): Observable<BireItemDTO[]> {
    return super.post<string, BireItemDTO[]>(
      this.productStructureManagementApi.findAllBireItemByPnCodeAndFamilyVariantAndItemNumberAndFunctionCode,
      pnCode
    );
  }

  public updateEquipment(bidoEquipmentDTO: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(this.assetManagementApi.updateAsset, bidoEquipmentDTO);
  }

  public findBireItem(bireItemDTOId: BireItemDTOId): Observable<BireItemDTO> {
    return super.post<BireItemDTOId, BireItemDTO>(this.productStructureManagementApi.findBireItem, bireItemDTOId);
  }

  public findBirePnsBySearchCriteria(
    params: FindBirePnsBySearchCriteriaPSMInput
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      params
    );
  }
}
