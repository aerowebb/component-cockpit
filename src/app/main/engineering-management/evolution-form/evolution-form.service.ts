import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureHistoryApi } from '../../../shared/api/product-structure-history.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SaveEvolutionDataInput } from '../../../shared/types/api-input-types/product-structure-management/save-evolution-data-input.interface';
import { UpgradeBireEvolutionInput } from '../../../shared/types/api-input-types/product-structure-management/upgrade-bire-evolution-input.interface';
import { BireAlternativePnAndItemPnDTO } from '../../../shared/types/api-types/bire-alternative-pn-and-item-pn-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionAttributeDTOId } from '../../../shared/types/api-types/bire-evolution-attribute-dto-id.interface';
import { BireEvolutionAttributeDTO } from '../../../shared/types/api-types/bire-evolution-attribute-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-evolution-dto.interface';
import { BireEvolutionItemDTO } from '../../../shared/types/api-types/bire-evolution-item-dto.interface';
import { BireEvolutionPnDTO } from '../../../shared/types/api-types/bire-evolution-pn-dto.interface';
import { BireEvolutionSbDTO } from '../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireEvolutionVariantDTO } from '../../../shared/types/api-types/bire-evolution-variant-dto.interface';
import { BireItemItemDTO } from '../../../shared/types/api-types/bire-item-item-dto.interface';
import { BireModificationEvolutionDTO } from '../../../shared/types/api-types/bire-modification-evolution-dto.interface';
import { BireTaskEvolutionDTO } from '../../../shared/types/api-types/bire-task-evolution-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { HBireEvolutionAttributeDTO } from '../../../shared/types/api-types/h-bire-evolution-attribute-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EvolutionFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureHistoryApi: ProductStructureHistoryApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public findBireEvolution(evolution: BireEvolutionDTOId): Observable<BireEvolutionDTO> {
    return super.post<BireEvolutionDTOId, BireEvolutionDTO>(
      this.productStructureManagementApi.findBireEvolution,
      evolution
    );
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFuncObjectStatusMap');
  }

  public getEvolutionTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionTypeMap');
  }

  public getComplianceMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getComplianceMap');
  }

  public getEvolutionLevelMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionLevelMap');
  }

  public getFunctionObjectionStatus(status: string): Observable<LabelValue<string>[]> {
    return this.propertiesService.getObjectStatusList(true, false, false, status, false);
  }

  // SB/AD
  public findBireEvolutionSbsByEvolution(evolution: BireEvolutionDTO): Observable<BireEvolutionSbDTO[]> {
    return super.post<BireEvolutionDTO, BireEvolutionSbDTO[]>(
      this.productStructureManagementApi.findBireEvolutionSbsByEvolution,
      evolution
    );
  }

  // Modifications Table
  public findBireModificationEvolutionsByEvolution(
    evolution: BireEvolutionDTO
  ): Observable<BireModificationEvolutionDTO[]> {
    return super.post<BireEvolutionDTO, BireModificationEvolutionDTO[]>(
      this.productStructureManagementApi.findBireModificationEvolutionsByEvolution,
      evolution
    );
  }

  // Interdependences
  public findBireEvolutionEvolutionsByEvolution(evolution: BireEvolutionDTO): Observable<BireEvolutionEvolutionDTO[]> {
    return super.post<BireEvolutionDTO, BireEvolutionEvolutionDTO[]>(
      this.productStructureManagementApi.findBireEvolutionEvolutionsByEvolution,
      evolution
    );
  }

  // Applicabilities
  public findBireEvolutionVariantsByEvolutionNumbers(
    evolution: BireEvolutionDTOId
  ): Observable<BireEvolutionVariantDTO[]> {
    return super.post<BireEvolutionDTOId, BireEvolutionVariantDTO[]>(
      this.productStructureManagementApi.findBireEvolutionVariantsByEvolutionNumbers,
      evolution
    );
  }

  // Assets
  public findBireConcernedAssetsByEvolution(evolution: BireEvolutionDTOId): Observable<BireConcernedAssetDTO[]> {
    return super.post<BireEvolutionDTOId, BireConcernedAssetDTO[]>(
      this.productStructureManagementApi.findBireConcernedAssetsByEvolution,
      evolution
    );
  }

  // Retrieve the instruction dropdownlist in the Asset table
  public getAssetActionType(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getAssetActionTypeMap');
  }

  // Impacts on P/N Evolution
  public findBireItemPnEvolutionsByEvolution(
    evolution: BireEvolutionDTOId
  ): Observable<BireAlternativePnAndItemPnDTO[]> {
    return super.post<BireEvolutionDTOId, BireAlternativePnAndItemPnDTO[]>(
      this.productStructureManagementApi.findBireItemPnEvolutionsByEvolution,
      evolution
    );
  }

  // Impacts on P/N
  public findBireEvolutionPnsByEvolution(evolution: BireEvolutionDTOId): Observable<BireEvolutionPnDTO[]> {
    return super.post<BireEvolutionDTOId, BireEvolutionPnDTO[]>(
      this.productStructureManagementApi.findBireEvolutionPnsByEvolution,
      evolution
    );
  }

  // Impacts on Item
  public findBireEvolutionItemsByEvolution(evolution: BireEvolutionDTOId): Observable<BireEvolutionItemDTO[]> {
    return super.post<BireEvolutionDTOId, BireEvolutionItemDTO[]>(
      this.productStructureManagementApi.findBireEvolutionItemsByEvolution,
      evolution
    );
  }

  public getPnInterchangeabilityMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getPnInterchangeabilityMap');
  }

  public findBireActionTypesByActionTypeCode(item: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      item
    );
  }

  public findAllBireInterdependences(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireInterdependences);
  }

  public findAllBireVariantVersions(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.productStructureManagementApi.findAllBireVariantVersions);
  }

  public findBireTaskEvolutionsByEvolution(evolutionId: BireEvolutionDTOId): Observable<BireTaskEvolutionDTO[]> {
    return super.post<BireEvolutionDTOId, BireTaskEvolutionDTO[]>(
      this.taskManagementApi.findBireTaskEvolutionsByEvolution,
      evolutionId
    );
  }

  public saveEvolutionData(saveEvolutionDateInput: SaveEvolutionDataInput): Observable<void> {
    return super.post<SaveEvolutionDataInput, void>(
      this.productStructureManagementApi.saveEvolutionData,
      saveEvolutionDateInput
    );
  }

  public findBireItemItemsByItemSon(bireEvolutionItemDTO: BireEvolutionItemDTO): Observable<BireItemItemDTO[]> {
    return super.post<BireEvolutionItemDTO, BireItemItemDTO[]>(
      this.productStructureManagementApi.findBireItemItemsByItemSon,
      bireEvolutionItemDTO
    );
  }

  public checkAndReturnNewRevisionNumberByEvolution(bireEvolutionDTO: BireEvolutionDTO): Observable<string> {
    return super.post<BireEvolutionDTO, string>(
      this.productStructureManagementApi.checkAndReturnNewRevisionNumberByEvolution,
      bireEvolutionDTO
    );
  }

  public upgradeBireEvolution(
    bireEvolutionDTO: BireEvolutionDTO,
    targetRevisionNumber: string
  ): Observable<BireEvolutionDTO> {
    const upgradeBireEvolutionInput: UpgradeBireEvolutionInput = {
      bireEvolutionDTO,
      targetRevisionNumber
    };

    return super.post<UpgradeBireEvolutionInput, BireEvolutionDTO>(
      this.productStructureManagementApi.upgradeBireEvolution,
      upgradeBireEvolutionInput
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireEvolutionAttributesByEvolution(
    bireEvolution: BireEvolutionDTO
  ): Observable<BireEvolutionAttributeDTO[]> {
    const bireEvolutionId: BireEvolutionDTOId = {
      evolutionNumber: bireEvolution.evolutionNumber,
      evolutionRevisionNumber: bireEvolution.evolutionRevisionNumber
    };

    return super.post<BireEvolutionDTOId, BireEvolutionAttributeDTO[]>(
      this.productStructureManagementApi.findBireEvolutionAttributesByEvolution,
      bireEvolutionId
    );
  }

  public findHBireEvolutionAttributesByAttributeId(
    ids: BireEvolutionAttributeDTOId[]
  ): Observable<HBireEvolutionAttributeDTO[]> {
    return super.post<BireEvolutionAttributeDTOId[], HBireEvolutionAttributeDTO[]>(
      this.productStructureHistoryApi.findHBireEvolutionAttributesByAttributeId,
      ids
    );
  }

  public findBireDocumentsByEvol(evolutionDto: BireEvolutionDTO): Observable<BireDocumentDTO[]> {
    const bireEvolDtoId: BireEvolutionDTOId = {
      evolutionRevisionNumber: evolutionDto.evolutionRevisionNumber || '',
      evolutionNumber: evolutionDto.evolutionNumber || ''
    };

    return super.post<BireEvolutionDTOId, BireDocumentDTO[]>(
      this.productStructureManagementApi.findBireDocumentByEvolution,
      bireEvolDtoId
    );
  }

  public getObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getObjectStatusMap');
  }
}
