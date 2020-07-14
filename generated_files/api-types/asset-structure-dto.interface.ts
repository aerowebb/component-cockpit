import {AssetStructureDTO} from './asset-structure-dto.interface';
import {BidoEquipmentDTO} from './bido-equipment-dto.interface';
import {BidoRatingDTO} from './bido-rating-dto.interface';
import {BidoFlDTO} from './bido-fl-dto.interface';
import {AppliedEvolutionStatusDTO} from './applied-evolution-status-dto.interface';
import {CheckConfigInventoryOutputDTO} from './check-config-inventory-output-dto.interface';
import {BidoMeasureDTO} from './bido-measure-dto.interface';
import {ControlConfigurationOutputDTO} from './control-configuration-output-dto.interface';
import {EvolutionDetailDTO} from './evolution-detail-dto.interface';
import {BireEvolutionDTO} from './bire-evolution-dto.interface';

export interface AssetStructureDTO {
 	fatherAsset?: AssetStructureDTO;
	childrenAssets?: AssetStructureDTO[];
	bidoEquipmentData?: BidoEquipmentDTO;
	bidoRatingData?: BidoRatingDTO;
	ratingText?: string;
	installationDate?: number;
	measureByCounterCode?: Map<string, BidoMeasureDTO>;
	calendarLimit?: Date;
	bidoFlData?: BidoFlDTO;
	inMel?: boolean;
	appliedEvolutionStatus?: AppliedEvolutionStatusDTO;
	relatedWoId?: string;
	replacedAsset?: AssetStructureDTO;
	assetInstalledDuringMaintenance?: boolean;
	assetRemovedDuringMaintenance?: boolean;
	controlConfigResults?: Map<string, ControlConfigurationOutputDTO>;
	checkConfigInventoryOutputData?: CheckConfigInventoryOutputDTO;
	globalControlConfigResults?: Map<string, ControlConfigurationOutputDTO>;
	globalErrorsMap?: Map<string, ControlConfigurationOutputDTO[]>;
	globalWarningsMap?: Map<string, ControlConfigurationOutputDTO[]>;
	theAssetStructureByEquipmentCodeMap?: Map<string, AssetStructureDTO>;
	bireEvolutionDataDetailsMap?: Map<String, EvolutionDetailDTO>;
	allAppliedEvolutionStatusInStructure?: AppliedEvolutionStatusDTO[];
	appliedBireEvolutionDataByFamilyVariantCodeMap?: Map<String, BireEvolutionDTO[]>;
	theoreticalBireEvolutionDataByFamilyVariantCodeMap?: Map<String, BireEvolutionDTO[]>;
	appliedInterdependencesIssuesByFamilyVariantCodeMap?: Map<String, InterdependenceDTO[]>;
	theoreticalInterdependencesIssuesByFamilyVariantCodeMap?: Map<String, InterdependenceDTO[]>;
}