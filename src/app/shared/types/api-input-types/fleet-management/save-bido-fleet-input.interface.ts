import { BidoFleetDTO } from '../../api-types/bido-fleet-dto.interface';
import { BidoFleetEquipmentDTO } from '../../api-types/bido-fleet-equipment-dto.interface';

export interface SaveBidoFleetInput {
  bidoFleetDTO: BidoFleetDTO;
  bidoFleetEquipmentDTOList?: BidoFleetEquipmentDTO[];
}
