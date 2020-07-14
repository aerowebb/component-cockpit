import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface FindStockMvtsByCriteriaInput {
  stockMvt: BidtStockMvtDTO;
  mvtStatus: string[];
  mvtStatusExcluded: string[];
  pnCode?: string;
  withAlternatives: boolean;
  finalReceiverSiteId?: number;
  finalReceiverWarehouseId?: number;
  finalReceiverCustomerCode?: string;
  untilRealDate?: Date;
  untilPlannedDate?: Date;
  criticality?: string;
  dfShipmentSearch: boolean;
}
