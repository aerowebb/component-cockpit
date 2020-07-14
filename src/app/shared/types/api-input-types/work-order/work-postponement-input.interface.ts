import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface WorkPostponementInput {
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  postponementReason: string;
}
