import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { ProductStructureBusinessApi } from '../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { FindBireEvolutionsByEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/find-bire-evolutions-by-equipment-input.interface';
import { FindBireSbsByEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/find-bire-sbs-by-equipment-input.interface';
import { GetApplicableAdsInput } from '../../../shared/types/api-input-types/fleet-business/get-applicable-ads-input.interface';
import { GetApplicableSbsInput } from '../../../shared/types/api-input-types/fleet-business/get-applicable-sbs-input.interface';
import { GetRecursivelyAssociatedBireEvolutionsToItemAndPnCodeInput } from '../../../shared/types/api-input-types/product-structure-business/get-recursively-associated-bire-bire-evolution-to-item-and-pn-code-input.interface';
import { FindBireEvolutionsByFamilyAndVariantCodesInput } from '../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-family-and-variant-codes-input.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class DialogSearchEvolutionService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public findEvolutionListByEquipment(
    familyVariantCode: string | undefined,
    equipmentCode: string | undefined,
    complianceStatusList: number[] | undefined,
    engineSerialNumber: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const input: FindBireEvolutionsByEquipmentInput = {
      equipmentCode,
      familyVariantCode,
      applicationStatus: complianceStatusList,
      optionalEngineSerialNumber: engineSerialNumber
    };

    return super.post<FindBireEvolutionsByEquipmentInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.fleetBusinessApi.findBireEvolutionsByEquipment,
      input
    );
  }

  public findSbListByEquipment(
    familyVariantCode: string | undefined,
    equipmentCode: string | undefined,
    complianceStatusList: number[] | undefined,
    engineSerialNumber: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const optionalSbTypeListToExclude: string[] = [
      AWPropertiesConstants.SB_TYPE_AD_KEY,
      AWPropertiesConstants.SB_TYPE_CONFIGURATION_KEY
    ];
    const input: FindBireSbsByEquipmentInput = {
      equipmentCode,
      familyVariantCode,
      applicationStatus: complianceStatusList,
      optionalEngineSerialNumber: engineSerialNumber,
      optionalSbTypesToExclude: optionalSbTypeListToExclude
    };

    return super.post<FindBireEvolutionsByEquipmentInput, SearchResultsDTO<BireSbDTO>>(
      this.fleetBusinessApi.findBireSbsByEquipment,
      input
    );
  }

  /**************************************************************************
   * Product structure business api
   *************************************************************************/

  public findApplicableAdList(
    familyCode: string | undefined,
    variantCode: string | undefined,
    structureType: string | undefined,
    engineSerialNumber: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const input: GetApplicableAdsInput = {
      familyCode,
      structureType,
      variantCode,
      optionalSerialNumber: engineSerialNumber
    };

    return super.post<GetApplicableSbsInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureBusinessApi.getApplicableAds,
      input
    );
  }

  public findApplicableModificationList(
    familyCode: string | undefined,
    variantCode: string | undefined,
    structureType: string | undefined
  ): Observable<SearchResultsDTO<BireModificationDTO>> {
    const input: GetApplicableAdsInput = {
      familyCode,
      structureType,
      variantCode
    };

    return super.post<GetApplicableSbsInput, SearchResultsDTO<BireModificationDTO>>(
      this.productStructureBusinessApi.getApplicableModifications,
      input
    );
  }

  public findApplicableSbList(
    familyCode: string | undefined,
    variantCode: string | undefined,
    structureType: string | undefined,
    engineSerialNumber: string | undefined
  ): Observable<SearchResultsDTO<BireSbDTO>> {
    const optionalSbTypeListToExclude: string[] = [
      AWPropertiesConstants.SB_TYPE_AD_KEY,
      AWPropertiesConstants.SB_TYPE_CONFIGURATION_KEY
    ];
    const input: GetApplicableSbsInput = {
      familyCode,
      structureType,
      variantCode,
      optionalSbTypesToExclude: optionalSbTypeListToExclude,
      optionalSerialNumber: engineSerialNumber
    };

    return super.post<GetApplicableSbsInput, SearchResultsDTO<BireSbDTO>>(
      this.productStructureBusinessApi.getApplicableSbs,
      input
    );
  }

  public findRecursivelyAssociatedEvolutionListToItemAndPnCode(
    familyCode: string | undefined,
    variantCode: string | undefined,
    structureType: string | undefined,
    pnCode: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const bireItem: BireItemDTO = {
      familyCode,
      structureType,
      variantCode
    };
    const input: GetRecursivelyAssociatedBireEvolutionsToItemAndPnCodeInput = {
      pnCode,
      bireEvolutionDataList: [],
      bireItemDTO: bireItem,
      pnCodeProcessed: []
    };

    return super.post<GetRecursivelyAssociatedBireEvolutionsToItemAndPnCodeInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureBusinessApi.getRecursivelyAssociatedBireEvolutionsToItemAndPnCode,
      input
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findEvolutionListByEvolutionIdAndDesignation(
    input: BireEvolutionDTO
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    return super.post<BireEvolutionDTO, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionPKAndDesignation,
      input
    );
  }

  public findEvolutionListByFamilyCodeAndVariantCode(
    familyCode: string | undefined,
    variantCode: string | undefined,
    structureType: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const input: FindBireEvolutionsByFamilyAndVariantCodesInput = {
      familyCode,
      structureType,
      variantCode,
      forLogBookApplicability: false
    };

    return super.post<FindBireEvolutionsByFamilyAndVariantCodesInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByFamilyAndVariantCodes,
      input
    );
  }

  public findModificationListByModificationIdAndDesignation(
    evolutionCriteria: BireEvolutionDTO,
    familyCode: string | undefined,
    structureType: string | undefined
  ): Observable<SearchResultsDTO<BireModificationDTO>> {
    const input: BireModificationDTO = {
      familyCode,
      structureType,
      modificationNumber: evolutionCriteria.evolutionNumber,
      modificationRevisionNumber: evolutionCriteria.evolutionRevisionNumber,
      modificationTitle: evolutionCriteria.evolutionSummary
    };

    return super.post<BireModificationDTO, SearchResultsDTO<BireModificationDTO>>(
      this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignationAlternative,
      input
    );
  }

  public findSbListBySbIdAndDesignation(evolutionCriteria: BireEvolutionDTO): Observable<SearchResultsDTO<BireSbDTO>> {
    const input: BireSbDTO = {
      sbNumber: evolutionCriteria.evolutionNumber,
      sbRevisionNumber: evolutionCriteria.evolutionRevisionNumber,
      sbTitle: evolutionCriteria.evolutionSummary
    };

    return super.post<BireSbDTO, SearchResultsDTO<BireSbDTO>>(
      this.productStructureManagementApi.findBireSbsBySbPKAndDesignation,
      input
    );
  }
}
