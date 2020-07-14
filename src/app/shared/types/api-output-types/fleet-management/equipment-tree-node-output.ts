import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface EquipmentTreeNodeOutput {
  data?: BidoEquipmentDTO;
  children?: EquipmentTreeNodeOutput[];
}
