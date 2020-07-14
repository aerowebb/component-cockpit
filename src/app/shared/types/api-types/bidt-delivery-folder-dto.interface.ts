// //////////////////////////////////////////////////////////////////////////
// DO NOT EDIT THIS FILE
//
// It is automatically generated by generate-dtos.js
// //////////////////////////////////////////////////////////////////////////

import { BidoCustomerDTO } from './bido-customer-dto.interface';
import { BidtDeliveryFolderIdDTO } from './bidt-delivery-folder-id-dto.interface';
import { BidtDfItemDTO } from './bidt-df-item-dto.interface';
import { BidtDfTypeDTO } from './bidt-df-type-dto.interface';
import { BidtDocumentDTO } from './bidt-document-dto.interface';
import { BidtProcurementRequestDTO } from './bidt-procurement-request-dto.interface';
import { BidtPurchaseRequestDTO } from './bidt-purchase-request-dto.interface';
import { BidtSiteDTO } from './bidt-site-dto.interface';
import { BidtStorageBinDTO } from './bidt-storage-bin-dto.interface';
import { BidtTransferOrderDTO } from './bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';

export interface BidtDeliveryFolderDTO extends BidtDeliveryFolderIdDTO {
  bidtDfItems?: BidtDfItemDTO[];
  bidtDfTypeId?: number;
  bidtDocuments?: BidtDocumentDTO[];
  bidtProcurementRequestId?: string;
  bidtPurchaseRequestId?: string;
  bidtSiteByBidtSiteReceiverId?: number;
  bidtSiteByBidtSiteSenderId?: number;
  bidtStorageBinByBidtSbBinReceiverId?: string;
  bidtStorageBinByBidtSbBinSenderId?: string;
  bidtStorageBinByBidtSbZoneReceiverId?: string;
  bidtStorageBinByBidtSbZoneSenderId?: string;
  bidtTransferOrderId?: string;
  bidtWarehouseByBidtWarehouseReceiverId?: number;
  bidtWarehouseByBidtWarehouseSenderId?: number;
  criticality?: string; // 50
  dfCode?: string; // 50
  dfStatus?: string; // 50
  externalDeliveryNumber?: string; // 50
  plannedDate?: Date;
  shipmentCarNumber?: string; // 50
  shipmentFlightNumber?: string; // 50
  shipmentPlannedDate?: string;

  bidoCustomerReceiver?: BidoCustomerDTO;
  bidoCustomerSender?: BidoCustomerDTO;
  bidoCustomerTransp?: BidoCustomerDTO;
  bidtDfType?: BidtDfTypeDTO;
  bidtProcurementRequest?: BidtProcurementRequestDTO;
  bidtPurchaseRequest?: BidtPurchaseRequestDTO;
  bidtSiteReceiver?: BidtSiteDTO;
  bidtSiteSender?: BidtSiteDTO;
  bidtStorageBinSbBinReceiver?: BidtStorageBinDTO;
  bidtStorageBinSbBinSender?: BidtStorageBinDTO;
  bidtStorageBinSbZoneReceiver?: BidtStorageBinDTO;
  bidtStoragaBinSbZoneSender?: BidtStorageBinDTO;
  bidtTransferOrder?: BidtTransferOrderDTO;
  bidtWarehouseReceiver?: BidtWarehouseDTO;
  bidtWarehouseSender?: BidtWarehouseDTO;

  statusDate?: Date;
  statusState?: string; // 50
  statusUser?: string; // 100
}
