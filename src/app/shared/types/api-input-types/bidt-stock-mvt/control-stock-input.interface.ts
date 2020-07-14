import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from '../../api-types/bidm-work-order-dto-id.interface';

export interface ControlStockInput {
  projectId: BidmProjectDTOId;
  workOrderId?: BidmWorkOrderDTOId;
  mvtStatusExcluded: string[];
  date?: Date;
  withItsAlternatives?: boolean;
}
