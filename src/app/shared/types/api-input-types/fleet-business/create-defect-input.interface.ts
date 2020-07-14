import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface CreateDefectInput {
  equipment: BidoEquipmentDTO;
  defectType: string;
  missionInstance: string;
}
