import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface ValidateGoNoGoInput {
  relatedEquipment: BidoEquipmentDTO;
  missionCode: string;
  missionOccurence: number;
  comment: string;
}
