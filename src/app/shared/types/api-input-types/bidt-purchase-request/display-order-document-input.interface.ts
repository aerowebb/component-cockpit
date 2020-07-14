import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';

export interface DisplayOrderDocumentInput {
  bidtPurchaseDTO?: BidtPurchaseRequestDTO;
  searchSupplier?: string;
  material?: string;
  sn?: string;
  batchNumber?: string;
  creationDate?: Date;
  receptionDate?: Date;
  startDate?: Date;
  endDate?: Date;
  purchaseRequestSupCode?: string;
}
