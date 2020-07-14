import {ControlConfigItemInputDTO} from './control-config-item-input-dto.interface';

export interface ControlConfigItemOutputDTO {

 	actionCause?: string;
	actionFeu?: string;
	actionMessage?: string;
	actionImpact?: string;
	report?: string;
	controlConfigItemInputData?: ControlConfigItemInputDTO;
	
}
