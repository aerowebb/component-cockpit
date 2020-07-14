import { BidtStockMvtDTO } from './bidt-stock-mvt-dto.interface';
import { BidtTorItemIdDTO } from './bidt-tor-item-id-dto.interface';
import { BirePnDTO } from './bire-pn-dto.interface';

export interface BidtTorItemDTO extends BidtTorItemIdDTO {
  bidtTransferOrderId?: number;
  birePnPnCode?: string;
  birePnMandant?: string;
  mandant?: string;
  toriCode?: string;
  quantity?: number;
  toriStatus?: string;
  id?: number;

  pickingMovements?: BidtStockMvtDTO[];
  birePn?: BirePnDTO;
}
