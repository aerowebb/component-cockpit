import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface CalculatePostFlightRecordsInformationsInput {
  equipment: BidoEquipmentDTO;
  missionCode: string;
  missionOccurrence: number;
}
