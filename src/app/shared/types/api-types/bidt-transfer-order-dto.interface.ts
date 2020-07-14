import { BidmProjectDTO } from './bidm-project-dto.interface';
import { BidoCustomerDTO } from './bido-customer-dto.interface';
import { BidtProcReqItemDTO } from './bidt-proc-req-item-dto.interface';
import { BidtSiteDTO } from './bidt-site-dto.interface';
import { BidtTorItemDTO } from './bidt-tor-item-dto.interface';
import { BidtTransferOrderIdDTO } from './bidt-transfer-order-id-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';

export interface BidtTransferOrderDTO extends BidtTransferOrderIdDTO {
  id?: number;
  bidtWarehouseByBidtWarehouseSenderId?: number;
  bidoCustomerByFkBidtTraTorSendeBidoCusCustomerCode?: string;
  bidoCustomerByFkBidtTraTorSendeBidoCusMandant?: string;
  bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode?: string;
  bidoCustomerByFkBidtTraTorReceiBidoCusMandant?: string;
  bidtSiteByBidtSiteReceiverId?: number;
  bidtWarehouseByBidtWarehouseReceiverId?: number;
  bidtProcReqItemId?: number;
  bidtProcReqItem?: BidtProcReqItemDTO;
  bidmProjectMandant?: string;
  bidmProjectProjectId?: number;
  bidtSiteByBidtSiteSenderId?: number;
  mandant?: string;
  torCode?: string;
  torType?: string;
  torStatus?: string;
  criticality?: string;
  shipmentExpectedDate?: Date;
  receiptExpectedDate?: Date;
  bidtSiteIssue?: BidtSiteDTO;
  bidtSiteReceipt?: BidtSiteDTO;
  bidtWarehouseIssue?: BidtWarehouseDTO;
  bidtWarehouseReceipt?: BidtWarehouseDTO;
  bidtTorItems?: BidtTorItemDTO[];
  statusUser?: string;
  statusDate?: Date;
  statusState?: string;

  bidoCustomerReceipt?: BidoCustomerDTO;
  bidoCustomerIssue?: BidoCustomerDTO;
  bidmProject?: BidmProjectDTO;
}
