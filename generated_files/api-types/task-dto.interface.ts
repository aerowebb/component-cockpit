import {BireTaskDTO} from './bire-task-dto.interface';
import {NotificationDTO} from './notification-dto.interface';

export interface TaskDTO {

 	bireTaskData?: BireTaskDTO;
	code?: string;
	version?: string;
	designation?: string;
	type?: string;
	this$0?: NotificationDTO;
	
}
