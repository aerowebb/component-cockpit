import { BidtWarehouseDTO } from '../../api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface GetBidtStockMvtAlertOutputDTO {
  alertDate?: Date;
  alertDateText?: string;
  alertType?: string;
  alertText?: string;
  alertTextCode?: string;
  alertDesign?: string;
  alertMaterial?: string;
  alertSN?: string;
  alertBN?: string;
  alertDescription?: string;
  alertWarehouseData?: BidtWarehouseDTO;
  warehouseCode?: string;
  warehouseName?: string;
  suppliersByMaterialMap?: LabelValue<string>[];
  selectedSuppliersByMaterial?: string;
  materialCode?: string;
  alertEndDateText?: string;
  alertThresholdHigh?: number;
  alertThresholdLow?: number;
}
