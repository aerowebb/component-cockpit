import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureBusinessApi } from '../../../../shared/api/product-structure-business.api';
import { ProductStructureHistoryApi } from '../../../../shared/api/product-structure-history.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BirePackEvolutionInput } from '../../../../shared/types/api-input-types/product-structure-management/bire-pack-evolution-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBireRatingsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-ratings-by-search-criteria-input.interface';
import { SaveItemInput } from '../../../../shared/types/api-input-types/product-structure-management/save-item-input.interface';
import { FindAllBireTaskByCriteriaInput } from '../../../../shared/types/api-input-types/task-management/find-all-bire-task-by-criteria-inpuy.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { HistoricUpdatesItemOutput } from '../../../../shared/types/api-output-types/product-structure-history/historic-updates-item-output.interface';
import { BireItemPnEvolutionCustomDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-item-pn-evolution-custom-dto.interface';
import { BirePackEvolutionOutput } from '../../../../shared/types/api-output-types/product-structure-management/bire-pack-evolution-output.interface';
import { StructureItemScreenOutput } from '../../../../shared/types/api-output-types/product-structure-management/structure-item-screen-output.interface';
import { BireDamLocTaskOutput } from '../../../../shared/types/api-output-types/task-management/bire-dam-loc-task-output.interface';
import { BireReturnItemCustomDTO } from '../../../../shared/types/api-output-types/task-management/bire-return-item-custom-dto.interface';
import { DamagesWithItemVersionOutput } from '../../../../shared/types/api-output-types/task-management/damages-with-item-version-output.interface';
import { TaskAssociatedItemOutput } from '../../../../shared/types/api-output-types/task-management/task-associated-item-output.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDamageDTO } from '../../../../shared/types/api-types/bire-damage-dto.interface';
import { BireDocItemDTO } from '../../../../shared/types/api-types/bire-doc-item-dto.interface';
import { BireEvolutionItemDTO } from '../../../../shared/types/api-types/bire-evolution-item-dto.interface';
import { BireItemAttributeDTO } from '../../../../shared/types/api-types/bire-item-attribute-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemMaintenanceDTO } from '../../../../shared/types/api-types/bire-item-maintenance-dto.interface';
import { BireItemSiteDTO } from '../../../../shared/types/api-types/bire-item-site-dto.interface';
import { BireItemVersionDTOId } from '../../../../shared/types/api-types/bire-item-version-dto-id.interface';
import { BireLocalisationCodeDTO } from '../../../../shared/types/api-types/bire-localisation-code-dto.interface';
import { BireLocalisationItemDTO } from '../../../../shared/types/api-types/bire-localisation-item-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePackBaseOptionDTO } from '../../../../shared/types/api-types/bire-pack-base-option-dto.interface';
import { BireRatingDTO } from '../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireReturnReasonDTO } from '../../../../shared/types/api-types/bire-return-reason-dto.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { BireUnmountAssemblyDTO } from '../../../../shared/types/api-types/bire-unmount-assembly-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionMeasureDTO } from '../../../../shared/types/api-types/bire-version-measure-dto.interface';
import { EvolutionDetailDTO } from '../../../../shared/types/api-types/evolution-detail-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ItemFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly productStructureHistoryApi: ProductStructureHistoryApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi
  ) {
    super(http, appConfigService);
  }

  public isFollowedInRating(followedRatingInput: string): Observable<boolean> {
    return super.post<string, boolean>(this.productStructureBusinessApi.isFollowedInRating, followedRatingInput);
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEquipmentFunctionList);
  }

  public findBireItem(bireItemDTOId: BireItemDTOId): Observable<BireItemDTO> {
    return super.post<BireItemDTOId, BireItemDTO>(this.productStructureManagementApi.findBireItem, bireItemDTOId);
  }

  public findBireItemPnEvolutionsByItem(bireItemDTOId: BireItemDTOId): Observable<BireItemPnEvolutionCustomDTO[]> {
    return super.post<BireItemDTOId, BireItemPnEvolutionCustomDTO[]>(
      this.productStructureManagementApi.findBireItemPnEvolutionsByItem,
      bireItemDTOId
    );
  }

  public findBirePackBaseOptionsByItem(bireItemDTOId: BireItemDTOId): Observable<BirePackBaseOptionDTO[]> {
    return super.post<BireItemDTOId, BirePackBaseOptionDTO[]>(
      this.productStructureManagementApi.findBirePackBaseOptionsByItem,
      bireItemDTOId
    );
  }

  public findBireMaintenancePlansByItem(bireItemDTOId: BireItemDTOId): Observable<BireMaintenancePlanDTO[]> {
    return super.post<BireItemDTOId, BireMaintenancePlanDTO[]>(
      this.taskManagementApi.findAllBireMaintenancePlanByItem,
      bireItemDTOId
    );
  }

  public findBireTilItemsByItem(bireItemDTOId: BireItemDTOId): Observable<BireTilDTO[]> {
    return super.post<BireItemDTOId, BireTilDTO[]>(this.taskManagementApi.findBireTilItemsByItem, bireItemDTOId);
  }

  public findBireItemSitesByItem(bireItemDTOId: BireItemDTOId): Observable<BireItemSiteDTO[]> {
    return super.post<BireItemDTOId, BireItemSiteDTO[]>(
      this.productStructureManagementApi.findBireItemSitesByItem,
      bireItemDTOId
    );
  }

  public findBireReturnItem(bireItemDTOId: BireItemDTOId): Observable<BireReturnItemCustomDTO[]> {
    return super.post<BireItemDTOId, BireReturnItemCustomDTO[]>(
      this.taskManagementApi.findBireReturnItem,
      bireItemDTOId
    );
  }

  public findBireItemMaintenanceByItem(bireItemDTOId: BireItemDTOId): Observable<BireItemMaintenanceDTO[]> {
    return super.post<BireItemDTOId, BireItemMaintenanceDTO[]>(
      this.productStructureManagementApi.findBireItemMaintenanceByItem,
      bireItemDTOId
    );
  }

  public getPartNumberStructure(bireItemDTOId: BireItemDTOId): Observable<GetPartNumberStructureOutputDTO[]> {
    return super.post<BireItemDTOId, GetPartNumberStructureOutputDTO[]>(
      this.productStructureManagementApi.getPartNumberStructure,
      bireItemDTOId
    );
  }

  public findBireItemsBySearchCriteria(
    criteria: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      criteria
    );
  }

  public findBireItemAttributesByCategory(category: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(
      this.productStructureManagementApi.findBireItemAttributesByCategory,
      category
    );
  }

  public findBireItemAttributesByItem(bireItemDTOId: BireItemDTOId): Observable<BireItemAttributeDTO[]> {
    return super.post<BireItemDTOId, BireItemAttributeDTO[]>(
      this.productStructureManagementApi.findBireItemAttributesByItem,
      bireItemDTOId
    );
  }

  public getIsMELIsIllustratedSelected(bireItemDTOId: BireItemDTOId): Observable<BireItemAttributeDTO[]> {
    return super.post<BireItemDTOId, BireItemAttributeDTO[]>(
      this.productStructureManagementApi.getIsMELIsIllustratedSelected,
      bireItemDTOId
    );
  }

  public findAllBireTils(): Observable<BireTilDTO[]> {
    return super.post<void, BireTilDTO[]>(this.taskManagementApi.findAllBireTils);
  }

  public findAllBireSites(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public findAllBireReturnReasons(): Observable<BireReturnReasonDTO[]> {
    return super.post<void, BireReturnReasonDTO[]>(this.taskManagementApi.findAllBireReturnReasons);
  }

  public findBireKPourcentList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findBireKPourcentList);
  }

  public findBireMaintenanceEnvironmentsList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireMaintenanceEnvironmentsList
    );
  }

  public getStructureDetails(bireEvolutionItemDTO: BireEvolutionItemDTO): Observable<StructureItemScreenOutput[]> {
    return super.post<BireEvolutionItemDTO, StructureItemScreenOutput[]>(
      this.productStructureManagementApi.getStructureDetails,
      bireEvolutionItemDTO
    );
  }

  public findBireTaskItemsByItemTaskTab(bireItemDTOId: BireItemDTOId): Observable<TaskAssociatedItemOutput[]> {
    return super.post<BireItemDTOId, TaskAssociatedItemOutput[]>(
      this.taskManagementApi.findBireTaskItemsByItemTaskTab,
      bireItemDTOId
    );
  }

  public findBireDamageItemsByItemVersionItemScreen(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<DamagesWithItemVersionOutput[]> {
    return super.post<BireItemVersionDTOId, DamagesWithItemVersionOutput[]>(
      this.taskManagementApi.findBireDamageItemsByItemVersionItemScreen,
      bireItemVersionDTOId
    );
  }

  public findBireVersionMeasuresByItemVersion(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<BireVersionMeasureDTO[]> {
    return super.post<BireItemVersionDTOId, BireVersionMeasureDTO[]>(
      this.productStructureManagementApi.findBireVersionMeasuresByItemVersion,
      bireItemVersionDTOId
    );
  }

  public findBireMeasureReferencesBySearchCriteria(
    bireMeasureReferenceDTO: BireMeasureReferenceDTO
  ): Observable<SearchResultsDTO<BireMeasureReferenceDTO>> {
    return super.post<BireMeasureReferenceDTO, SearchResultsDTO<BireMeasureReferenceDTO>>(
      this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria,
      bireMeasureReferenceDTO
    );
  }

  public findAllBireMeasureReferenceByCriteria(
    bireMeasureReferenceDTO: BireMeasureReferenceDTO
  ): Observable<BireMeasureReferenceDTO[]> {
    return super.post<BireMeasureReferenceDTO, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findAllBireMeasureReferenceByCriteria,
      bireMeasureReferenceDTO
    );
  }

  public saveItem(saveItem: SaveItemInput): Observable<string> {
    return super.post<SaveItemInput, string>(this.productStructureManagementApi.saveItem, saveItem);
  }

  public findBireTasksByCriteria(criteria: FindAllBireTaskByCriteriaInput): Observable<SearchResultsDTO<BireTaskDTO>> {
    return super.post<FindAllBireTaskByCriteriaInput, SearchResultsDTO<BireTaskDTO>>(
      this.taskManagementApi.findAllBireTaskByCriteriaInput,
      criteria
    );
  }

  public findMROCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public findBireItemVersions(bireItemDTOId: BireItemDTOId): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTOId, LabelValue<string>[]>(
      this.productStructureManagementApi.findBireItemVersionsByItem,
      bireItemDTOId
    );
  }

  public findBireDamagesByCriteria(): Observable<BireDamageDTO[]> {
    return super.post<void, BireDamageDTO[]>(this.taskManagementApi.findBireDamagesByCriteria);
  }

  public findBireLocalisationItemsByItemVersion(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<BireLocalisationItemDTO[]> {
    return super.post<BireItemVersionDTOId, BireLocalisationItemDTO[]>(
      this.taskManagementApi.findBireLocalisationItemsByItemVersion,
      bireItemVersionDTOId
    );
  }

  public findBireLocalisationCodesByCriteria(): Observable<SearchResultsDTO<BireLocalisationCodeDTO>> {
    return super.post<void, SearchResultsDTO<BireLocalisationCodeDTO>>(
      this.taskManagementApi.findBireLocalisationCodesByCriteria
    );
  }

  public findBireDamLocTasksByItemVersion(
    bireItemVersionDTOId: BireItemVersionDTOId
  ): Observable<BireDamLocTaskOutput[]> {
    return super.post<BireItemVersionDTOId, BireDamLocTaskOutput[]>(
      this.taskManagementApi.findBireDamLocTasksByItemVersion,
      bireItemVersionDTOId
    );
  }

  public findBireActionTypesByActionTypeCode(code: string): Observable<LabelValue<String>[]> {
    return super.post<string, LabelValue<String>[]>(
      this.productStructureManagementApi.findBireActionTypesByActionTypeCode,
      code
    );
  }

  public findBireUnmountAssemblysByFamilyAndVariantCodes(
    bireVariantVersionDTOId: BireVariantVersionDTOId
  ): Observable<BireUnmountAssemblyDTO[]> {
    return super.post<BireVariantVersionDTOId, BireUnmountAssemblyDTO[]>(
      this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodes,
      bireVariantVersionDTOId
    );
  }

  public findHistoricOfObjectByPk(objId: BireItemDTOId): Observable<SearchResultsDTO<HistoricUpdatesItemOutput>> {
    return super.post<BireItemDTOId, SearchResultsDTO<HistoricUpdatesItemOutput>>(
      this.productStructureHistoryApi.findHistoricOfObjectByPk,
      objId
    );
  }

  public findBireRatingsBySearchCriteria(
    bireRatingCriteria: BireRatingDTO,
    variantCodeCriteria?: string
  ): Observable<SearchResultsDTO<BireRatingDTO>> {
    const searchCriteria: FindBireRatingsBySearchCriteriaInput = {
      bireRatingDTOCriteria: bireRatingCriteria,
      variantCode: variantCodeCriteria,
      useCaseCode: BidoFunctionTypeConstants.UC_MCH_BOM
    };

    return super.post<FindBireRatingsBySearchCriteriaInput, SearchResultsDTO<BireRatingDTO>>(
      this.productStructureManagementApi.findBireRatingsBySearchCriteria,
      searchCriteria
    );
  }

  public findBireDocItemsByItem(input: BireItemDTOId): Observable<BireDocItemDTO[]> {
    return super.post<BireItemDTOId, BireDocItemDTO[]>(
      this.productStructureManagementApi.findBireDocItemsByItem,
      input
    );
  }

  public findBirePackBaseOptionsByItemTab(input: BireItemDTO): Observable<BirePackBaseOptionDTO[]> {
    return super.post<BireItemDTO, BirePackBaseOptionDTO[]>(
      this.productStructureManagementApi.findBirePackBaseOptionsByItemTab,
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

  public findBireEvolutionsByFamilyAndVariantCodesItemPack(
    input: BireVariantVersionDTOId
  ): Observable<EvolutionDetailDTO[]> {
    return super.post<BireVariantVersionDTOId, EvolutionDetailDTO[]>(
      this.productStructureManagementApi.findBireEvolutionsByFamilyAndVariantCodesItemPack,
      input
    );
  }

  public getPackType(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.getPackType);
  }
}
