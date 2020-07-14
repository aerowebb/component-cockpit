import { BidtDfItemDTO } from '../../api-types/bidt-df-item-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface UpdateStockMvtOperationStatusInput {
  bidtStockMvt: BidtStockMvtDTO;
  operationId: number;
  bidtDfItem: BidtDfItemDTO;
  newStatus: string;
}
