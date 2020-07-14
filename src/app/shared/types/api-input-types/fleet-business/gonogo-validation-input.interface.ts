import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../api-types/bido-mission-equipment-dto.interface';

export interface GoNoGoValidationInput {
  missionCode: string;
  occurrence: number;
  bidoEquipment: BidoEquipmentDTO;
  bidoMissionEquipment: BidoMissionEquipmentDTO | undefined;
}
