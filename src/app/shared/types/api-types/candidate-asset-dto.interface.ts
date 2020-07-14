import { BidmProjectDTO } from './bidm-project-dto.interface';
import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { BidoNotificationDTO } from './bido-notification-dto.interface';
import { BidtProcurementRequestDTO } from './bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from './bidt-site-dto.interface';
import { BidtTransferOrderDTO } from './bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';
import { BirePnDTO } from './bire-pn-dto.interface';
import { StockInformationDTO } from './stock-information-dto-interface';

export interface CandidateAssetDTO {
  equipment?: BidoEquipmentDTO;
  topEquipment?: BidoEquipmentDTO;
  alternativeType?: string;
  bookingProcurementRequest?: BidtProcurementRequestDTO;
  plannedAvailabilityDate?: string;
  potentialValue?: string;
  potentialUnit?: string;
  pn?: BirePnDTO;
  siteReceipt?: BidtSiteDTO;
  warehouseReceipt?: BidtWarehouseDTO;
  calendarPotential?: Date;
  topEquipmentLocation?: string;
  currentBidmProject?: BidmProjectDTO;
  transferOrder?: BidtTransferOrderDTO;
  _bookCandidateAssetLoading?: boolean;
  stockInformation?: StockInformationDTO;
  _hasPreemptionRight?: boolean;
  unconfirmedFailure?: BidoNotificationDTO;
}
