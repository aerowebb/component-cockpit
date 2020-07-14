import { BidoFlDTO } from '../../api-types/bido-fl-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface InstallOneEquipmentInput {
  date?: Date;
  hasFunctionCode?: boolean;
  newOperationalStatus?: string;
  superiorAssetCode?: string;
  warehouseCode?: number;
  workOrderCode?: string;
  workPackageCode?: string;
  stockMvt?: BidtStockMvtDTO;
  selectedFl?: BidoFlDTO;
  selectedItem?: BireItemDTO;
}
