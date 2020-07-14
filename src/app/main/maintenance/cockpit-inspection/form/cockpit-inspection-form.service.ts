import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { CockpitComponentApi } from '../../../../shared/api/cockpit-component.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { CockpitInspectionInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { TechincalQuotationAndSubassembliesOutput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/technical-quotation-and-sub-assembly-output.interface';
import { TechnicalQuotationInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/technical-quotation-input.interface';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { SubAssemblySiblingOutput } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/sub-assembly-sibling-output.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireDocItemDTO } from '../../../../shared/types/api-types/bire-doc-item-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class CockpitInspectionFormService extends AbstractAwHttpService {
  private readonly saveSubject = new Subject<boolean>();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly cockpitComponentApi: CockpitComponentApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBsdeProjectByProjectNumber(projectNumber: number): Observable<BsdeProjectDTO> {
    return super.post<number, BsdeProjectDTO>(this.projectManagementApi.findBsdeProjectByProjectNumber, projectNumber);
  }

  /**************************************************
   * FETCHING DATA FOR SUB ASSEMBLY TREE STRUCTURE
   **************************************************/
  public getCockpitInspection(input: CockpitInspectionInput): Observable<ACTreeData[]> {
    return super.post<CockpitInspectionInput, ACTreeData[]>(this.cockpitComponentApi.getCockpitInspection, input);
  }

  public findBireDocItemsByItem(input: BireItemDTOId): Observable<BireDocItemDTO[]> {
    return super.post<BireItemDTOId, BireDocItemDTO[]>(
      this.productStructureManagementApi.findBireDocItemsByItem,
      input
    );
  }

  /**************************************************
   * FETCHING DATA FOR TECHNICAL AND SUB ASSEMBLY TABLE
   **************************************************/
  public getTechnicalQuotation(input: TechnicalQuotationInput): Observable<TechincalQuotationAndSubassembliesOutput[]> {
    return super.post<TechnicalQuotationInput, TechincalQuotationAndSubassembliesOutput[]>(
      this.cockpitComponentApi.getTechnicalQuotation,
      input
    );
  }

  public findBidoEquipmentByBireItemDTO(input: BireItemDTO): Observable<BidoEquipmentDTO> {
    return super.post<BireItemDTO, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipmentByBireItemDTO, input);
  }

  public findFirstBidoEquipmentsByPnAndSnCodes(woEquipement: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      woEquipement
    );
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSiteForTask);
  }

  public getSubAssemblySiblingList(input: TechnicalQuotationInput): Observable<SubAssemblySiblingOutput[]> {
    return super.post<TechnicalQuotationInput, SubAssemblySiblingOutput[]>(
      this.cockpitComponentApi.getSubAssemblySiblingList,
      input
    );
  }

  public fetchSentenceList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getSentenceList);
  }

  public fetchDecisionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.cockpitComponentApi.getDecisionList);
  }

  public findAllCustomers(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findMroBireSite);
  }

  public closeEvent() {
    this.saveSubject.next();
  }

  public saveEvent(): Observable<boolean> {
    return this.saveSubject.asObservable();
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

  public loadFamilyVariants(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public printPDF(inventories: TechnicalQuotationInput): Observable<FileContentDTO> {
    return super.post<TechnicalQuotationInput, FileContentDTO>(
      this.cockpitComponentApi.generateInspectionPDF,
      inventories
    );
  }
}
