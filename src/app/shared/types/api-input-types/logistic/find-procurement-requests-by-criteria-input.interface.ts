import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';

export interface FindProcurementRequestsByCriteriaInput {
  bidtProcurementRequest: BidtProcurementRequestDTO;
  procReqStatusExcluded: string[];
  assetCode?: string;
  procReqItemPnCode?: string;
  procReqItemDesignation?: string;
  procReqItemQuantity?: string;
  withAlternatives?: boolean;
}
