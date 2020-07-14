import {BireItemDTO} from './bire-item-dto.interface';
import {TargetDTO} from './target-dto.interface';

export interface ControlConfigItemInputDTO {

 	bireItemData?: BireItemDTO;
	targetData?: TargetDTO;
	targetDataList?: Collection????;
	inventoryQuantity?: string;
	causeForRemovalImpact?: string;
	pnUnknownMode?: boolean;
	pnUnknown?: boolean;
	atLeastOneInventory?: boolean;
	isSystematicalChange?: boolean;
	removedInConfig?: boolean;
	
}
