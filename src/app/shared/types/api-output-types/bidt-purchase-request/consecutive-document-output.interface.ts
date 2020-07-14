import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';

export interface ConsecutiveDocumentOutput {
  code: string;
  name: string;
  category: string;
  type: string;
  bidtPurchaseRequestDTO: BidtPurchaseRequestDTO;
  status: string;
  creationDateText: string;
  superiorDocumentCode: string;
  superiorDocumentCategory: string;
  supplier: string;
}
