import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidoEquipmentDTO } from '../../../../../../generated_files/api-types/bido-equipment-dto.interface';
import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { BidtDeliveryFolderApi } from '../../../../shared/api/bidt-delivery-folder.api';
import { BidtDfTypeOperationApi } from '../../../../shared/api/bidt-df-type-operation.api';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtDocumentApi } from '../../../../shared/api/bidt-document.api';
import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AddShipmentPackageInput } from '../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { DfTypeOperationsByDfTypeInput } from '../../../../shared/types/api-input-types/logistic/df-type-operations-by-df-type-input.interface';
import { SaveDocumentDeliveryFolderInput } from '../../../../shared/types/api-input-types/logistic/save-document-delivery-folder-input.interface';
import { UpdateBidtDfItemInput } from '../../../../shared/types/api-input-types/logistic/update-items-status-input.interface';
import { UpdateShipmentFolderInput } from '../../../../shared/types/api-input-types/logistic/update-shipment-status-input.interface';
import { FindNextMvtReceiptFolderOutput } from '../../../../shared/types/api-output-types/find-next-mvt-receipt-folder-output.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { GetOperationCategoriesOutput } from '../../../../shared/types/api-output-types/get-operation-categories-output-dto.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPackageDTO } from '../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageOperationDTO } from '../../../../shared/types/api-types/bidt-package-operation-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

@Injectable()
export class GoodsReceiptFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidtDeliveryFolderApi: BidtDeliveryFolderApi,
    public readonly bidtDfTypeOperationApi: BidtDfTypeOperationApi,
    private readonly bidtDocumentApi: BidtDocumentApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    public readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(http, appConfigService);
  }

  public getBidtDfTypeOperationsByDfType(input: DfTypeOperationsByDfTypeInput): Observable<BidtPackageOperationDTO[]> {
    return super.post<DfTypeOperationsByDfTypeInput, BidtPackageOperationDTO[]>(
      this.bidtDfTypeOperationApi.getBidtDfTypeOperationsByDfType,
      input
    );
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

  /**************************************************************************
   * Bidt dellivery folder api
   *************************************************************************/

  public saveDocuments(input: SaveDocumentDeliveryFolderInput): Observable<void> {
    return super.post<SaveDocumentDeliveryFolderInput, void>(this.bidtDeliveryFolderApi.saveDocuments, input);
  }

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

  public addShipmentPackage(input: AddShipmentPackageInput): Observable<BidtPackageDTO> {
    return super.post<AddShipmentPackageInput, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.addShipmentPackage,
      input
    );
  }

  public updateShipmentPackage(input: BidtPackageDTO): Observable<BidtPackageDTO> {
    return super.post<BidtPackageDTO, BidtDeliveryFolderDTO>(this.bidtDeliveryFolderApi.updateShipmentPackage, input);
  }

  public updateShipmentFolderStatus(input: UpdateShipmentFolderInput): Observable<BidtDeliveryFolderDTO> {
    return super.post<UpdateShipmentFolderInput, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.updateShipmentFolderStatus,
      input
    );
  }

  public deleteShipmentAsset(input: BidtStockMvtDTO[]): Observable<void> {
    return super.post<BidtStockMvtDTO[], void>(this.bidtDeliveryFolderApi.deleteShipmentAsset, input);
  }

  public updateItemsStatus(input: UpdateBidtDfItemInput[]): Observable<void> {
    return super.post<UpdateBidtDfItemInput[], void>(this.bidtDeliveryFolderApi.updateItemsStatus, input);
  }

  public findNextMvtReceiptFolder(input: BidtDeliveryFolderDTO): Observable<FindNextMvtReceiptFolderOutput> {
    return super.post<BidtDeliveryFolderDTO, FindNextMvtReceiptFolderOutput>(
      this.bidtDeliveryFolderApi.findNextMvtReceiptFolder,
      input
    );
  }

  public calculateShipmentFolderCriticality(input: BidtDeliveryFolderDTO): Observable<string> {
    return super.post<BidtDeliveryFolderDTO, string>(
      this.bidtDeliveryFolderApi.calculateShipmentFolderCriticality,
      input
    );
  }

  /**************************************************************************
   * Bidt document api
   *************************************************************************/

  public findDocumentByDeliveryFolderId(deliveryFolderId: number): Observable<BidtDocumentDTO[]> {
    return super.post<number, BidtDocumentDTO[]>(this.bidtDocumentApi.findByDeliveryFolderId, deliveryFolderId);
  }

  public deleteByid(documentId: number): Observable<number> {
    return super.post<number, number>(this.bidtDocumentApi.deleteByid, documentId);
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

  public addOrUpdateMvts(input: BidtStockMvtDTO[]): Observable<BidtStockMvtDTO[]> {
    return super.post<BidtStockMvtDTO[], BidtStockMvtDTO[]>(this.bidtStockMvtApi.addOrUpdateMvts, input);
  }

  public findTransferOrderByMvt(input: BidtStockMvtDTO): Observable<BidtTransferOrderDTO> {
    return super.post<BidtStockMvtDTO, BidtTransferOrderDTO>(this.bidtStockMvtApi.findTransferOrderByMvt, input);
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

  /**************************************************************************
   * df type api
   *************************************************************************/
  public fetchTrasnfertOrderTypeList(): Observable<LabelValue<number>[]> {
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
