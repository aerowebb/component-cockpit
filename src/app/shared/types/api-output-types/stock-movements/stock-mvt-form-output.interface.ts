import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';
import { BidoCustomerDTO } from '../../api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BidtTransferOrderDTO } from '../../api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';
import { ReferenceBatchDTO } from '../fleet-management/reference-batch-dto.interface';

export interface StockMvtFormOutput {
  stockMvt: BidtStockMvtDTO;
  warehouse: BidtWarehouseDTO;
  site: BidtSiteDTO;
  equipment: BidoEquipmentDTO;
  manufacturingEquipment: ReferenceBatchDTO;
  procurementRequest: BidtProcurementRequestDTO;
  transferOrder: BidtTransferOrderDTO;
  deliveryFolder: BidtDeliveryFolderDTO;
  procReqWorkOrderDTO: BidmWorkOrderDTO;
  mvtWorkOrderDTO: BidmWorkOrderDTO;
  finalWarehouse: BidtWarehouseDTO;
  finalSite: BidtSiteDTO;
  bidoCustomerReceipt?: BidoCustomerDTO;
  birePnDTO?: BirePnDTO;
}
