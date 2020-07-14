// //////////////////////////////////////////////////////////////////////////
// DO NOT EDIT THIS FILE
//
// It is automatically generated by generate-dtos.js
// //////////////////////////////////////////////////////////////////////////

import { BidtDfItemIdDTO } from './bidt-df-item-id-dto.interface';
import { BidtDfItemOperationDTO } from './bidt-df-item-operation-dto.interface';
import { BidtDocumentDTO } from './bidt-document-dto.interface';
import { BidtPackageDTO } from './bidt-package-dto.interface';
import { BidtProcReqItemDTO } from './bidt-proc-req-item-dto.interface';
import { BidtStockMvtDTO } from './bidt-stock-mvt-dto.interface';
import { BirePnDTO } from './bire-pn-dto.interface';

export interface BidtDfItemDTO extends BidtDfItemIdDTO {
  bidtDeliveryFolder: string;

  id: number;
  bidtDfItemOperations?: BidtDfItemOperationDTO[];
  bidtDocuments?: BidtDocumentDTO[];
  bidtPackage?: BidtPackageDTO;
  bidtProcReqItem?: string;
  bidtProcReqItems?: BidtProcReqItemDTO[];
  bidtStockMvts?: BidtStockMvtDTO[];
  bidtStorageBin?: string;
  birePnPnCode?: string;
  bidtTorItem?: string;
  birePn?: BirePnDTO;
  dfiCode?: string; // 50
  dfiStatus?: string; // 50
  quantity?: string;

  statusDate?: string;
  statusState?: string; // 50
  statusUser?: string; // 100
}