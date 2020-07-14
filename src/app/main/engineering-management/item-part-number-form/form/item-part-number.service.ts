import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureBusinessApi } from '../../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ConfigurationPackListInput } from '../../../../shared/types/api-input-types/product-structure-management/configuration-pack-list-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { ItemStructurePropertyValueInput } from '../../../../shared/types/api-input-types/product-structure-management/item-structure-property-value-input.interface';
import { SaveBireConfigurationAndPacksInput } from '../../../../shared/types/api-input-types/product-structure-management/save-bire-configuration-and-packs-input-dto.interface';
import { SaveItemVersionPnInput } from '../../../../shared/types/api-input-types/product-structure-management/save-item-version-pn-input.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { ItemPartNumberOutput } from '../../../../shared/types/api-output-types/product-structure-management/item-part-number-output.interface';
import { BireAlternativePnDTO } from '../../../../shared/types/api-types/bire-alternative-pn-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConfigurationDTO } from '../../../../shared/types/api-types/bire-configuration-dto.interface';
import { BireConfigurationPackDTO } from '../../../../shared/types/api-types/bire-configuration-pack-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemVersionDTOId } from '../../../../shared/types/api-types/bire-item-version-dto-id.interface';
import { BireItemVersionDTO } from '../../../../shared/types/api-types/bire-item-version-dto.interface';
import { BireModelDTO } from '../../../../shared/types/api-types/bire-model-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionPnDTOId } from '../../../../shared/types/api-types/bire-version-pn-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemPartNumberService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagement: ProductStructureManagementApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi
  ) {
    super(http, appConfigService);
  }

  public getISNOptions(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagement.findAllIsnAtasAsStrings);
  }

  public findBireVersionPNsByItemVersion(input: BireItemVersionDTOId): Observable<BireVersionPnDTO[]> {
    return super.post<BireItemVersionDTOId, BireVersionPnDTO[]>(
      this.productStructureManagement.findBireVersionPnsByItemVersion,
      input
    );
  }

  public getPartNumberStructure(bireItemDTOId: BireItemDTOId): Observable<GetPartNumberStructureOutputDTO[]> {
    return super.post<BireItemDTOId, GetPartNumberStructureOutputDTO[]>(
      this.productStructureManagement.getPartNumberStructure,
      bireItemDTOId
    );
  }

  public getItemPartNumberDetails(input: BireVersionPnDTOId): Observable<ItemPartNumberOutput> {
    return super.post<BireVersionPnDTOId, ItemPartNumberOutput>(
      this.productStructureManagement.getItemPartNumberDetails,
      input
    );
  }

  public findBireModelsByVariantPk(input: BireVariantVersionDTOId): Observable<SearchResultsDTO<BireModelDTO>> {
    return super.post<BireVariantVersionDTOId, SearchResultsDTO<BireModelDTO>>(
      this.productStructureManagement.findBireModelsByVariantPK,
      input
    );
  }

  public findBirePnsBySearchCriteria(
    criteria: BirePnDTO,
    familyCode: string,
    structureType: string,
    variantCode: string
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    const params: FindBirePnsBySearchCriteriaPSMInput = {
      birePnDTOCriteria: criteria,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagement.findBirePnsBySearchCriteria,
      params
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
      }
    };

    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagement.findBireItemsBySearchCriteria,
      params
    );
  }

  public getItemPartNumberPropertyValue(input: ItemStructurePropertyValueInput): Observable<string> {
    return super.post<ItemStructurePropertyValueInput, string>(
      this.productStructureManagement.getItemPartNumberPropertyValue,
      input
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagement.findBireAttributesByCategoryForPnTab,
      category
    );
  }

  public saveItemPartNumber(input: SaveItemVersionPnInput): Observable<BireVersionPnDTOId> {
    return super.post<SaveItemVersionPnInput, BireVersionPnDTOId>(
      this.productStructureManagement.saveItemPartNumber,
      input
    );
  }

  public findBireVersionPn(input: BireVersionPnDTOId): Observable<BireVersionPnDTO> {
    return super.post<BireVersionPnDTOId, BireVersionPnDTO>(this.productStructureManagement.findBireVersionPn, input);
  }

  public removeBireAlternativePnList(input: BireAlternativePnDTO[]): Observable<boolean> {
    return super.post<BireAlternativePnDTO[], boolean>(
      this.productStructureManagement.removeBireAlternativePnList,
      input
    );
  }

  public findBireConfigurationsByItemVersion(input: BireItemVersionDTO): Observable<BireConfigurationDTO[]> {
    return super.post<BireItemVersionDTO, BireConfigurationDTO[]>(
      this.productStructureManagement.findBireConfigurationsByItemVersion,
      input
    );
  }

  public verifyEvolutionInterdependenceForConfiguration(input: BireConfigurationDTO): Observable<string> {
    return super.post<BireConfigurationDTO, string>(
      this.productStructureBusinessApi.verifyEvolutionInterdependenceForConfiguration,
      input
    );
  }

  public findBirePackBaseOptionsByItemDropDown(input: BireItemDTO): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTO, LabelValue<string>[]>(
      this.productStructureManagement.findBirePackBaseOptionsByItemDropDown,
      input
    );
  }

  public saveBireConfigurationAndPacks(input: SaveBireConfigurationAndPacksInput): Observable<void> {
    return super.post<SaveBireConfigurationAndPacksInput, void>(
      this.productStructureManagement.saveBireConfigurationAndPacks,
      input
    );
  }

  public findBireConfigurationPacksByItemVersionAndConfigurationCode(
    input: ConfigurationPackListInput
  ): Observable<BireConfigurationPackDTO[]> {
    return super.post<SaveBireConfigurationAndPacksInput, BireConfigurationPackDTO[]>(
      this.productStructureManagement.findBireConfigurationPacksByItemVersionAndConfigurationCode,
      input
    );
  }

  public findBireItem(bireItemDTOId: BireItemDTOId): Observable<BireItemDTO> {
    return super.post<BireItemDTOId, BireItemDTO>(this.productStructureManagement.findBireItem, bireItemDTOId);
  }
}
