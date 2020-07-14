import { BidoEquipmentEvolutionDTO } from '../../api-types/bido-equipment-evolution-dto.interface';

export interface GetEvolutionsLinkedToAssetOutput {
  bidoEquipmentEvolutionDTO?: BidoEquipmentEvolutionDTO[];
  NewbidoEquipmentEvolutionDTO?: BidoEquipmentEvolutionDTO[];
}
