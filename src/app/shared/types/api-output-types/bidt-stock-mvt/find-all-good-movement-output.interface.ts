import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';
import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';
import { BidtSalesRequestDTO } from '../../api-types/bidt-sales-request-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface FindAllGoodMovementOutput {
  product: BirePnDTO;
  purchaseRequest: BidtPurchaseRequestDTO;
  salesRequest: BidtSalesRequestDTO;
  stockMvt: BidtStockMvtDTO;
  workOrder: BidmWorkOrderDTO;

  aircraftMsn?: string;
  repairCenter?: string;
  repairCenterCode?: string;
  stockMvtDate?: Date;
  stockType?: string;
  storageNumber?: string;
  valuation?: string;
  warehouse?: string;
  warehouseSiteId?: number;
  warehouseSiteName?: string;
  wpNumber?: number;
}
