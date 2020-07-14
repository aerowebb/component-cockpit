import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureBusinessApi } from '../../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { CheckIpcDataInput } from '../../../../shared/types/api-input-types/product-structure-business/check-ipc-data-input.interface';
import { FindAllBireAlternativePnByItemVersionAndPnCodeInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-alternative-pn-by-item-version-and-pn-code-input.interface';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { FindBireItemListByItemFatherInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-item-list-by-item-father-input.interface';
import { FindBireModificationsByModificationPKAndDesignationInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-modifications-by-modification-pk-and-designation-input.interface';
import { FindBireRatingsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-ratings-by-search-criteria-input.interface';
import { FindBireSbsBySbCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { FindBireQualificationsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/task-management/find-bire-qualifications-by-search-criteria-input.interface';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { ACTreeNode } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-node-output';
import { BireAlternativePnDTO } from '../../../../shared/types/api-types/bire-alternative-pn-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocItemDTO } from '../../../../shared/types/api-types/bire-doc-item-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-evolution-dto.interface';
import { BireEvolutionSbDTOId } from '../../../../shared/types/api-types/bire-evolution-sb-dto-id.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModificationDTO } from '../../../../shared/types/api-types/bire-modification-dto.interface';
import { BirePartnerDTO } from '../../../../shared/types/api-types/bire-partner-dto.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireRatingDTO } from '../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../../shared/types/api-types/bire-sb-dto.interface';
import { BireUnmountAssemblyDTO } from '../../../../shared/types/api-types/bire-unmount-assembly-dto.interface';
import { BireUnmountOrderDTO } from '../../../../shared/types/api-types/bire-unmount-order-dto.interface';
import { BireVariantAttributeDTO } from '../../../../shared/types/api-types/bire-variant-attribute-dto.interface';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { ConfigurationDocumentsDTO } from '../../../../shared/types/api-types/configuration-documents-dto.interface';
import { EvolutionInterdependencesListDTO } from '../../../../shared/types/api-types/evolution-interdependences-list-dto.interface';
import { FindEvolutionModificationSbAdListDTO } from '../../../../shared/types/api-types/find-evolution-modification-sbad-list-dto.interface';
import { ReportDTO } from '../../../../shared/types/api-types/report-dto.interface';
import { SaveApplicationConfigurationDataInput } from '../../../../shared/types/api-types/save-applicable-configuration-screen-input';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ApplicableConfigurationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  // To bind table of configuration documnets  tab
  public findBireModificationVariantsBySearchCriteria(criteria): Observable<ConfigurationDocumentsDTO[]> {
    return super.post<BireVariantVersionDTOId, ConfigurationDocumentsDTO[]>(
      this.productStructureManagementApi.findBireModificationVariantsBySearchCriteria,
      criteria
    );
  }

  // To bind table of Documnets matching tab
  public findEvolutionModificationSbadList(criteria): Observable<FindEvolutionModificationSbAdListDTO[]> {
    return super.post<BireVariantVersionDTOId, FindEvolutionModificationSbAdListDTO[]>(
      this.productStructureManagementApi.findEvolutionModificationSbadList,
      criteria
    );
  }

  // To bind interdependence tab
  public findAllBireApplicabilitys(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireApplicabilitys);
  }

  // To bind table of Evolution Interdependences tab
  public findBireEvolutionEvolutionsByFamilyAndVariantCodes(criteria): Observable<EvolutionInterdependencesListDTO[]> {
    return super.post<BireVariantVersionDTOId, EvolutionInterdependencesListDTO[]>(
      this.productStructureManagementApi.findBireEvolutionEvolutionsByFamilyAndVariantCodes,
      criteria
    );
  }

  // To bind interdependence tab
  public findAllBireInterdependences(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireInterdependences);
  }

  public getComplianceMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getComplianceMap');
  }

  public getEvolutionLevelMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionLevelMap');
  }

  public getEvolutionTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getEvolutionTypeMap');
  }

  // To bind the evolution popup
  public findBireEvolutionsByEvolutionCriteria(
    evolution: BireEvolutionDTO,
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: evolution,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  // To bind family code popup
  public findFamilyVariantVersion(): Observable<SearchResultsDTO<BireVariantDTO>> {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: 'UC50',
      module: 'FAMILY'
    };

    return super.post<FindFamilyVariantInput, SearchResultsDTO<BireVariantDTO>>(
      this.productStructureManagementApi.findFamilyVariantVersion,
      familyVariantInput
    );
  }

  // To display sb,ad,mod in table on validate
  public findSbAdModForBireEvolutionEvolutionDto(
    evolution: BireEvolutionEvolutionDTO
  ): Observable<EvolutionInterdependencesListDTO> {
    return super.post<BireEvolutionEvolutionDTO, EvolutionInterdependencesListDTO>(
      this.productStructureManagementApi.findSbAdModForBireEvolutionEvolutionDto,
      evolution
    );
  }

  // To bind table of Disassembly tab
  public findBireUnmountAssemblysByFamilyAndVariantCodes(criteria): Observable<BireUnmountAssemblyDTO[]> {
    return super.post<BireVariantVersionDTOId, BireUnmountAssemblyDTO[]>(
      this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodes,
      criteria
    );
  }

  // To bind table of removal order tab
  public findBireUnmountOrdersByFamilyAndVariantCodes(criteria): Observable<BireUnmountOrderDTO[]> {
    return super.post<BireVariantVersionDTOId, BireUnmountOrderDTO[]>(
      this.productStructureManagementApi.findBireUnmountOrdersByFamilyAndVariantCodes,
      criteria
    );
  }

  // To bind removal order dropdown
  public findBireUnmountAssemblysByFamilyAndVariantCodesDropdownRemovalOrder(
    criteria
  ): Observable<LabelValue<string>[]> {
    return super.post<BireVariantVersionDTOId, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodesDropdownRemovalOrder,
      criteria
    );
  }

  // To bind item structure tree
  public findTopFathersBireItemsByFamilyAndVariantCodes(criteria: BireVariantVersionDTOId): Observable<ACTreeNode[]> {
    return super.post<BireVariantVersionDTOId, ACTreeNode[]>(
      this.productStructureManagementApi.findTopFathersBireItemsByFamilyAndVariantCodes,
      criteria
    );
  }

  // To bind item structure tree
  public getItemStructureForTree(criteria: BireVariantVersionDTOId): Observable<ACTreeData[]> {
    return super.post<BireVariantVersionDTOId, ACTreeData[]>(
      this.productStructureBusinessApi.getItemStructureForTree,
      criteria
    );
  }

  public saveApplicationConfigurationData(
    applicableConfig: SaveApplicationConfigurationDataInput
  ): Observable<boolean> {
    return super.post<SaveApplicationConfigurationDataInput, boolean>(
      this.productStructureManagementApi.saveApplicationConfigurationData,
      applicableConfig
    );
  }

  public getLocalCurrency(): Observable<string> {
    return super.post<void, string>(this.taskManagementApi.getLocalCurrency);
  }

  public findBirePartnersByVariant(criteria): Observable<BirePartnerDTO[]> {
    return super.post<BireVariantVersionDTOId, BirePartnerDTO[]>(
      this.productStructureManagementApi.findBirePartnersByVariant,
      criteria
    );
  }

  public findConfigurationDocuments(criteria): Observable<ConfigurationDocumentsDTO[]> {
    return super.post<BireVariantVersionDTOId, ConfigurationDocumentsDTO[]>(
      this.productStructureManagementApi.findBireModificationVariantsBySearchCriteria,
      criteria
    );
  }

  public findBireQualificationsByVariantPK(criteria): Observable<BireQualificationDTO[]> {
    return super.post<BireVariantVersionDTOId, BireQualificationDTO[]>(
      this.productStructureManagementApi.findBireQualificationsByVariantPK,
      criteria
    );
  }

  // To bind findOEMPartnersBySearchCriteria tab
  public findOEMPartnersBySearchCriteria(bidoCustomer): Observable<LabelValue<string>[]> {
    return super.post<BireVariantVersionDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.findOEMPartnersBySearchCriteria,
      bidoCustomer
    );
  }

  public findBireSb(bireSbId: BireSbDTOId): Observable<BireSbDTO> {
    return super.post<BireSbDTOId, BireSbDTO>(this.productStructureManagementApi.findBireSb, bireSbId);
  }

  public findBireEvolution(evolution: BireEvolutionDTOId): Observable<BireEvolutionDTO> {
    return super.post<BireEvolutionDTOId, BireEvolutionDTO>(
      this.productStructureManagementApi.findBireEvolution,
      evolution
    );
  }

  public findQualification(searchObject: BireQualificationDTO): Observable<SearchResultsDTO<BireQualificationDTO>> {
    const param: FindBireQualificationsBySearchCriteriaInput = {
      bireQualification: searchObject,
      bireTask: {}
    };

    return super.post<FindBireQualificationsBySearchCriteriaInput, SearchResultsDTO<BireQualificationDTO>>(
      this.taskManagementApi.findBireQualificationsBySearchCriteria,
      param
    );
  }

  public findBireAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireAttributesByCategory,
      category
    );
  }

  public findBireVariantAttributesByVariantVersion(
    bireVariantVersionDTOId: BireVariantVersionDTOId
  ): Observable<BireVariantAttributeDTO[]> {
    return super.post<BireVariantVersionDTOId, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireVariantAttributesByVariantVersion,
      bireVariantVersionDTOId
    );
  }

  public findBireVersionPnsByItem(input: BireItemDTO): Observable<BireVersionPnDTO[]> {
    return super.post<BireItemDTO, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByItem,
      input
    );
  }

  public checkIpcData(input: CheckIpcDataInput): Observable<ReportDTO> {
    return super.post<CheckIpcDataInput, ReportDTO>(this.productStructureBusinessApi.checkIpcData, input);
  }

  public findTopFatherBireItemListByFamilyCodeAndVariantCode(
    input: BireVariantVersionDTOId
  ): Observable<BireItemDTO[]> {
    return super.post<BireVariantVersionDTOId, BireItemDTO[]>(
      this.productStructureManagementApi.findTopFatherBireItemListByFamilyCodeAndVariantCode,
      input
    );
  }

  public findBireItemListByItemFather(input: FindBireItemListByItemFatherInput): Observable<BireItemDTO[]> {
    return super.post<FindBireItemListByItemFatherInput, BireItemDTO[]>(
      this.productStructureManagementApi.findBireItemListByItemFather,
      input
    );
  }

  public findBireSbsBySbCriteria(): Observable<SearchResultsDTO<BireSbDTO>> {
    const bireSbDTO: BireSbDTO = {
      sbNumber: undefined
    };
    const criteria: FindBireSbsBySbCriteriaInput = {
      bireSbDTO,
      familyCode: undefined,
      structureType: undefined,
      variantCode: undefined,
      publicationDateFrom: undefined,
      publicationDateTo: undefined,
      effectiveDateFrom: undefined,
      effectiveDateTo: undefined
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireEvolutionSbDTOId>>(
      this.productStructureManagementApi.findBireSbsBySbCriteria,
      criteria
    );
  }

  public findBireModificationsByModificationPKAndDesignation(
    bireModificationDTO?: BireModificationDTO,
    designation?: string
  ): Observable<SearchResultsDTO<BireModificationDTO>> {
    const findBireModificationsByModificationPKAndDesignationInput = {
      bireModificationDTO,
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      useCase: BidoFunctionTypeConstants.UC_MCH_BOM
    };

    return super.post<FindBireModificationsByModificationPKAndDesignationInput, SearchResultsDTO<BireModificationDTO>>(
      this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignation,
      findBireModificationsByModificationPKAndDesignationInput
    );
  }

  public findBireDocItemsByItem(input: BireItemDTOId): Observable<BireDocItemDTO[]> {
    return super.post<BireItemDTOId, BireDocItemDTO[]>(
      this.productStructureManagementApi.findBireDocItemsByItem,
      input
    );
  }

  public findAllBireAlternativePnByItemVersionAndPnCode(
    input: FindAllBireAlternativePnByItemVersionAndPnCodeInput
  ): Observable<BireAlternativePnDTO[]> {
    return super.post<FindAllBireAlternativePnByItemVersionAndPnCodeInput, BireAlternativePnDTO[]>(
      this.productStructureManagementApi.findAllBireAlternativePnByItemVersionAndPnCode,
      input
    );
  }

  public findAllBireFamilys(): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<void, SearchResultsDTO<BireFamilyDTO>>(this.productStructureManagementApi.findAllBireFamilys);
  }

  public findBireRatingsByVariantPK(bireVariantVersionDTOId: BireVariantVersionDTOId): Observable<BireRatingDTO[]> {
    return super.post<BireVariantVersionDTOId, BireRatingDTO[]>(
      this.productStructureManagementApi.findBireRatingsByVariantPK,
      bireVariantVersionDTOId
    );
  }

  public findBireRatingsBySearchCriteria(
    findBireRatingsBySearchCriteriaInput: FindBireRatingsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireRatingDTO>> {
    return super.post<FindBireRatingsBySearchCriteriaInput, SearchResultsDTO<BireRatingDTO>>(
      this.productStructureManagementApi.findBireRatingsBySearchCriteria,
      findBireRatingsBySearchCriteriaInput
    );
  }
}
