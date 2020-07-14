import { BidtProcReqItemDTO } from '../../api-types/bidt-proc-req-item-dto.interface';

export interface ProcReqItemAndQtyIndicatorsDTO extends BidtProcReqItemDTO {
  availableQuantity: number;
  ok: boolean;
  nok: boolean;
  warning: boolean;
}
