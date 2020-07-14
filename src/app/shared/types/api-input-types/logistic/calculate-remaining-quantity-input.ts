import { BidtProcReqItemDTO } from '../../api-types/bidt-proc-req-item-dto.interface';

export interface CalculateRemainingQuantityInput {
  bidtProcReqItemDTO: BidtProcReqItemDTO;
  notServedQuantity: number;
}
