import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveSbadDataInput } from '../../../shared/types/api-input-types/product-structure-management/save-sbad-data-input.interface';
import { UpgradeBireSbInput } from '../../../shared/types/api-input-types/product-structure-management/upgrade-bire-sbad-input.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireDocSbDTOId } from '../../../shared/types/api-types/bire-doc-sb-dto-id.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionSbDTO } from '../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireSbAttributeDTO } from '../../../shared/types/api-types/bire-sb-attribute-dto.interface';
import { BireSbCounterDTO } from '../../../shared/types/api-types/bire-sb-counter-dto.interface';
import { BireSbDTOId } from '../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { BireSbVariantDTOId } from '../../../shared/types/api-types/bire-sb-variant-dto-id.interface';
import { BireSbVariantDTO } from '../../../shared/types/api-types/bire-sb-variant-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class SbadFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBireEvolutionSbsBySb(bireSbDTO: BireSbDTO): Observable<BireEvolutionSbDTO[]> {
    return super.post<BireSbDTO, BireEvolutionSbDTO[]>(
      this.productStructureManagementApi.findBireEvolutionSbsBySb,
      bireSbDTO
    );
  }

  public findBireSbVariantsBySbNumbers(bireSbDto: BireSbDTO): Observable<BireSbVariantDTO[]> {
    const bireSbDtoId: BireSbDTOId = {
      sbNumber: bireSbDto.sbNumber || '',
      sbRevisionNumber: bireSbDto.sbRevisionNumber || ''
    };

    return super.post<BireSbDTOId, BireSbVariantDTO[]>(
      this.productStructureManagementApi.findBireSbVariantsBySbNumbers,
      bireSbDtoId
    );
  }

  public findBireConcernedAssetsBySb(bireSbDto: BireSbDTO): Observable<BireConcernedAssetDTO[]> {
    const bireSbDtoId: BireSbDTOId = {
      sbNumber: bireSbDto.sbNumber || '',
      sbRevisionNumber: bireSbDto.sbRevisionNumber || ''
    };

    return super.post<BireSbDTOId, BireConcernedAssetDTO[]>(
      this.productStructureManagementApi.findBireConcernedAssetsBySb,
      bireSbDtoId
    );
  }

  public findBireDocumentsBySb(bireSbDto: BireSbDTO): Observable<BireDocumentDTO[]> {
    const bireSbDtoId: BireSbDTOId = {
      sbNumber: bireSbDto.sbNumber || '',
      sbRevisionNumber: bireSbDto.sbRevisionNumber || ''
    };

    return super.post<BireSbDTOId, BireDocumentDTO[]>(
      this.productStructureManagementApi.findBireDocumentBySb,
      bireSbDtoId
    );
  }

  public saveSbAdData(
    bireSb: BireSbDTO,
    bireSbId: BireSbDTOId,
    bireSbVariantAddedList: BireSbVariantDTO[],
    bireSbVariantUpdatedList: BireSbVariantDTO[],
    bireSbVariantDeletedList: BireSbVariantDTOId[],
    bireDocumentAddedList: BireDocumentDTO[],
    bireDocumentUpdatedList: BireDocumentDTO[],
    bireDocDeletedList: BireDocSbDTOId[],
    bireConcernedAssetAddedList: BireConcernedAssetDTO[],
    familyCode: string,
    structureType: string,
    variantCode: string,
    bireSbAttributes: BireSbAttributeDTO[],
    bireSbCounterDTO: BireSbCounterDTO[],
    bireMaintenancePlanDTOId: BireMaintenancePlanDTOId | undefined,
    isUpdate: boolean
  ): Observable<void> {
    const params: SaveSbadDataInput = {
      bireSb,
      bireSbId,
      bireSbVariantAddedList,
      bireSbVariantUpdatedList,
      bireSbVariantDeletedList,
      bireDocumentAddedList,
      bireDocumentUpdatedList,
      bireDocDeletedList,
      bireConcernedAssetAddedList,
      familyCode,
      structureType,
      variantCode,
      bireSbAttributes,
      bireSbCounterDTO,
      bireMaintenancePlanDTOId,
      isUpdate
    };

    return super.post<SaveSbadDataInput, void>(this.productStructureManagementApi.saveSbAdData, params);
  }

  public findBireSb(bireSbId: BireSbDTOId): Observable<BireSbDTO> {
    return super.post<BireSbDTOId, BireSbDTO>(this.productStructureManagementApi.findBireSb, bireSbId);
  }

  public findBireSbMaintenancePlanBySb(bireSbId: BireSbDTOId): Observable<BireSbDTO> {
    return super.post<BireSbDTOId, BireSbDTO>(
      this.productStructureManagementApi.findBireSbMaintenancePlanBySb,
      bireSbId
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireAttributesByCategoryList(category: string[]): Observable<BireAttributeDTO[]> {
    return super.post<string[], BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategoryList,
      category
    );
  }

  public findBireSbAttributesBySb(bireSb: BireSbDTO): Observable<BireSbAttributeDTO[]> {
    const bireSbId: BireSbDTOId = { sbNumber: bireSb.sbNumber || '', sbRevisionNumber: bireSb.sbRevisionNumber || '' };

    return super.post<BireSbDTOId, BireSbAttributeDTO[]>(
      this.productStructureManagementApi.findBireSbAttributesBySb,
      bireSbId
    );
  }

  public upgradeSbAd(bireSb: BireSbDTO, targetRevisionNumber: string): Observable<BireSbDTO> {
    const params: UpgradeBireSbInput = {
      bireSb,
      targetRevisionNumber
    };

    return super.post<UpgradeBireSbInput, BireSbDTO>(this.productStructureManagementApi.upgradeBireSB, params);
  }

  public checkSbAdRevisionNumber(bireSb: BireSbDTO): Observable<string> {
    return super.post<BireSbDTO, string>(
      this.productStructureManagementApi.checkAndReturnNewRevisionNumberBySB,
      bireSb
    );
  }

  public findBireSbCountersBySb(bireSbId: BireSbDTOId): Observable<BireSbCounterDTO[]> {
    return super.post<BireSbDTOId, BireSbCounterDTO[]>(
      this.productStructureManagementApi.findBireSbCountersBySb,
      bireSbId
    );
  }

  public findAllColunterCode(): Observable<LabelValue<string>[]> {
    return super.post<undefined, LabelValue<string>[]>(this.productStructureManagementApi.findAllCounterCode);
  }
}
