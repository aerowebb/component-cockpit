import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';

export interface FindBidtPurchaseRequestsByCriteriaForOVSInput {
  bidtPurchaseRequestCriteria?: BidtPurchaseRequestDTO;
  supplier?: string;
  creationDate?: Date;
  receptionDate?: Date;
}
