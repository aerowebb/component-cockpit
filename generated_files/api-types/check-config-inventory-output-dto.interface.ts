import {GenerateConfigOutputDTO} from './generate-config-output-dto.interface';
import {ControlConfigInventoryOutputDTO} from './control-config-inventory-output-dto.interface';

export interface CheckConfigInventoryOutputDTO {

 	generateConfigOutputData?: GenerateConfigOutputDTO;
	controlConfigInventoryOutputData?: ControlConfigInventoryOutputDTO;
	
}
