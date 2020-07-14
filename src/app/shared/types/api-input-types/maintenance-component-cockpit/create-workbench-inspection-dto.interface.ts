import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface CreateWorkbenchInspectionDTO {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  bidmProjectDTO?: BidmProjectDTO;
  bireItemDTO?: BireItemDTO;
}
