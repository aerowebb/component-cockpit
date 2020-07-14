import { BidtDfTypeOperationDTO } from '../api-types/bidt-df-type-operation-dto.interface';
import { BidtStockMvtTypeOperationDTO } from '../api-types/bidt-stock-mvt-type-operation-dto.interface';

export interface GetOperationCategoriesOutput {
  dfTypeOperationList: BidtDfTypeOperationDTO[];
  stockMvtTypeOperationList: BidtStockMvtTypeOperationDTO[];
}
