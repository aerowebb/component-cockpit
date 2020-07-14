import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../shared/api/am-project-management.api';
import { AssetManagementApi } from '../../shared/api/asset-management.api';
import { BidoEquipmentApi } from '../../shared/api/bido-equipment.api';
import { BidtDeliveryFolderApi } from '../../shared/api/bidt-delivery-folder.api';
import { BidtDfTypeApi } from '../../shared/api/bidt-df-type.api';
import { BidtDocumentApi } from '../../shared/api/bidt-document.api';
import { BidtProcReqItemApi } from '../../shared/api/bidt-proc-req-item.api';
import { BidtProcurementRequestApi } from '../../shared/api/bidt-procurement-request.api';
import { BidtSiteApi } from '../../shared/api/bidt-site.api';
import { BidtStockMvtTypeApi } from '../../shared/api/bidt-stock-mvt-type.api';
import { BidtStockMvtApi } from '../../shared/api/bidt-stock-mvt.api';
import { BidtTorItemApi } from '../../shared/api/bidt-tor-item.api';
import { BidtTransferOrderApi } from '../../shared/api/bidt-transfer-order.api';
import { BidtWarehouseApi } from '../../shared/api/bidt-warehouse.api';
import { BidtWorkCenterApi } from '../../shared/api/bidt-work-center.api';
import { FleetManagementApi } from '../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { AddMaterialInput } from '../../shared/types/api-input-types/logistic/add-material-input.interface';
import { AddReceiptItemInput } from '../../shared/types/api-input-types/logistic/add-receipt-item-input.interface';
import { AddReceiptMaterialInput } from '../../shared/types/api-input-types/logistic/add-receipt-material-input.interface';
import { AddReceiptPackageInput } from '../../shared/types/api-input-types/logistic/add-receipt-package-input.interface';
import { AddTransferOrderMaterialInput } from '../../shared/types/api-input-types/logistic/add-transfer-order-material-input.interface';
import { BookCandidateAssetInput } from '../../shared/types/api-input-types/logistic/book-candidate-asset-input.interface';
import { BookCandidateAssetTransferOrderInput } from '../../shared/types/api-input-types/logistic/book-candidate-asset-transfer-order-input.interface';
import { CalculateRemainingQuantityInput } from '../../shared/types/api-input-types/logistic/calculate-remaining-quantity-input';
import { CannibalizeAssetInput } from '../../shared/types/api-input-types/logistic/cannibalize-asset-input.interface';
import { CreateProcurementRequestInput } from '../../shared/types/api-input-types/logistic/create-procurement-request-input.interface';
import { FindDeliveryFoldersByCriteriaInput } from '../../shared/types/api-input-types/logistic/find-delivery-folders-by-criteria-input.interface';
import { FindForRemovalInput } from '../../shared/types/api-input-types/logistic/find-for-removal-input.interface';
import { FindProcurementRequestsByCriteriaInput } from '../../shared/types/api-input-types/logistic/find-procurement-requests-by-criteria-input.interface';
import { FindProcurementRequestsByWoIdInput } from '../../shared/types/api-input-types/logistic/find-procurement-requests-by-wo-id-input.interface';
import { FindStockMvtFormByCriteriaInput } from '../../shared/types/api-input-types/logistic/find-stock-mvt-form-by-criteria-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { FindTransferOrdersByCriteriaInput } from '../../shared/types/api-input-types/logistic/find-transfer-orders-by-criteria-input.interface';
import { SearchCandidateAssetsInput } from '../../shared/types/api-input-types/logistic/search-candidate-assets-input.interface';
import { SearchCandidateAssetsTransferOrderInput } from '../../shared/types/api-input-types/logistic/search-candidate-assets-transfer-order-input.interface';
import { UpdateBidtDfItemOperationInput } from '../../shared/types/api-input-types/logistic/update-df-item-operation-input.interce';
import { UpdateItemQuantityInput } from '../../shared/types/api-input-types/logistic/update-item-quantity-input.interface';
import { UpdatePackageOperationInput } from '../../shared/types/api-input-types/logistic/update-package-operation-input.interface';
import { UpdateStockMvtOperationStatusInput } from '../../shared/types/api-input-types/logistic/update-stock-mvt-operation-status-input.interface';
import { UpdateStockMvtStatusInput } from '../../shared/types/api-input-types/logistic/update-stock-mvt-status-input.interface';
import { FindBireVersionPnsByFamilyAndVariantAndPnCodeInput } from '../../shared/types/api-input-types/product-structure-management/find-bire-version-pns-by-family-and-variant-and-pn-code-input.interface';
import { CalculateProcurementRequestRemainingQuantity } from '../../shared/types/api-output-types/calculate-procurement-request-remaining-quantity';
import { FindShipmentFolderOutput } from '../../shared/types/api-output-types/find-shipment-folder-output.interface';
import { AssetOutputDto } from '../../shared/types/api-output-types/fleet-management/asset-output-dto.interface';
import { StockMvtFormOutput } from '../../shared/types/api-output-types/stock-movements/stock-mvt-form-output.interface';
import { BidmProjectDTOId } from '../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCounterReferenceDTO } from '../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoCustomerDTO } from '../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentCounterDTO } from '../../shared/types/api-types/bido-equipment-counter-dto.interface';
import { BidoEquipmentDTOId } from '../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../shared/types/api-types/bido-notification-dto.interface';
import { BidtDeliveryFolderDTO } from '../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDeliveryFolderIdDTO } from '../../shared/types/api-types/bidt-delivery-folder-id-dto.interface';
import { BidtDfItemDTO } from '../../shared/types/api-types/bidt-df-item-dto.interface';
import { BidtDfItemIdDTO } from '../../shared/types/api-types/bidt-df-item-id-dto.interface';
import { BidtDfItemOperationIdDTO } from '../../shared/types/api-types/bidt-df-item-operation-id-dto.interface';
import { BidtDfTypeDTO } from '../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeIdDTO } from '../../shared/types/api-types/bidt-df-type-id-dto.interface';
import { BidtDocumentDTO } from '../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPackageDTO } from '../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageIdDTO } from '../../shared/types/api-types/bidt-package-id-dto.interface';
import { BidtProcReqItemDTO } from '../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtProcurementRequestIdDTO } from '../../shared/types/api-types/bidt-procurement-request-id-dto.interface';
import { BidtSiteDTO } from '../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtIdDTO } from '../../shared/types/api-types/bidt-stock-mvt-id-dto.interface';
import { BidtStockMvtTypeDTO } from '../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStockMvtTypeIdDTO } from '../../shared/types/api-types/bidt-stock-mvt-type-id-dto.interface';
import { BidtTorItemDTO } from '../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BidtWorkCenterDTO } from '../../shared/types/api-types/bidt-work-center-dto.interface';
import { BireMeasureReferenceDTO } from '../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnDTOId } from '../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../shared/types/api-types/bire-pn-dto.interface';
import { BirePnMeasureDTO } from '../../shared/types/api-types/bire-pn-measure-dto.interface';
import { BireVersionPnDTO } from '../../shared/types/api-types/bire-version-pn-dto.interface';
import { CandidateAssetDTO } from '../../shared/types/api-types/candidate-asset-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { SearchResultsDTO } from '../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class LogisticsService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWorkCenterApi: BidtWorkCenterApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtDeliveryFolderApi: BidtDeliveryFolderApi,
    private readonly bidtTransferOrderApi: BidtTransferOrderApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly bidtProcReqItemApi: BidtProcReqItemApi,
    private readonly bidtProcurementRequestApi: BidtProcurementRequestApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly bidtStockMvtTypeApi: BidtStockMvtTypeApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtDocumentApi: BidtDocumentApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly bidtTorItemApi: BidtTorItemApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt work center api
   *************************************************************************/

  public findWorkCenterById(input: number): Observable<BidtWorkCenterDTO> {
    return super.post<number, BidtWorkCenterDTO>(this.bidtWorkCenterApi.getById, input);
  }

  /**************************************************************************
   * Aircraft maintenance api
   *************************************************************************/

  public createProcurementRequestFromWorkOrder(
    input: BidtProcurementRequestDTO
  ): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.aircraftMaintenanceApi.createProcurementRequest,
      input
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public findWorkPackage(input: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, input);
  }

  /**************************************************************************
   * Fleet management  api
   *************************************************************************/

  public findEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  /**************************************************************************
   * Bidt transfer order api
   *************************************************************************/

  public createTransferOrder(input: BidtTransferOrderDTO): Observable<BidtTransferOrderDTO> {
    return super.post<BidtTransferOrderDTO, BidtTransferOrderDTO>(this.bidtTransferOrderApi.create, input);
  }

  public addOrUpdateTransferOrder(input: BidtTransferOrderDTO): Observable<BidtTransferOrderDTO> {
    return super.post<BidtTransferOrderDTO, BidtTransferOrderDTO>(
      this.bidtTransferOrderApi.addOrUpdateTransferOrder,
      input
    );
  }

  public findTransferOrdersByCriteria(
    input: FindTransferOrdersByCriteriaInput
  ): Observable<FindTransferOrdersByCriteriaOutput[]> {
    return super.post<FindTransferOrdersByCriteriaInput, FindTransferOrdersByCriteriaOutput[]>(
      this.bidtTransferOrderApi.findTransferOrdersByCriteria,
      input
    );
  }

  public findTransferOrdersById(input: number): Observable<FindTransferOrdersByCriteriaOutput> {
    return super.post<number, FindTransferOrdersByCriteriaOutput>(
      this.bidtTransferOrderApi.findTransferOrderById,
      input
    );
  }

  public searchWarehouseCandidateAssetsByTorItem(
    input: SearchCandidateAssetsTransferOrderInput
  ): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsTransferOrderInput, CandidateAssetDTO[]>(
      this.bidtTransferOrderApi.searchWarehouseCandidateAssets,
      input
    );
  }

  public searchGlobalCandidateAssetsByTorItem(
    input: SearchCandidateAssetsTransferOrderInput
  ): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsTransferOrderInput, CandidateAssetDTO[]>(
      this.bidtTransferOrderApi.searchGlobalCandidateAssets,
      input
    );
  }

  public searchLocalCandidateAssetsByTorItem(
    input: SearchCandidateAssetsTransferOrderInput
  ): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsTransferOrderInput, CandidateAssetDTO[]>(
      this.bidtTransferOrderApi.searchLocalCandidateAssets,
      input
    );
  }

  public bookCandidateAssetByTorItem(input: BookCandidateAssetTransferOrderInput): Observable<void> {
    return super.post<BookCandidateAssetTransferOrderInput, void>(this.bidtTransferOrderApi.bookCandidateAsset, input);
  }

  public cancelBookedAssetByTorItem(input: BidtStockMvtDTO): Observable<void> {
    return super.post<BidtStockMvtDTO, void>(this.bidtTransferOrderApi.cancelBookedAsset, input);
  }

  public isAssetBookedByTorItem(input: BidoEquipmentDTO): Observable<BidtStockMvtDTO> {
    return super.post<BidoEquipmentDTO, BidtStockMvtDTO>(this.bidtTransferOrderApi.isAssetBooked, input);
  }

  public preemptCandidateAssetByTorItem(input: BookCandidateAssetTransferOrderInput): Observable<void> {
    return super.post<BookCandidateAssetTransferOrderInput, void>(
      this.bidtTransferOrderApi.preemptCandidateAsset,
      input
    );
  }

  /**************************************************************************
   * Bidt transfer order api
   *************************************************************************/

  public createTransferOrderTorIem(input: AddTransferOrderMaterialInput): Observable<BidtTorItemDTO> {
    return super.post<AddTransferOrderMaterialInput, BidtTorItemDTO>(
      this.bidtTorItemApi.createTranferOrderTorItem,
      input
    );
  }

  /**************************************************************************
   * Bidt delivery folder api
   *************************************************************************/

  public addOrUpdateReceiptFolder(input: BidtDeliveryFolderDTO): Observable<BidtDeliveryFolderDTO> {
    return super.post<BidtDeliveryFolderDTO, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.addOrUpdateReceiptFolder,
      input
    );
  }

  public addOrUpdateShipmentFolder(input: BidtDeliveryFolderDTO): Observable<BidtDeliveryFolderDTO> {
    return super.post<BidtDeliveryFolderDTO, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.addOrUpdateShipmentFolder,
      input
    );
  }

  public addReceiptItem(input: AddReceiptItemInput): Observable<BidtDeliveryFolderDTO> {
    return super.post<AddReceiptItemInput, BidtDeliveryFolderDTO>(this.bidtDeliveryFolderApi.addReceiptItem, input);
  }

  public addReceiptMaterialList(input: AddReceiptMaterialInput[]): Observable<BidtStockMvtDTO[]> {
    return super.post<AddReceiptMaterialInput[], BidtStockMvtDTO[]>(
      this.bidtDeliveryFolderApi.addReceiptMaterialList,
      input
    );
  }

  public addReceiptPackage(input: AddReceiptPackageInput): Observable<BidtPackageDTO> {
    return super.post<AddReceiptPackageInput, BidtPackageDTO>(this.bidtDeliveryFolderApi.addReceiptPackage, input);
  }

  public findShipmentFolderWithAllObjectsById(input: BidtDeliveryFolderIdDTO): Observable<FindShipmentFolderOutput> {
    return super.post<BidtDeliveryFolderIdDTO, FindShipmentFolderOutput>(
      this.bidtDeliveryFolderApi.findShipmentFolderWithAllObjectsById,
      input
    );
  }

  public cancelItemOperations(input: BidtPackageIdDTO[]): Observable<void> {
    return super.post<BidtPackageIdDTO[], void>(this.bidtDeliveryFolderApi.cancelItemOperations, input);
  }

  public cancelPackageOperations(input: BidtDfItemOperationIdDTO[]): Observable<void> {
    return super.post<BidtDfItemOperationIdDTO[], void>(this.bidtDeliveryFolderApi.cancelPackageOperations, input);
  }

  public cancelStockMovementOperations(input: UpdateStockMvtOperationStatusInput[]): Observable<void> {
    return super.post<UpdateStockMvtOperationStatusInput[], void>(
      this.bidtDeliveryFolderApi.cancelStockMovementOperations,
      input
    );
  }

  public deleteDeliveryFolder(input: BidtDeliveryFolderIdDTO): Observable<void> {
    return super.post<BidtDeliveryFolderIdDTO, void>(this.bidtDeliveryFolderApi.deleteDeliveryFolder, input);
  }

  public deleteReceiptItem(input: BidtDfItemIdDTO): Observable<void> {
    return super.post<BidtDfItemIdDTO, void>(this.bidtDeliveryFolderApi.deleteReceiptItem, input);
  }

  public deleteShipmentItem(input: BidtDfItemDTO[]): Observable<void> {
    return super.post<BidtDfItemDTO[], void>(this.bidtDeliveryFolderApi.deleteShipmentItem, input);
  }

  public deleteReceiptMaterial(input: BidtStockMvtIdDTO): Observable<void> {
    return super.post<BidtStockMvtIdDTO, void>(this.bidtDeliveryFolderApi.deleteReceiptMaterial, input);
  }

  public deleteReceiptPackage(input: BidtPackageIdDTO): Observable<void> {
    return super.post<BidtPackageIdDTO, void>(this.bidtDeliveryFolderApi.deleteReceiptPackage, input);
  }

  public findDeliveryFoldersByCriteria(input: FindDeliveryFoldersByCriteriaInput): Observable<BidtDeliveryFolderDTO[]> {
    return super.post<FindDeliveryFoldersByCriteriaInput, BidtDeliveryFolderDTO[]>(
      this.bidtDeliveryFolderApi.findDeliveryFoldersByCriteria,
      input
    );
  }

  public findDeliveryFoldersByPackageCode(input: string): Observable<BidtDeliveryFolderDTO[]> {
    return super.post<string, BidtDeliveryFolderDTO[]>(this.bidtDeliveryFolderApi.findByPackageCode, input);
  }

  public findReceiptFolderByPackageCode(input: string): Observable<BidtDeliveryFolderDTO> {
    return super.post<string, BidtDeliveryFolderDTO>(this.bidtDeliveryFolderApi.findReceiptFolderByPackageCode, input);
  }

  public findReceiptFolderWithAllObjectsById(input: BidtDeliveryFolderIdDTO): Observable<BidtDeliveryFolderDTO> {
    return super.post<BidtDeliveryFolderIdDTO, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.findReceiptFolderWithAllObjectsById,
      input
    );
  }

  public performItemOperations(input: UpdateBidtDfItemOperationInput[]): Observable<void> {
    return super.post<UpdateBidtDfItemOperationInput[], void>(this.bidtDeliveryFolderApi.performItemOperations, input);
  }

  public performPackageOperations(input: UpdatePackageOperationInput[]): Observable<void> {
    return super.post<UpdatePackageOperationInput[], void>(this.bidtDeliveryFolderApi.performPackageOperations, input);
  }

  public performStockMovementOperations(input: UpdateStockMvtOperationStatusInput[]): Observable<void> {
    return super.post<UpdateStockMvtOperationStatusInput[], void>(
      this.bidtDeliveryFolderApi.performStockMovementOperations,
      input
    );
  }

  public putInLitigationItemOperations(input: BidtDfItemOperationIdDTO[]): Observable<void> {
    return super.post<BidtDfItemOperationIdDTO[], void>(
      this.bidtDeliveryFolderApi.putInLitigationItemOperations,
      input
    );
  }

  public putInLitigationPackageOperations(input: BidtPackageIdDTO[]): Observable<void> {
    return super.post<BidtPackageIdDTO[], void>(this.bidtDeliveryFolderApi.putInLitigationPackageOperations, input);
  }

  public putInLitigationStockMovementOperations(input: UpdateStockMvtOperationStatusInput[]): Observable<void> {
    return super.post<UpdateStockMvtOperationStatusInput[], void>(
      this.bidtDeliveryFolderApi.putInLitigationStockMovementOperations,
      input
    );
  }

  public fetchLengthUnitMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtDeliveryFolderApi.fetchLengthUnitMap);
  }

  public fetchWeightUnitMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtDeliveryFolderApi.fetchWeightUnitMap);
  }

  /**************************************************************************
   * Bidt delivery folder type api
   *************************************************************************/

  public addOrUpdateDeliveryFolderType(input: BidtDfTypeDTO): Observable<BidtDfTypeDTO> {
    return super.post<BidtDfTypeDTO, BidtDfTypeDTO>(this.bidtDfTypeApi.addOrUpdate, input);
  }

  public deleteDeliveryFolerType(input: BidtDfTypeIdDTO): Observable<void> {
    return super.post<BidtDfTypeIdDTO, void>(this.bidtDfTypeApi.delete, input);
  }

  public findReceiptDfTypes(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findReceiptDfTypes);
  }

  public findReceiptDfTypeById(input: number): Observable<BidtDfTypeDTO> {
    return super.post<number, BidtDfTypeDTO>(this.bidtDfTypeApi.findReceiptDfTypeById, input);
  }

  public findShipmentDfTypes(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes);
  }

  public findShipmentDfTypeById(input: number): Observable<BidtDfTypeDTO> {
    return super.post<number, BidtDfTypeDTO>(this.bidtDfTypeApi.findShipmentDfTypeById, input);
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }

  /**************************************************************************
   * Bidt proc req item api
   *************************************************************************/

  public deleteProcurementRequestItem(input: number): Observable<void> {
    return super.post<number, void>(this.bidtProcReqItemApi.delete, input);
  }

  /**************************************************************************
   * Bidt procurement request api
   *************************************************************************/

  public updateProcurementRequestReceiver(input: BidmWorkOrderDTO): Observable<void> {
    return super.post<BidmWorkOrderDTO, void>(this.bidtProcurementRequestApi.updateProcurementRequestReceiver, input);
  }

  public duplicateProcurementRequest(input: BidtProcurementRequestDTO): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.duplicate,
      input
    );
  }

  public updateProcurementRequestItemQuantity(input: UpdateItemQuantityInput): Observable<void> {
    return super.post<UpdateItemQuantityInput, void>(
      this.bidtProcurementRequestApi.updateProcurementRequestItemQuantity,
      input
    );
  }

  public checkQuantityConsistency(input: BidtProcurementRequestDTO): Observable<boolean> {
    return super.post<BidtProcurementRequestDTO, boolean>(
      this.bidtProcurementRequestApi.checkQuantityConsistency,
      input
    );
  }

  public createProcurementRequest(input: BidtProcurementRequestDTO): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.createProcurementRequest,
      input
    );
  }

  public addMaterial(input: AddMaterialInput): Observable<BidtStockMvtDTO> {
    return super.post<AddMaterialInput, BidtStockMvtDTO>(this.bidtProcurementRequestApi.addMaterial, input);
  }

  public addOrUpdateProcurementRequest(input: BidtProcurementRequestDTO): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.addOrUpdate,
      input
    );
  }

  public addOrUpdateItem(input: BidtProcReqItemDTO): Observable<BidtProcReqItemDTO> {
    return super.post<BidtProcReqItemDTO, BidtProcReqItemDTO>(this.bidtProcurementRequestApi.addOrUpdateItem, input);
  }

  public bookCandidateAsset(input: BookCandidateAssetInput): Observable<void> {
    return super.post<BookCandidateAssetInput, void>(this.bidtProcurementRequestApi.bookCandidateAsset, input);
  }

  public preemptCandidateAsset(input: BookCandidateAssetInput): Observable<void> {
    return super.post<BookCandidateAssetInput, void>(this.bidtProcurementRequestApi.preemptCandidateAsset, input);
  }

  public cancelBookedAsset(input: BidtStockMvtDTO): Observable<void> {
    return super.post<BidtStockMvtDTO, void>(this.bidtProcurementRequestApi.cancelBookedAsset, input);
  }

  public isAssetBooked(input: BidoEquipmentDTO): Observable<BidtStockMvtDTO> {
    return super.post<BidoEquipmentDTO, BidtStockMvtDTO>(this.bidtProcurementRequestApi.isAssetBooked, input);
  }

  public cannibalizeAsset(input: CannibalizeAssetInput): Observable<void> {
    return super.post<CannibalizeAssetInput, void>(this.bidtProcurementRequestApi.cannibalizeAsset, input);
  }

  public createProcurementRequestItem(input: CreateProcurementRequestInput): Observable<BidtProcReqItemDTO> {
    return super.post<CreateProcurementRequestInput, BidtProcReqItemDTO>(
      this.bidtProcurementRequestApi.createProcurementRequestItem,
      input
    );
  }

  public cancelProcurementRequest(input: number): Observable<void> {
    return super.post<number, void>(this.bidtProcurementRequestApi.cancel, input);
  }

  public deleteProcurementRequest(input: number): Observable<void> {
    return super.post<number, void>(this.bidtProcurementRequestApi.delete, input);
  }

  public findProcurementRequestsByCriteria(
    input: FindProcurementRequestsByCriteriaInput
  ): Observable<BidtProcurementRequestDTO[]> {
    return super.post<FindProcurementRequestsByCriteriaInput, BidtProcurementRequestDTO[]>(
      this.bidtProcurementRequestApi.findProcurementRequestsByCriteria,
      input
    );
  }

  public findProcurementRequestsByWoId(
    input: FindProcurementRequestsByWoIdInput
  ): Observable<BidtProcurementRequestDTO[]> {
    return super.post<FindProcurementRequestsByWoIdInput, BidtProcurementRequestDTO[]>(
      this.bidtProcurementRequestApi.findProcurementRequestsByWoId,
      input
    );
  }

  public findProcurementRequestByIdWithAllObjects(
    input: BidtProcurementRequestIdDTO
  ): Observable<BidtProcurementRequestDTO> {
    return super.post<number, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.findWithAllObjectsById,
      input.id
    );
  }

  public searchCandidateAssetsForCannibalism(input: SearchCandidateAssetsInput): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsInput, CandidateAssetDTO[]>(
      this.bidtProcurementRequestApi.searchCandidateAssetsForCannibalism,
      input
    );
  }

  public searchGlobalCandidateAssets(input: SearchCandidateAssetsInput): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsInput, CandidateAssetDTO[]>(
      this.bidtProcurementRequestApi.searchGlobalCandidateAssets,
      input
    );
  }

  public searchLocalCandidateAssets(input: SearchCandidateAssetsInput): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsInput, CandidateAssetDTO[]>(
      this.bidtProcurementRequestApi.searchLocalCandidateAssets,
      input
    );
  }

  public searchWarehouseCandidateAssets(input: SearchCandidateAssetsInput): Observable<CandidateAssetDTO[]> {
    return super.post<SearchCandidateAssetsInput, CandidateAssetDTO[]>(
      this.bidtProcurementRequestApi.searchWarehouseCandidateAssets,
      input
    );
  }

  public calculateRemainingQuantity(
    input: CalculateRemainingQuantityInput
  ): Observable<CalculateProcurementRequestRemainingQuantity> {
    return super.post<CalculateRemainingQuantityInput, CalculateProcurementRequestRemainingQuantity>(
      this.bidtProcurementRequestApi.calculateRemainingQuantity,
      input
    );
  }

  /**************************************************************************
   * Bidt stock movement api
   *************************************************************************/

  public cancelStockMvtPending(input: number): Observable<void> {
    return super.post<number, void>(this.bidtStockMvtApi.cancelStockMvtPending, input);
  }

  public deleteMaterial(input: BidtStockMvtIdDTO): Observable<void> {
    return super.post<BidtStockMvtIdDTO, void>(this.bidtStockMvtApi.deleteMaterial, input);
  }

  public findStockMvtsByCriteria(input: FindStockMvtsByCriteriaInput): Observable<BidtStockMvtDTO[]> {
    return super.post<FindStockMvtsByCriteriaInput, BidtStockMvtDTO[]>(this.bidtStockMvtApi.findByCriteria, input);
  }

  public findStockMvtStory(input: BidtStockMvtDTO): Observable<BidtStockMvtDTO[]> {
    return super.post<BidtStockMvtDTO, BidtStockMvtDTO[]>(this.bidtStockMvtApi.findStockMvtStory, input);
  }

  public findStockMvtStoryFromFirstStockMvt(input: BidtStockMvtDTO): Observable<BidtStockMvtDTO[]> {
    return super.post<BidtStockMvtDTO, BidtStockMvtDTO[]>(
      this.bidtStockMvtApi.findStockMvtStoryFromFirstStockMvt,
      input
    );
  }

  public putStockMvtPending(input: number): Observable<void> {
    return super.post<number, void>(this.bidtStockMvtApi.putStockMvtPending, input);
  }

  public updateStockMvtStatus(input: UpdateStockMvtStatusInput): Observable<void> {
    return super.post<UpdateStockMvtStatusInput, void>(this.bidtStockMvtApi.updateStatus, input);
  }

  /**************************************************************************
   * Bidt stock movement type api
   *************************************************************************/

  public addOrUpdateStockMovementType(input: BidtStockMvtTypeDTO): Observable<BidtStockMvtTypeDTO> {
    return super.post<BidtStockMvtTypeDTO, BidtStockMvtTypeDTO>(this.bidtStockMvtTypeApi.addOrUpdate, input);
  }

  public deleteStockMovementType(input: BidtStockMvtTypeIdDTO): Observable<void> {
    return super.post<BidtStockMvtTypeIdDTO, void>(this.bidtStockMvtTypeApi.delete, input);
  }

  public findStockMvtTypes(): Observable<BidtStockMvtTypeDTO[]> {
    return super.post<void, BidtStockMvtTypeDTO[]>(this.bidtStockMvtTypeApi.findAll);
  }

  public findStockMvtTypeById(input: number): Observable<BidtStockMvtTypeDTO> {
    return super.post<number, BidtStockMvtTypeDTO>(this.bidtStockMvtTypeApi.findStockMvtTypeById, input);
  }

  public findBidtStockMvtForm(criteria: FindStockMvtFormByCriteriaInput): Observable<StockMvtFormOutput[]> {
    return super.post<FindStockMvtFormByCriteriaInput, StockMvtFormOutput[]>(
      this.bidtStockMvtApi.findBidtStockMvtForm,
      criteria
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBidoCounterReferencesByPnCode(input: BirePnDTOId): Observable<BidoCounterReferenceDTO[]> {
    return super.post<BirePnDTOId, BidoCounterReferenceDTO[]>(
      this.productStructureManagementApi.findBidoCounterReferencesByPnCode,
      input
    );
  }

  public findBirePnMeasuresByPnCode(input: BirePnDTOId): Observable<BirePnMeasureDTO[]> {
    return super.post<BirePnDTOId, BirePnMeasureDTO[]>(
      this.productStructureManagementApi.findBirePnMeasuresByPnCode,
      input
    );
  }

  public findCounterByAsset(input: string): Observable<BireMeasureReferenceDTO[]> {
    return super.post<string, BireMeasureReferenceDTO[]>(this.productStructureManagementApi.findCounterByAsset, input);
  }

  public findBireVersionPnsByFamilyAndVariantAndPnCode(
    input: FindBireVersionPnsByFamilyAndVariantAndPnCodeInput
  ): Observable<BireVersionPnDTO[]> {
    return super.post<FindBireVersionPnsByFamilyAndVariantAndPnCodeInput, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByFamilyAndVariantAndPnCode,
      input
    );
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public removeBidmProject(input: BidmProjectDTOId): Observable<void> {
    return super.post<BidmProjectDTOId, void>(this.amProjectManagementApi.removeBidmProject, input);
  }

  /**************************************************************************
   * AM project management api
   *************************************************************************/

  public findShipmentMaterial(input: BidtDeliveryFolderIdDTO): Observable<BidtDeliveryFolderDTO> {
    return super.post<BidtDeliveryFolderIdDTO, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.findShipmentMaterial,
      input
    );
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public getWarehouseById(id: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, id);
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public findWarehousesByCriteria(siteId: BidtWarehouseDTO): Observable<SearchResultsDTO<BidtWarehouseDTO>> {
    return super.post<BidtWarehouseDTO, SearchResultsDTO<BidtWarehouseDTO>>(
      this.bidtWarehouseApi.findByCriteria,
      siteId
    );
  }

  /**************************************************************************
   * Bidt site api
   *************************************************************************/

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public getSiteById(input: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, input);
  }

  /**************************************************************************
   * Bido equipment api
   *************************************************************************/

  public addOrUpdateBatch(input: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.bidoEquipmentApi.addOrUpdateBatch, input);
  }

  public findDocumentByDeliveryFolderId(deliveryFolderId: number): Observable<BidtDocumentDTO[]> {
    return super.post<number, BidtDocumentDTO[]>(this.bidtDocumentApi.findByDeliveryFolderId, deliveryFolderId);
  }
  /**************************************************************************
   * Asset Managment equipment api
   *************************************************************************/
  public updateAsset(assetOutputDto: AssetOutputDto): Observable<void> {
    return super.post<AssetOutputDto, void>(this.assetManagementApi.updateAsset, assetOutputDto);
  }

  public createBidoNotification(bidoNotificationDTO: BidoNotificationDTO[]): Observable<void> {
    return super.post<BidoNotificationDTO[], void>(this.assetManagementApi.createBidoNotification, bidoNotificationDTO);
  }

  public findEquipmentByPnAndBatchNumber(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber,
      input
    );
  }

  public findEquipmentByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      input
    );
  }

  public findBidoEquipmentCounter(input: BidoEquipmentCounterDTOId): Observable<BidoEquipmentCounterDTO> {
    return super.post<BidoEquipmentCounterDTOId, BidoEquipmentCounterDTO>(
      this.fleetManagementApi.findBidoEquipmentCounter,
      input
    );
  }

  public findBirePn(input: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, input);
  }

  public findTransferOrdersByRemoval(input: FindForRemovalInput): Observable<BidtTransferOrderDTO[]> {
    return super.post<FindForRemovalInput, BidtTransferOrderDTO[]>(this.bidtTransferOrderApi.findByRemoval, input);
  }

  public cancelTransferOrder(input: BidtTransferOrderDTO[]): Observable<void> {
    return super.post<BidtTransferOrderDTO[], void>(this.bidtTransferOrderApi.cancelTransferOrder, input);
  }

  public updateTorItemQuantity(input: UpdateItemQuantityInput): Observable<void> {
    return super.post<UpdateItemQuantityInput, void>(this.bidtTransferOrderApi.updateTorItemQuantity, input);
  }
}
