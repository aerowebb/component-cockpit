import { BidmProjectDTO } from './bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from './bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTO } from './bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { WorkOrderStatusDetailDTO } from './work-order-status-detail-dto.interface';

export interface WorksManagementInformationDTO {
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  bidmProjectDTO: BidmProjectDTO;
  bidmWorkOrderDataDTO: BidmWorkOrderDataDTO;
  workOrderStatusDetailDTO: WorkOrderStatusDetailDTO;
  woEquipmentDTO: BidoEquipmentDTO;
  wpEquipmentDTO: BidoEquipmentDTO;
  originText: string;
  evolutionType: string;
}
