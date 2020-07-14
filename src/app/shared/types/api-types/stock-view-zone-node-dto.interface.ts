import { BidtStorageBinDTO } from './bidt-storage-bin-dto.interface';
import { StockInformationDTO } from './stock-information-dto-interface';

export interface StockViewZoneNodeDTO {
  zone: BidtStorageBinDTO;
  stockInformation: StockInformationDTO[];
}
