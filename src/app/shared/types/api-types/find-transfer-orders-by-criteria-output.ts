import { BidtProcurementRequestDTO } from './bidt-procurement-request-dto.interface';
import { BidtTransferOrderDTO } from './bidt-transfer-order-dto.interface';

export interface FindTransferOrdersByCriteriaOutput {
  bidtTransferOrder: BidtTransferOrderDTO;
  bidtProcurementRequest: BidtProcurementRequestDTO;
}
