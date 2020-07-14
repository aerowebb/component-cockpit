import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';

import { ProcReqItemAndQtyIndicatorsDTO } from './proc-req-item-and-qty-indicators-dto';

export interface ProcurementRequestAndIndicatorsOutputDTO extends BidtProcurementRequestDTO {
  projectDTO: BidmProjectDTO;
  procReqItemsAndQtyIndicatorsDTO: ProcReqItemAndQtyIndicatorsDTO[];
}
