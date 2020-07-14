import { HFBidoEquipmentDTO } from './hf-bido-equipment-dto.interface';

export interface AssetHistoryDTO {
  fFBidoEquipmentDTO: HFBidoEquipmentDTO;
  modelName?: string;
  ratingName?: string;
}
