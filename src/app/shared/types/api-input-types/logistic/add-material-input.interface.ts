import { BidtProcReqItemDTO } from '../../api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface AddMaterialInput {
  bidtProcurementRequest: BidtProcurementRequestDTO;
  bidtProcReqItem: BidtProcReqItemDTO;
  bidtStockMvt: BidtStockMvtDTO;
}
