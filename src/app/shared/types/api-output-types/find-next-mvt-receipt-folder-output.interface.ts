import { BidtStockMvtDTO } from '../api-types/bidt-stock-mvt-dto.interface';

export interface FindNextMvtReceiptFolderOutput {
  bidtStockMvtDtoList: BidtStockMvtDTO[];
  containMvtStockPilling: boolean;
  containMvtCrossDocking: boolean;
}
