import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';
import { BidtSalesRequestDTO } from '../../api-types/bidt-sales-request-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface SaveSalesDocumentDTO {
  bidtSalesRequestDTO?: BidtSalesRequestDTO;
  bidtStockMvtDTOList?: BidtStockMvtDTO[];
  bidtDocumentList?: BidtDocumentDTO[];
  documentDataRemoveList?: number[];
}
