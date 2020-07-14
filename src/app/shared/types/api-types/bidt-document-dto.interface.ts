export interface BidtDocumentDTO {
  bidtSalesRequestId?: number;
  bidtEmployeeId?: number;
  bidtStockMvtId?: number;
  bidtPurchaseRequestId?: number;
  documentCode?: string;
  documentName?: string;
  documentType?: string;
  documentPublicationDate?: Date;
  documentCategory?: string;
  documentSource?: string;
  documentContent?: Uint8Array;
  documentDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  id?: number;
}
