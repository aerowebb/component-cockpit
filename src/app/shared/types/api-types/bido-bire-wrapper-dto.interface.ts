import { BidoEquipmentDTOId } from './bido-equipment-dto-id.interface';
import { BireItemDTOId } from './bire-item-dto-id.interface';

export interface BidoBireWrapperId {
  bireItemDTOId?: BireItemDTOId;
  bidoEquipmentDTOId?: BidoEquipmentDTOId;
  sn?: string;
}
