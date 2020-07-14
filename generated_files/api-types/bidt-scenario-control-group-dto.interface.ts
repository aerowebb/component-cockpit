import {BidtControlGroupDTO} from './bidt-control-group-dto.interface';

export interface BidtScenarioControlGroupDTO {

 	bidtControlGroupData?: BidtControlGroupDTO;
	bidtControlGroupId?: number;
	bidtScenarioId?: number;
	isMandatory?: number;
	isVisible?: number;
	isReadOnly?: number;
	
}
