import { BsdeStorePnDTO } from '../../api-types/bsde-store-pn-dto.interface';

export interface InventoryByWarehouseStockListOutputDTO {
  bsdeStorePnDTO : BsdeStorePnDTO;
  totalValue ? : string;
  averageValue ? : string;
}
