import { BidoEquipmentEvolutionDTO } from '../../api-types/bido-equipment-evolution-dto.interface';

export interface EvolutionLinkedToAssetOutput {
  assetCode?: string;
  bidoEquipmentEvolutionList?: BidoEquipmentEvolutionDTO[];
  proposedBidoEquipmentEvolutionList?: BidoEquipmentEvolutionDTO[];
}
