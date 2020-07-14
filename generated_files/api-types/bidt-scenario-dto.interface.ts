import {BidtScenarioControlGroupDTO} from './bidt-scenario-control-group-dto.interface';
import {BidtWfActionDTO} from './bidt-wf-action-dto.interface';
import {BidtScenarioProfileDTO} from './bidt-scenario-profile-dto.interface';

export interface BidtScenarioDTO {

 	bidtScenarioControlGroupList?: BidtScenarioControlGroupDTO[];
	bidtWfActionList?: BidtWfActionDTO[];
	bidtScenarioProfileList?: BidtScenarioProfileDTO[];
	customizationByControlIdentifier?: Map<string, number>;
	targetStatusKeyList?: string[];
	bidtFuncObjectId?: number;
	name?: string;
	description?: string;
	initialStatusKey?: string;
	
}