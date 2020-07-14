import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ManagerApi } from '../../../shared/api/manager.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { BireActionTypeConstants } from '../../../shared/constants/bire-action-type-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { WorkShopManagerInputDTO } from '../../../shared/types/api-input-types/manager/workshop-manager-input-dto';
import { FindBireItemsBySearchCriteriaInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { SavePartNumberInput } from '../../../shared/types/api-input-types/product-structure-management/save-part-number-input.interface';
import { BireMaintenanceProgramPnTableDTO } from '../../../shared/types/api-input-types/task-management/bire-maintenance-program-pn-table.inteface';
import { WorkloadOutputDTO } from '../../../shared/types/api-output-types/manager/workload-output-dto-.interface';
import { BireAttributeDTOId } from '../../../shared/types/api-types/bire-attribute-dto-id.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnAttributeDTO } from '../../../shared/types/api-types/bire-pn-attribute-dto.interface';
import { BirePnDTOId } from '../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { BirePnMeasureDTO } from '../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { BireUnitMeasureDTO } from '../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { BireVersionPnDTO } from '../../../shared/types/api-types/bire-version-pn-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { FindBireEvolutionPnsByPnCodeDTO } from '../../../shared/types/api-types/find-bire-evolution-pns-by-pn-code-dto.interface';
import { FindBireItemPnEvolutionsByPnCodeOrPnPnCodeDTO } from '../../../shared/types/api-types/find-bire-item-pn-evolutions-by-pn-code-or-pn-pn-code-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class WorkshopHomeService extends AbstractAwHttpService {
  public getWorkLoad;
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly mannagerApi: ManagerApi
  ) {
    super(http, appConfigService);
  }

  public findBirePn(pn: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, pn);
  }

  public findBirePnDocs(pn: BirePnDTOId): Observable<BireDocumentDTO[]> {
    return super.post<BirePnDTOId, BireDocumentDTO[]>(this.productStructureManagementApi.findBirePnDocs, pn);
  }

  public findAllBireVariantVersions(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public findAllBireUnitMeasures(): Observable<BireUnitMeasureDTO[]> {
    return super.post<void, BireUnitMeasureDTO[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }

  public savePnData(savePartNumberInput: SavePartNumberInput): Observable<string> {
    return super.post<SavePartNumberInput, string>(
      this.productStructureManagementApi.savePartNumber,
      savePartNumberInput
    );
  }

  // public upgradeBireEvolution(bireEvolutionDTO: BireEvolutionDTO, targetRevisionNumber: string): Observable<BireEvolutionDTO> {
  //     const upgradeBireEvolutionInput: UpgradeBireEvolutionInput = {
  //         bireEvolutionDTO: bireEvolutionDTO,
  //         targetRevisionNumber : targetRevisionNumber
  //     };
  //     return super.post<UpgradeBireEvolutionInput, BireEvolutionDTO>
  //         (this.productStructureManagementApi.upgradeBireEvolution, upgradeBireEvolutionInput);
  // }

  public findBireAttribute(attributeId: BireAttributeDTOId): Observable<BireAttributeDTO> {
    return super.post<BireAttributeDTOId, BireAttributeDTO>(
      this.productStructureManagementApi.findBireAttribute,
      attributeId
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireEvolutionPnsByPnCode(birePn: BirePnDTOId): Observable<FindBireEvolutionPnsByPnCodeDTO[]> {
    return super.post<BirePnDTOId, FindBireEvolutionPnsByPnCodeDTO[]>(
      this.productStructureManagementApi.findBireEvolutionPnsByPnCode,
      birePn
    );
  }

  public findBireItemPnEvolutionsByPnCodeOrPnPnCode(
    birePn: BirePnDTOId
  ): Observable<FindBireItemPnEvolutionsByPnCodeOrPnPnCodeDTO[]> {
    return super.post<BirePnDTOId, FindBireItemPnEvolutionsByPnCodeOrPnPnCodeDTO[]>(
      this.productStructureManagementApi.findBireItemPnEvolutionsByPnCodeOrPnPnCode,
      birePn
    );
  }

  public findBirePnMeasuresByPnCode(birePn: BirePnDTOId): Observable<BirePnMeasureDTO[]> {
    return super.post<BirePnDTOId, BirePnMeasureDTO[]>(
      this.productStructureManagementApi.findBirePnMeasuresByPnCode,
      birePn
    );
  }

  public findBirePnAttributesByPn(pnCode: string): Observable<BirePnAttributeDTO[]> {
    const birePnId: BirePnDTOId = {
      pnCode
    };

    return super.post<BirePnDTOId, BirePnAttributeDTO[]>(
      this.productStructureManagementApi.findBirePnAttributesByPn,
      birePnId
    );
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP);
  }

  public getObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP);
  }

  public getPnTraceabilityMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.PN_TRACEABILITY_MAP);
  }

  public getRefMeasureCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.REF_MEASURE_CATEGORY_MAP);
  }

  // Bind Items Table
  public findBireItemsBySearchCriteria(pnCode: string): Observable<BireItemDTO[]> {
    return super.post<string, BireItemDTO[]>(
      this.productStructureManagementApi.findAllBireItemByPnCodeAndFamilyVariantAndItemNumberAndFunctionCode,
      pnCode
    );
  }

  public findBireItemsBySearchCriteriaPartNumber(
    attribute: MapConstructor,
    bireItemDTOCriteria: BireItemDTO,
    pnCode: string
  ): Observable<BireItemDTO[]> {
    const criteria: FindBireItemsBySearchCriteriaInput = {
      attribute,
      bireItemDTOCriteria,
      pnCode
    };

    return super.post<FindBireItemsBySearchCriteriaInput, BireItemDTO[]>(
      this.productStructureManagementApi.findBireItemsBySearchCriteriaPartNumber,
      criteria
    );
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP);
  }

  public findBireActionTypesByActionTypeCodeA(): Observable<LabelValue<string>[]> {
    const item: string = BireActionTypeConstants.ACTION_TYPE_A;

    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      item
    );
  }

  public findBireActionTypesByActionTypeCodeB(): Observable<LabelValue<string>[]> {
    const item: string = BireActionTypeConstants.ACTION_TYPE_B;

    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      item
    );
  }

  public findBireVersionPnsByPnCode(pnCode: string): Observable<BireVersionPnDTO[]> {
    return super.post<string, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByPnCode,
      pnCode
    );
  }

  public findBireMaintenancePlansByPn(pnCode: BirePnDTOId): Observable<BireMaintenanceProgramPnTableDTO[]> {
    return super.post<BirePnDTOId, BireMaintenanceProgramPnTableDTO[]>(
      this.taskManagementApi.findBireMaintenanceProgramByPn,
      pnCode
    );
  }

  public findQuantityUnitMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findQuantityUnitMap);
  }

  public getWorkShopManagerInfo(workShopManagerInputDTO: WorkShopManagerInputDTO): Observable<WorkloadOutputDTO> {
    return super.post<WorkShopManagerInputDTO, WorkloadOutputDTO>(
      this.mannagerApi.getWorkShopManagerInfo,
      workShopManagerInputDTO
    );
  }
}
