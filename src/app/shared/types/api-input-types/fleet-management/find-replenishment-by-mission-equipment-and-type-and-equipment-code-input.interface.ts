import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  replenishmentType: string;
  engineCode?: string;
}
