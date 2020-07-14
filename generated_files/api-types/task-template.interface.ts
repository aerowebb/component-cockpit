import {WorkloadDTO} from './workload-dto.interface';
import {TaskTemplateDTO} from './task-template-dto.interface';
import {TaskTemplateDTO} from './task-template-dto.interface';
import {TaskTemplateDTO} from './task-template-dto.interface';

export interface TaskTemplate {

 	id?: number;
	task_id?: number;
	asset_id?: number;
	period_mh?: number;
	period_mc?: number;
	blocked?: boolean;
	mh_since_last?: number;
	mc_since_last?: number;
	workloads?: WorkloadDTO;
	related_tasks?: TaskTemplateDTO;
	anterior_tasks?: TaskTemplateDTO;
	posterior_tasks?: TaskTemplateDTO;
	
}
