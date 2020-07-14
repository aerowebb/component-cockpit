import { StockInformationDTO } from './stock-information-dto-interface';

export interface SendToRepairDTO {
  pnCode?: string;
  sn?: string;
  shippingDate?: Date;
  siteSender?: number;
  siteReceiver?: number;
  internalWorkshop?: number;
  receiverCustomerCode?: string;
  conditioningWorkshopId?: number;
  warehouseSender?: number;
  warehouseReceiver?: number;
  taskTypeCode?: string;
  stockInformation?: StockInformationDTO;
}
