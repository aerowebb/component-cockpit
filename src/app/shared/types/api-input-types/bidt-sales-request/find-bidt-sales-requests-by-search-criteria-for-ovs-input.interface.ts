import { BidtSalesRequestDTO } from '../../api-types/bidt-sales-request-dto.interface';

export interface FindBidtSalesRequestsByCriteriaForOVSInput {
  bidtSalesRequestCriteria?: BidtSalesRequestDTO;
  supplier?: string;
  creationDate?: Date;
  deliveryDate?: Date;
}
