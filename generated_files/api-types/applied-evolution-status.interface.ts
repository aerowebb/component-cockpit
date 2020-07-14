import {BidoEquipmentDTO} from './bido-equipment-dto.interface';
import {BidoEquipmentEvolutionDTO} from './bido-equipment-evolution-dto.interface';
import {BireEvolutionDTO} from './bire-evolution-dto.interface';
import {BidoEquipmentEvolutionDTOId} from './bido-equipment-evolution-dto-id';


export interface AppliedEvolutionStatus {

 	bidoEquipmentData?: BidoEquipmentDTO;
	atDate?: Date;
	allBidoEquipmentEvolutionData?: BidoEquipmentEvolutionDTO[];
	allAppliedBireEvolutionData?: BireEvolutionDTO[];
	evolutionComplianceStatusMap?: Map<BidoEquipmentEvolutionDTOId, number>;
	
}
