import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface CheckGoNoGoWPsOfFlightInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  equipmentCode: string;
  missionCode: string;
  occurrence: number;
}
