import { BidoEquipmentEvolutionDTO } from '../../api-types/bido-equipment-evolution-dto.interface';

export interface EvolutionLinkedToAssetOutputDTO {
  assetCode: string;
  bidoEquipmentEvolutionList: BidoEquipmentEvolutionDTO[];
  proposedBidoEquipmentEvolutionList: BidoEquipmentEvolutionDTO[];
}
