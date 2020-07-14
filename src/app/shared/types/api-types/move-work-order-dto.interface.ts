import { BidmProjectDTOId } from './bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from './bidm-work-order-dto-id.interface';

export interface MoveWorkOrdersInput {
  bidmWorkOrderDTOIds?: BidmWorkOrderDTOId[];
  bidmProjectDTOId?: BidmProjectDTOId;
}
