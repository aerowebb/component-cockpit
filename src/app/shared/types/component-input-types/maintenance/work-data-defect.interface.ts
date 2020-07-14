import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface WorkDataDefect {
  workOrder?: BidmWorkOrderDTO;
  workPackage?: BidmProjectDTO;
  equipementCode: string;
}
