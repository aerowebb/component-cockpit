import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface MaterialAndServicesOutput {
  bidtStockMvtDTO?: BidtStockMvtDTO;
  id?: number;
  pnText?: string;
  serialNumber?: string;
  batchNumber?: string;
  quantity?: number;
  productionLeadTime?: number;
  price?: number;
  discountPercent?: number;
  discountValue?: number;
  priceAfterDiscount?: number;
  totalPrice?: number;
  currency?: string;
  warehouse?: string;
  partStatus?: string;
  completion?: string;
  consecutiveDocument?: string;
  logicState?: number;
  byQuotation?: boolean;
  quantityForTable?: string;
  materialName?: string;
  _obj?: MaterialAndServicesOutput;
  _expand?: boolean;
  _dataKey?: number;
}
