import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProductStructureHistoryApi } from '../../../shared/api/product-structure-history.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveModificationInput } from '../../../shared/types/api-input-types/product-structure-management/save-modification-input.interface';
import { UpgradeBireModificationInput } from '../../../shared/types/api-input-types/product-structure-management/upgrad-bire-modification-input.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationAttributeDTOId } from '../../../shared/types/api-types/bire-modification-attribute-dto-id.interface';
import { BireModificationAttributeDTO } from '../../../shared/types/api-types/bire-modification-attribute-dto.interface';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { HBireModificationAttributeDTO } from '../../../shared/types/api-types/h-bire-modification-attribute-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class ModificationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly productStructureHistoryApi: ProductStructureHistoryApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireFamilys(): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<void, SearchResultsDTO<BireFamilyDTO>>(this.productStructureManagementApi.findAllBireFamilys);
  }

  // Assets
  public findBireConcernedAssetsByModification(
    bireModificationDTO: BireModificationDTO
  ): Observable<BireConcernedAssetDTO[]> {
    const bireModificationDTOId: BireModificationDTOId = {
      modificationType: bireModificationDTO.modificationType,
      modificationNumber: bireModificationDTO.modificationNumber,
      modificationRevisionNumber: bireModificationDTO.modificationRevisionNumber,
      familyCode: bireModificationDTO.familyCode,
      structureType: bireModificationDTO.structureType
    };

    return super.post<BireModificationDTOId, BireConcernedAssetDTO[]>(
      this.productStructureManagementApi.findBireConcernedAssetsByModification,
      bireModificationDTOId
    );
  }

  public findBireModification(bireModificationDTOId: BireModificationDTOId): Observable<BireModificationDTO> {
    return super.post<BireModificationDTOId, BireModificationDTO>(
      this.productStructureManagementApi.findBireModification,
      bireModificationDTOId
    );
  }

  public saveModification(
    bireModificationDTO: BireModificationDTO,
    bireConcernedAssetDTOList: BireConcernedAssetDTO[],
    bireModificationAttributeDTO: BireModificationAttributeDTO[],
    isForupdate: boolean
  ): Observable<boolean> {
    const saveModificationInput: SaveModificationInput = {
      bireModificationDTO,
      bireConcernedAssetDTOList,
      bireModificationAttributeDTO,
      isForUpdate: !isForupdate
    };

    return super.post<SaveModificationInput, boolean>(
      this.productStructureManagementApi.saveModification,
      saveModificationInput
    );
  }

  public checkAndReturnNewRevisionNumberByModification(bireModificationDTO: BireModificationDTO): Observable<string> {
    return super.post<BireModificationDTO, string>(
      this.productStructureManagementApi.checkAndReturnNewRevisionNumberByModification,
      bireModificationDTO
    );
  }

  public upgradeBireModification(
    bireModificationDTO: BireModificationDTO,
    targetRevisionNumber: string
  ): Observable<BireModificationDTO> {
    const upgradeBireModificationInput: UpgradeBireModificationInput = {
      bireModificationDTO,
      targetRevisionNumber
    };

    return super.post<UpgradeBireModificationInput, BireModificationDTO>(
      this.productStructureManagementApi.upgradeBireModification,
      upgradeBireModificationInput
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireModificationAttributesByItem(
    bireModificationDTO: BireModificationDTO
  ): Observable<BireModificationAttributeDTO[]> {
    const bireModificationDTOId: BireModificationDTOId = {
      modificationType: bireModificationDTO.modificationType,
      modificationNumber: bireModificationDTO.modificationNumber,
      modificationRevisionNumber: bireModificationDTO.modificationRevisionNumber,
      familyCode: bireModificationDTO.familyCode,
      structureType: bireModificationDTO.structureType
    };

    return super.post<BireModificationDTOId, BireModificationAttributeDTO[]>(
      this.productStructureManagementApi.findBireModificationAttributesByItem,
      bireModificationDTOId
    );
  }

  public findHBireModificationAttributesByAttributeId(
    ids: BireModificationAttributeDTOId[]
  ): Observable<HBireModificationAttributeDTO[]> {
    return super.post<BireModificationAttributeDTOId[], HBireModificationAttributeDTO[]>(
      this.productStructureHistoryApi.findHBireModificationAttributesByAttributeId,
      ids
    );
  }

  public validateDocumentUrl(documentUrl?: string): Observable<boolean> {
    if (!documentUrl || (!!documentUrl && documentUrl.trim().length === 0)) {
      return of<boolean>(true);
    }

    return super.post<string, boolean>(this.productStructureManagementApi.validateDocumentUrl, documentUrl);
  }
}
