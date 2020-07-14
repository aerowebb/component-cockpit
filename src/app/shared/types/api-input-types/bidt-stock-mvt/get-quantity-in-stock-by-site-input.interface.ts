import { BidtSiteDTO } from '../../api-types/bidt-site-dto.interface';
import { BirePnDTOId } from '../../api-types/bire-pn-dto-id.interface';

export interface GetQuantityInStockBySiteInput {
  birePnDTOId?: BirePnDTOId;
  site?: BidtSiteDTO;
  quantity?: number;
  date?: Date;
  basedOnExecutedMovements?: boolean;
}
