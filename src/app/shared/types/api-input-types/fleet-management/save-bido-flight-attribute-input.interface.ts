import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface SaveBidoFlightAttributeInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  attributeId: string;
  attributeValue: string;
}
