import { BidtProcReqItemDTO } from '../../api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';

export interface MaterialAvailabilityOutputDTO extends BidtProcReqItemDTO {
  quantity: number;
  bidtProcurementRequestFather: BidtProcurementRequestDTO;
  ok: number;
  nok: number;
  warning: number;
}
