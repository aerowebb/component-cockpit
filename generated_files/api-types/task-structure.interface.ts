import {TaskStructureDTO} from './task-structure-dto.interface';
import {TaskStructureDTO} from './task-structure-dto.interface';
import {BireTaskDTO} from './bire-task-dto.interface';

export interface TaskStructure {

 	topTask?: TaskStructureDTO;
	fatherTask?: TaskStructureDTO;
	task?: BireTaskDTO;
	sequenceNumber?: number;
	childrenTaskStructureList?: List????;
	
}
