import {ControlConfigInventoryInputDTO} from './control-config-inventory-input-dto.interface';

export interface ControlConfigInventoryOutputDTO {

 	actionCause?: string;
	actionFeu?: string;
	actionMessage?: string;
	actionImpact?: string;
	report?: string;
	ControlConfigInventoryInputData?: ControlConfigInventoryInputDTO;
	
}
