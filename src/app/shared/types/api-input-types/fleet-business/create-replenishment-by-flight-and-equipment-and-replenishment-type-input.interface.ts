import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  replenishmentType: string;
  equipmentCode: string;
}
