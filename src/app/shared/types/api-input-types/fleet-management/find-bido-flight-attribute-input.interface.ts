import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface FindBidoFlightAttributeInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  attributeId: string;
}
