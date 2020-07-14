import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from '../../api-types/bidm-work-order-dto-id.interface';
import { BirePnDTOId } from '../../api-types/bire-pn-dto-id.interface';

export interface GetQuantityInStockInput {
  serialNumber?: string;
  batchNumber?: string;
  birePnDTOId?: BirePnDTOId;
  storageBinId?: number;
  warehouseId?: number;
  siteId?: number;
  stockStatus?: string;
  stockOwnerCode?: string;
  stockTypeId?: number;
  valuationGroupCode?: string;
  bidmProjectDTOId?: BidmProjectDTOId;
  bidmWorkOrderDTOId?: BidmWorkOrderDTOId;
  purchaseRequestId?: number;
  salesRequestId?: number;
  date?: Date;
  basedOnExecutedMovements?: boolean;
  stockMvtIdToIgnore?: number;
}
