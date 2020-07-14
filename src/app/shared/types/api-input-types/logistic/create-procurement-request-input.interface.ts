import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';

export interface CreateProcurementRequestInput {
  bidtProcurementRequest: BidtProcurementRequestDTO;
  pnCode: string;
  quantity: string;
}
