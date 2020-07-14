import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtProductCustomerApi } from '../../../../shared/api/bidt-product-customer.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtTransferOrderApi } from '../../../../shared/api/bidt-transfer-order.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindBidoEquipmentsBySearchCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-bido-equipments-by-search-criteria-input.interface';
import { FindBidoEquipmentsDTOBySearchCriteriaOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-equipments-dto-by-search-criteria-output';
import { AttributeValueDTO } from '../../../../shared/types/api-types/attribute-value-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtProductCustomerDTO } from '../../../../shared/types/api-types/bidt-product-customer-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { SendToRepairDTO } from '../../../../shared/types/api-types/send-to-repair-dto.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class AssetSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtProductCustomerApi: BidtProductCustomerApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly bidtTransferOrderApi: BidtTransferOrderApi
  ) {
    super(http, appConfigService);
  }

  public findBidoEquipmentsDTOBySearchCriteria(
    findBidoEquipmentsBySearchCriteriaInput: FindBidoEquipmentsBySearchCriteriaInput
  ): Observable<SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>> {
    return super.post<
      FindBidoEquipmentsBySearchCriteriaInput,
      SearchResultsDTO<FindBidoEquipmentsDTOBySearchCriteriaOutput>
    >(this.assetManagementApi.searchEquipmentList, findBidoEquipmentsBySearchCriteriaInput);
  }

  public removeBidoEquipment(pnId: BidoEquipmentDTOId[]): Observable<void> {
    return super.post<BidoEquipmentDTOId[], void>(this.fleetManagementApi.removeBidoEquipmentList, pnId);
  }

  public getFamilyVariant(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeFamilyVariantList,
      input
    );
  }

  public getAssetSourceSystemIdList(bireId: BidoAttributeDTOId): Observable<LabelValue<string>[]> {
    return super.post<BidoAttributeDTOId, LabelValue<string>[]>(
      this.fleetManagementApi.getAssetSourceSystemIdList,
      bireId
    );
  }

  public getEquipmentLocationList(): Observable<AttributeValueDTO[]> {
    return super.post<void, AttributeValueDTO[]>(this.fleetManagementApi.getEquipmentLocationList);
  }

  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }

  public getOperationalStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public findBidoAttributesByAttributeCategory(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      attributeCategory
    );
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }

  public findAll(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  public lockTool(equipmentId: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetBusinessApi.lockEquipmentStructure, equipmentId);
  }

  public unlockTool(equipmentId: string): Observable<boolean> {
    return super.post<string, boolean>(this.fleetBusinessApi.unlockEquipmentStructure, equipmentId);
  }

  public findBidoEquipment(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipment,
      bidoEquipmentDTOId
    );
  }

  public findAircraftListLabelValue(): Observable<LabelValue<BidoEquipmentDTO>[]> {
    return super.post<string, LabelValue<BidoEquipmentDTO>[]>(this.fleetManagementApi.findAircraftListLabelValue);
  }

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public findCustomersByProduct(pnCode: string): Observable<BidtProductCustomerDTO[]> {
    return super.post<string, BidtProductCustomerDTO[]>(this.bidtProductCustomerApi.findByProduct, pnCode);
  }

  public findShipmentDfTypeById(id: number): Observable<BidtDfTypeDTO> {
    return super.post<number, BidtDfTypeDTO>(this.bidtDfTypeApi.findShipmentDfTypeById, id);
  }

  public getStockInformationByAsset(bidoEquipmentDTO: BidoEquipmentDTO): Observable<StockInformationDTO> {
    return super.post<BidoEquipmentDTO, StockInformationDTO>(
      this.bidoEquipmentApi.getStockInformationByAsset,
      bidoEquipmentDTO
    );
  }

  public findBirePn(pn: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, pn);
  }

  public findBidtWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.findBidtWarehouseById, id);
  }

  public validateSendToRepair(sendToRepair: SendToRepairDTO): Observable<void> {
    return super.post<SendToRepairDTO, void>(this.bidtTransferOrderApi.validateSendToRepair, sendToRepair);
  }
}
