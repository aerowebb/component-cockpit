import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface UpdateJobCardInput {
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  woComment?: string;
  woAdditionalData?: string;
}
