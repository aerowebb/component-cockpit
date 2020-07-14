import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface DismantleOneEquipmentInput {
  date?: Date;
  newOperationalStatus?: string;
  removalReason?: string;
  warehouseCode?: number;
  workOrderCode?: string;
  workPackageCode?: string;
  stockMvt?: BidtStockMvtDTO;
}
