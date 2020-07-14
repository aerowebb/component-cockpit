import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface DurationTotalByWorkOrderOutput {
  workOrder: BidmWorkOrderDTO;
  duration: number;
}
