import {BireItemDTO} from './bire-item-dto.interface';
import {InventoryDTO} from './inventory-dto.interface';
import {TargetDTO} from './target-dto.interface';
import {ReportMessageDTO} from './report-message-dto.interface';

export interface ControlConfigInventoryInputDTO {

 	bireItemData?: BireItemDTO;
	inventoryData?: InventoryDTO;
	targetData?: TargetDTO;
	targetDataList?: List????;
	potentialDataList?: List????;
	sentenceRemoved?: boolean;
	sentenceDamaged?: boolean;
	sentenceMissed?: boolean;
	sentenceOverhaul?: boolean;
	removedInConfig?: boolean;
	modifiedInConfig?: boolean;
	pnUnknown?: boolean;
	dismantleItem?: boolean;
	controlConfiguration?: boolean;
	controlStructure?: boolean;
	controlPotential?: boolean;
	controlSentencing?: boolean;
	controlUnknown?: boolean;
	assetConcernedReportMessage?: ReportMessageDTO;
	
}
