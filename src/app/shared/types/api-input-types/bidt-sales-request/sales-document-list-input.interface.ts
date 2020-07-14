import { BidtSalesRequestDTO } from '../../api-types/bidt-sales-request-dto.interface';

export interface SalesDocumentListInput {
  bidtSalesDTO?: BidtSalesRequestDTO;
  pn?: string;
  sn?: string;
  batchNumber?: string;
  searchSupplier?: string;
}
