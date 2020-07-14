import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureBusinessApi } from '../../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { FindBidoVariantVersionsInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-variant-versions-input.interface';
import { FindBireItemsBySearchCriteriaFMInput } from '../../../../shared/types/api-input-types/fleet-management/find-bire-items-by-search-criteria-fm-input.interface';
import { GetIsConfigurationTrackedInput } from '../../../../shared/types/api-input-types/fleet-management/get-isconfiguration-tracked-input.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { BidtStockMvtMmfOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/bidt-stock-mvt-mmf-output-dto.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { EquipmentTreeNodeOutput } from '../../../../shared/types/api-output-types/fleet-management/equipment-tree-node-output';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { AssetStructureTableDto } from '../../../../shared/types/api-types/asset-structure-table-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCounterReferenceDTOId } from '../../../../shared/types/api-types/bido-counter-reference-dto-id.interface';
import { BidoCounterReferenceDTO } from '../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentAttributeDTOId } from '../../../../shared/types/api-types/bido-equipment-attribute-dto-id.interface';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentCounterDTO } from '../../../../shared/types/api-types/bido-equipment-counter-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../../../shared/types/api-types/bido-equipment-evolution-input-output-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { ReportDTO } from '../../../../shared/types/api-types/report-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

@Injectable()
export class AssetFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi,
    private readonly propertiesService: PropertiesService,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly bidtDfTypeApi: BidtDfTypeApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipment(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipment,
      bidoEquipmentDTOId
    );
  }

  public findBidoEquipmentAlternative(asset: AssetInputDto): Observable<AssetOutputDto> {
    return super.post<AssetInputDto, AssetOutputDto>(this.assetManagementApi.getAssetByCode, asset);
  }

  public getSubEquipments(equipmentCode: string): Observable<AssetStructureTableDto[]> {
    return super.get<AssetStructureTableDto[]>(this.assetManagementApi.getSubEquipments + '/' + equipmentCode);
  }

  public getEvents(equipmentCode: string): Observable<AssetOutputDto> {
    return super.get<AssetOutputDto>(this.assetManagementApi.getEvents + '/' + equipmentCode);
  }

  public getEvolutions(equipmentCode: string): Observable<BidoEquipmentEvolutionInputOutputDTO[]> {
    return super.get<BidoEquipmentEvolutionInputOutputDTO[]>(
      this.assetManagementApi.getEvolutions + '/' + equipmentCode
    );
  }
  public findFamilyVariant(): Observable<FamilyVariantDTO[]> {
    return super.post<void, FamilyVariantDTO[]>(this.fleetManagementApi.findFamilyVariant);
  }

  public findBidoVariantVersions(
    findBidoVariantVersionsInput: FindBidoVariantVersionsInput
  ): Observable<SearchResultsDTO<BireFamilyDTO>> {
    return super.post<FindBidoVariantVersionsInput, SearchResultsDTO<BireFamilyDTO>>(
      this.fleetManagementApi.findBidoVariantVersions,
      findBidoVariantVersionsInput
    );
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFamilyFunctionMap');
  }

  public getStructureTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getStructureTypeMap');
  }

  public getCountryZoneMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getCountryZoneMap');
  }

  public getPositionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getPositionMap');
  }

  public findCountriesByZone(zone: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findCountriesByZone, zone);
  }
  public findZoneByCountries(country: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.fleetManagementApi.findZoneByCountries, country);
  }

  public getAssetSourceSystemIdList(bireId: BidoAttributeDTOId): Observable<LabelValue<string>[]> {
    return super.post<BidoAttributeDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.getAssetSourceSystemIdList,
      bireId
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public findBidoAttributesByAttributeCategory(category: string): Observable<BidoAttributeDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      category
    );
  }

  public findBireItemsBySearchCriteria(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      findBireItemsBySearchCriteriaInput
    );
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }

  public findBireItemsBySearchCriteriaFM(
    criteria: FindBireItemsBySearchCriteriaFMInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaFMInput, SearchResultsDTO<BireItemDTO>>(
      this.fleetManagementApi.findBireItemsBySearchCriteriaFM,
      criteria
    );
  }

  public findBirePnsBySearchCriteria(
    criteria: BirePnDTO,
    familyCode: string,
    structureType: string,
    variantCode: string,
    pnType: string | undefined,
    toolSearch: boolean
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    const params: FindBirePnsBySearchCriteriaPSMInput = {
      birePnDTOCriteria: criteria,
      familyCode,
      structureType,
      variantCode,
      pnType,
      toolSearch
    };

    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      params
    );
  }

  public getOperationalStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      // this.productStructureManagementApi.initializeOperationalStatusList,
      this.fleetManagementApi.getOperationalStatusMap,
      input
    );
  }

  public getStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }

  public findBidoAssetStructure(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<EquipmentTreeNodeOutput> {
    return super.post<BidoEquipmentDTOId, EquipmentTreeNodeOutput>(
      this.fleetManagementApi.findBidoAssetStructure,
      bidoEquipmentDTOId
    );
  }

  // Measures Tab

  public findBidoCounterReferencesByEquipmentCode(
    bidoEquipmentDTO: BidoEquipmentDTO
  ): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<BidoEquipmentDTO, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.fleetManagementApi.findBidoCounterReferencesByEquipmentCode,
      bidoEquipmentDTO
    );
  }

  public createBidoEquipmentCounter(
    bidoEquipmentCounterDTO: BidoEquipmentCounterDTO
  ): Observable<BidoEquipmentCounterDTOId> {
    return super.post<BidoEquipmentCounterDTO, BidoEquipmentCounterDTOId>(
      this.fleetManagementApi.createBidoEquipmentCounter,
      bidoEquipmentCounterDTO
    );
  }

  public createBidoCounterReference(
    bidoEquipmentCounterDTO: BidoCounterReferenceDTO
  ): Observable<BidoCounterReferenceDTOId> {
    return super.post<BidoCounterReferenceDTO, BidoCounterReferenceDTOId>(
      this.fleetManagementApi.createBidoCounterReference,
      bidoEquipmentCounterDTO
    );
  }

  public removeBidoEquipmentCounter(bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId[]): Observable<void> {
    return super.post<BidoEquipmentCounterDTOId[], void>(
      this.fleetManagementApi.removeBidoEquipmentCounter,
      bidoEquipmentCounterDTOId
    );
  }

  public getMeasureTabData(
    bidoEquipmentDTO: BidoEquipmentDTO
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentDTO, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.assetManagementApi.fetchMeasureTableData,
      bidoEquipmentDTO
    );
  }

  public findAllTypes(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findBidoTypeByValue);
  }

  public updateAsset(assetOutputDto: AssetOutputDto): Observable<void> {
    return super.post<AssetOutputDto, void>(this.assetManagementApi.updateAsset, assetOutputDto);
  }

  public createBidoNotification(bidoNotificationDTO: BidoNotificationDTO[]): Observable<void> {
    return super.post<BidoNotificationDTO[], void>(this.assetManagementApi.createBidoNotification, bidoNotificationDTO);
  }
  public saveCreateAsset(bidoEquipmentDTO: BidoEquipmentDTO): Observable<BidoEquipmentDTOId> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTOId>(this.assetManagementApi.createAsset, bidoEquipmentDTO);
  }

  public propagateEisDate(bidoEquipmentDTO: BidoEquipmentDTO): Observable<void> {
    return super.post<BidoEquipmentDTO, void>(this.fleetBusinessApi.propagateEISDateOfEquipment, bidoEquipmentDTO);
  }
  public FindConfigurationTracked(input: GetIsConfigurationTrackedInput): Observable<boolean> {
    return super.post<GetIsConfigurationTrackedInput, boolean>(
      this.productStructureBusinessApi.isConfigurationTracked,
      input
    );
  }

  public findAllBidoNotificationTypeByTypeCategory(typeCategory: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.assetManagementApi.findAllBidoNotificationTypeByTypeCategory,
      typeCategory
    );
  }

  public getMeasureDetailTableData(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentCounterDTOId, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.fleetBusinessApi.findBidoMeasuresByEquipmentAndCounterCodes,
      bidoEquipmentCounterDTOId
    );
  }

  public findBidoCounterReference(
    bidoCounterReferenceDTOId: BidoCounterReferenceDTOId
  ): Observable<BidoCounterReferenceDTO> {
    return super.post<BidoCounterReferenceDTOId, BidoCounterReferenceDTO>(
      this.fleetManagementApi.findBidoCounterReference,
      bidoCounterReferenceDTOId
    );
  }

  public verifyBidoCounterReference(bidoCounterReferenceDTOId: BidoCounterReferenceDTOId): Observable<boolean> {
    return super.post<BidoCounterReferenceDTOId, boolean>(
      this.fleetManagementApi.verifyBidoCounterReference,
      bidoCounterReferenceDTOId
    );
  }

  public isFollowedInRating(followedRatingInput: string): Observable<boolean> {
    return super.post<string, boolean>(this.productStructureBusinessApi.isFollowedInRating, followedRatingInput);
  }

  public findAllBireMeasureReferences(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(this.fleetManagementApi.findAllBireMeasureReferences);
  }

  public getCsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
  }

  public getTsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
  }

  public lockTool(equipmentId: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetBusinessApi.lockEquipmentStructure, equipmentId);
  }

  public unlockTool(equipmentId: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetBusinessApi.unlockEquipmentStructure, equipmentId);
  }

  public findBidoNotification(bidoNotificationDTOId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      bidoNotificationDTOId
    );
  }

  public findHBidoEquipmentAttributesByAttributeId(
    ids: BidoEquipmentAttributeDTOId[]
  ): Observable<HBidoEquipmentAttributeDTO[]> {
    return super.post<BidoEquipmentAttributeDTOId[], HBidoEquipmentAttributeDTO[]>(
      this.fleetHistoryApi.findHBidoEquipmentAttributesByAttributeId,
      ids
    );
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }

  public checkIfAssetIsConcernedBySbAdEvoMod(input: string): Observable<ReportDTO> {
    return super.post<string, ReportDTO>(this.fleetBusinessApi.checkIfAssetIsConcernedBySbAdEvoMod, input);
  }

  public findBidtStockMvtMmf(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<BidtStockMvtMmfOutputDTO> {
    return super.post<BidoEquipmentDTOId, BidtStockMvtMmfOutputDTO>(
      this.bidtStockMvtApi.findBidtStockMvtMmf,
      bidoEquipmentDTOId
    );
  }

  public fetchTransferOrderTypeList(): Observable<LabelValue<number>[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes).pipe(
      map((dfTypes) => {
        return ListUtils.orEmpty(dfTypes).map((dfType) => {
          return {
            label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
            value: dfType.id as number
          };
        });
      })
    );
  }
}
