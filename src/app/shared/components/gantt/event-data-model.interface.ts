import { BidmWorkOrderDTO } from '../../types/api-types/bidm-work-order-dto.interface';

export interface EventModelGantt {
  id: number;
  workOrder: BidmWorkOrderDTO;
  operationsDuration?: number;

  code?: string;
  name?: string;
  description?: string;
  expanded?: boolean;
  draggable?: boolean;
  startDate?: Date;
  endDate?: Date;
  children?: EventModelGantt[];
}
