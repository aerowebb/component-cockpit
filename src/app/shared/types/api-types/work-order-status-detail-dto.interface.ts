import { BidmOperationDTO } from './bidm-operation-dto.interface';
import { BidmWorkOrderDTO } from './bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { BidoNotificationDTO } from './bido-notification-dto.interface';
import { CostAndDurationDTO } from './cost-and-duration-dto.interface';

export interface WorkOrderStatusDetailDTO {
  bidmWorkOrderData?: BidmWorkOrderDTO;
  bidoEquipmentData?: BidoEquipmentDTO;
  taskTypeKey?: string;
  taskType?: string;
  taskZone?: string;
  taskDesignation?: string;
  taskDescription?: string;
  pnSnKey?: string;
  status?: string;
  startDate?: Date;
  endDate?: Date;
  endOfWork?: Date;
  // componentsNeeded?: List????;
  // sparePartsNeeded?: List????;
  // expandablePartsNeeded?: List????;
  // bireOperationDataList?: List????;
  bidmOperationDataList?: BidmOperationDTO[];
  // bireTaskEvolutionDataList?: List????;
  // bidoNotificationDataTaskAppliedList?: List????;
  // bidoNotificationDataEvolutionAppliedList?: List????;
  // stockMvtDataPartList?: List????;
  // stockMvtDataList?: List????;
  costAndDuration: CostAndDurationDTO;
  isCritical?: boolean;
  // isMaintenancePlanUpToDate?: boolean;
  // isAssetStructureUpToDate?: boolean;
  workPostponementRequestBidoNotificationData?: BidoNotificationDTO;
  // childWorkOrderStatusDetail?: List????;
}
