import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { FleetHistoryApi } from '../../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetInputDto } from '../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { FindBireItemsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BidtStockMvtMmfOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/bidt-stock-mvt-mmf-output-dto.interface';
import { AssetOutputDto } from '../../../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentAttributeDTOId } from '../../../../shared/types/api-types/bido-equipment-attribute-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class PackagingBatchFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly propertiesService: PropertiesService,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentAlternative(asset: AssetInputDto): Observable<AssetOutputDto> {
    return super.post<AssetInputDto, AssetOutputDto>(this.assetManagementApi.getAssetByCode, asset);
  }

  public findBidoAttributesByAttributeCategory(category: string): Observable<BidoAttributeDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      category
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

  public findSubBatches(assetCode: string): Observable<BidoEquipmentDTO[]> {
    const obj: BidoEquipmentDTOId = {
      equipmentCode: assetCode
    };

    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO[]>(this.bidoEquipmentApi.findSubBatches, obj);
  }

  public addOrUpdateBatch(equipmentObject: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.bidoEquipmentApi.addOrUpdateBatch, equipmentObject);
  }

  public getTopManufacturingBatch(equipmentCode: string): Observable<ReferenceBatchDTO> {
    return super.post<string, ReferenceBatchDTO>(this.bidoEquipmentApi.getTopManufacturingBatch, equipmentCode);
  }

  public batchData() {
    return {
      manufaturingBatchNumber: '519000',
      batchQuantity: '1500',
      manufaturingBatchDate: new Date(),
      originalPackagingBatchNumber: '519000-01',
      originalPackagingBatchQuantity: '500',
      originalPackagingBatchDate: new Date(),
      batchNumber: '519000-10',
      expirationDate: new Date(),
      quantity: '150'
    };
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

  public findBireItemsBySearchCriteria(
    findBireItemsBySearchCriteriaInput: FindBireItemsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<BireItemDTO>> {
    return super.post<FindBireItemsBySearchCriteriaInput, SearchResultsDTO<BireItemDTO>>(
      this.productStructureManagementApi.findBireItemsBySearchCriteria,
      findBireItemsBySearchCriteriaInput
    );
  }

  public getCountryZoneMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.COUNTRY_ZONE_MAP);
  }

  public getPositionMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.POSITION_MAP);
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }

  public findBidtStockMvtMmf(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<BidtStockMvtMmfOutputDTO> {
    return super.post<BidoEquipmentDTOId, BidtStockMvtMmfOutputDTO>(
      this.bidtStockMvtApi.findBidtStockMvtMmf,
      bidoEquipmentDTOId
    );
  }

  public getStockInformationByAsset(bidoEquipmentDTO: BidoEquipmentDTO): Observable<StockInformationDTO> {
    return super.post<BidoEquipmentDTO, StockInformationDTO>(
      this.bidoEquipmentApi.getStockInformationByAsset,
      bidoEquipmentDTO
    );
  }

  public getShipmentDfTypes(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes);
  }
}
