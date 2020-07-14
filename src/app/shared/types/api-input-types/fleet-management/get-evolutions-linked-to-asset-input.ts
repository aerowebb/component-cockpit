import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface GetEvolutionsLinkedToAssetInput {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  eventDate?: Date;
}
