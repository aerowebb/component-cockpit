import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { BidtDeliveryFolderApi } from '../../../../shared/api/bidt-delivery-folder.api';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { BidtStorageBinApi } from '../../../../shared/api/bidt-storage-bin.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AddShipmentAssetInput } from '../../../../shared/types/api-input-types/logistic/add-shipment-asset-input.interface';
import { UpdateStockMvtStatusInput } from '../../../../shared/types/api-input-types/logistic/update-stock-mvt-status-input.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { GetOperationCategoriesOutput } from '../../../../shared/types/api-output-types/get-operation-categories-output-dto.interface';
import { StockMvtFormOutput } from '../../../../shared/types/api-output-types/stock-movements/stock-mvt-form-output.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class FormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtStorageBinApi: BidtStorageBinApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    public readonly fleetManagementApi: FleetManagementApi,
    public readonly bidtDeliveryFolderApi: BidtDeliveryFolderApi,
    private readonly bidoEquipmentApi: BidoEquipmentApi
  ) {
    super(http, appConfigService);
  }

  public findBidtStorageBinById(id: number): Observable<BidtStorageBinDTO> {
    return super.post<number, BidtStorageBinDTO>(this.bidtStorageBinApi.getById, id);
  }

  /*************************
   * Fleet Management api
   *************************/
  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public findBidoEquipmentByPnAndBatchNumber(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber,
      input
    );
  }

  /*************************
   * bidt site api
   *************************/

  public findSiteById(siteId: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, siteId);
  }

  /*************************
   * bidt warehouse api
   *************************/

  public findBidtWarehouseById(warehouseId: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, warehouseId);
  }

  public findStorageBinListByWarehouse(warehouseId: number): Observable<BidtStorageBinDTO[]> {
    return super.post<number, BidtStorageBinDTO[]>(this.bidtStorageBinApi.findAllByWarehouseId, warehouseId);
  }

  public findByWarehouseId(id: number): Observable<SearchResultsDTO<BidtStorageBinDTO>> {
    return super.post<number, SearchResultsDTO<BidtStorageBinDTO>>(this.bidtStorageBinApi.findByWarehouseId, id);
  }

  /**************************************************************************
   * asset management api
   *************************************************************************/

  public getManufacturingBatchByEquipment(input: BidoEquipmentDTO): Observable<ReferenceBatchDTO> {
    return super.post<BidoEquipmentDTO, ReferenceBatchDTO>(
      this.assetManagementApi.getManufacturingBatchByEquipment,
      input
    );
  }

  /**************************************************************************
   * stock movement api
   *************************************************************************/

  public updateMvtsStatus(input: UpdateStockMvtStatusInput[]): Observable<StockMvtFormOutput[]> {
    return super.post<UpdateStockMvtStatusInput[], StockMvtFormOutput[]>(
      this.bidtStockMvtApi.updateMovementsStatus,
      input
    );
  }

  public addOrUpdateMvts(input: BidtStockMvtDTO[]): Observable<BidtStockMvtDTO[]> {
    return super.post<BidtStockMvtDTO[], BidtStockMvtDTO[]>(this.bidtStockMvtApi.addOrUpdateMvts, input);
  }

  public loadShipmentType(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes);
  }

  public findWorkOrderByMvts(input: BidtStockMvtDTO[]): Observable<BidmWorkOrderDTO[]> {
    return super.post<BidtStockMvtDTO[], BidmWorkOrderDTO[]>(this.bidtStockMvtApi.findWorkOrderByMvts, input);
  }

  public getOperationCategories(input: BidtStockMvtOperationDTO[]): Observable<GetOperationCategoriesOutput> {
    return super.post<BidtStockMvtOperationDTO[], GetOperationCategoriesOutput>(
      this.bidtStockMvtApi.getOperationCategories,
      input
    );
  }

  public findShipmentAssociatedMvt(input: BidtStockMvtDTO[]): Observable<StockMvtFormOutput[]> {
    return super.post<BidtStockMvtDTO[], StockMvtFormOutput[]>(this.bidtStockMvtApi.findShipmentAssociatedMvt, input);
  }

  /**************************************************************************
   * delivery folder api
   *************************************************************************/

  public addAssetToShipmentFolder(inputList: AddShipmentAssetInput[]): Observable<void> {
    return super.post<AddShipmentAssetInput[], void>(this.bidtDeliveryFolderApi.addAssetToShipmentFolder, inputList);
  }

  public loadStatus(): LabelValue<string>[] {
    return [
      { value: 'Planned', label: 'Planned' },
      { value: 'Waiting', label: 'Waiting' },
      { value: 'Audited', label: 'Audited' },
      { value: 'Completed', label: 'Completed' }
    ];
  }

  public fetchStockData() {
    return {
      site: 'BA118 - Saint-Dizler Robinson',
      warehouse: 'Magasin General',
      inboundLocalisation: 'Stock bon Ests',
      outboundLocalisation: 'Zone Sorte',
      status: 'Planifie',
      date: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      movementType: 'Sample'
    };
  }

  public fetchStockMovementTableData() {
    return [
      {
        mvtStockCode: 'OSM121112',
        pnCode: '1213-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A1212-10',
        whCategory: 'Bon Etat',
        qty: '11 u',
        sbNumber: 'AD1210',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        smoStatus: 'Planned',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: true,
        volume: '4L',
        height: '73cm',
        width: '89cm',
        diameter: '44cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'Extremement Inflammable'
      },
      {
        mvtStockCode: 'OSM121114',
        pnCode: '1213-13',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A1212-11',
        whCategory: 'Magasin General',
        qty: '12 L',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD1212',
        smoStatus: 'Audited',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: true,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE 2',
        additionalRemarks: 'Extremement Volatile'
      },
      {
        mvtStockCode: 'OSM121312',
        pnCode: '11213-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A4412-10',
        whCategory: 'TEST',
        qty: '2 u',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD1219',
        smoStatus: 'Completed',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: false,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'Safe'
      },
      {
        mvtStockCode: 'OSM121313',
        pnCode: '18813-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A1662-10',
        whCategory: 'Magasin',
        qty: '20 L',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD1217',
        smoStatus: 'Completed',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: false,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'NONE'
      },
      {
        mvtStockCode: 'OSM121314',
        pnCode: '121993-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A12112-10',
        whCategory: 'Bon Etat',
        qty: '1 u',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD12126',
        smoStatus: 'Planned',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: true,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'Extremement Inflammable'
      },
      {
        mvtStockCode: 'OSM121315',
        pnCode: '126713-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A12112-10',
        whCategory: 'Bon Etat',
        qty: '1 u',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD1215',
        smoStatus: 'Audited',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: true,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'NOT AVAILABLE'
      },
      {
        mvtStockCode: 'OSM121316',
        pnCode: '121883-12',
        articleDesignation: '### DESIGNATION DU P/N ###',
        sn: 'A112212-10',
        whCategory: 'Bon Etat',
        qty: '1 L',
        finalRecipient: 'BA118',
        finalRecipientWarehouse: 'Magasin General',
        sbNumber: 'AD1214',
        smoStatus: 'Planifie',
        stockMvtPlannedDate: '23/11/2019',
        documentNum: 'OTR231233',
        documentDescription: 'Lot de deployement',
        warehouse: 'Magasin General',
        destination: 'BA113- Monte-de-Marsan',
        container: false,
        volume: '45L',
        height: '75cm',
        width: '35cm',
        diameter: '35cm',
        weight: '15kg',
        pnType: 'OAE',
        additionalRemarks: 'Voletile'
      }
    ];
  }

  public fetchMovementInformation() {
    return {
      number: 'OSM485579',
      toRealizeThe: '23/11/2019',
      status: 'Planned',
      docNumber: 'OTR4851984',
      docType: 'Nivillement de Stock',
      docControl: 'Immediate',
      site: 'BA118 - Saint-Dizier Robinson',
      warehouse: 'Magasin General',
      zone: 'Stock Bon Etat',
      emplacement: 'AD982',
      outZone: 'Sortie',
      article: '16541-11',
      articleDesignation: '### DESIGNATION DU P/N ###',
      snOrLot: 'A1012-01',
      qty: '1 unite',
      etat: 'Bon Etat',
      materialType: 'OAE',
      volume: '45L',
      height: '75cm',
      width: '35cm',
      diameter: '35cm',
      weight: '15kg',
      additionalRemarks: 'Extremement Inflammable'
    };
  }

  /**************************************************************************
   * packaging batch api
   *************************************************************************/

  public addOrUpdateBatch(equipmentObject: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.bidoEquipmentApi.addOrUpdateBatch, equipmentObject);
  }
}
