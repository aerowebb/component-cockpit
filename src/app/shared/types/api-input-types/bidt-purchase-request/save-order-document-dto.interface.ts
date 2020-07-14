import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';
import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface SaveOrderDocumentDTO {
  bidtPurchaseRequestDTO?: BidtPurchaseRequestDTO;
  bidtStockMvtDTOList?: BidtStockMvtDTO[];
  bidtStockMvtRemoveList?: number[];
  bidtDocumentList?: BidtDocumentDTO[];
  documentDataRemoveList?: number[];
}
