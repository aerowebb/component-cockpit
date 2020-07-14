import { BidoEquipmentEvolutionDTO } from './bido-equipment-evolution-dto.interface';

export interface BidoEquipmentEvolutionInputOutputDTO {
  bidoEquipmentEvolutionDTO: BidoEquipmentEvolutionDTO;
  application?: boolean;
  newApplication?: string;
  event?: boolean;
  designation?: string;
  _expand?: boolean | false;
}
