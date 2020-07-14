import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from '../../api-types/bidm-work-order-dto-id.interface';
import { BidoNotificationDTOId } from '../../api-types/bido-notification-dto-id.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTOId } from '../../api-types/bire-pn-dto-id.interface';
import { BsdeInventoryDTOId } from '../../api-types/bsde-inventory-dto-id.interface';
import { BsdeProjectDTOId } from '../../api-types/bsde-project-dto-id.interface';

export interface FindAllBidtStockMvtByCriteriaInput {
  bidtStockMvtDTO?: BidtStockMvtDTO;
  mvtStatusExcluded?: string[];
  birePnDTOId?: BirePnDTOId;
  withItsAlternatives?: boolean;
  warehouseId?: number;
  siteId?: number;
  valuationGroupCode?: string;
  bidmProjectDTOId?: BidmProjectDTOId;
  bidmWorkOrderDTOId?: BidmWorkOrderDTOId;
  purchaseRequestId?: number;
  salesRequestId?: number;
  bidoNotificationDTOId?: BidoNotificationDTOId;
  bsdeProjectDTOId?: BsdeProjectDTOId;
  bsdeInventoryDTOId?: BsdeInventoryDTOId;
  from?: Date;
  until?: Date;
}
