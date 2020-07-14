import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { StockInformationDTO } from '../../api-types/stock-information-dto-interface';
import { StockMvtFormOutput } from '../stock-movements/stock-mvt-form-output.interface';

export interface BidtStockMvtMmfOutputDTO {
  bidtStockMvts: BidtStockMvtDTO[];
  stockInformation: StockInformationDTO;
  bidtStockInfoList: StockMvtFormOutput[];
}
