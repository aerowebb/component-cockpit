import {BireTaskDTOId} from './bire-task-dto-id.interface';
import {MaintenancePlanDTO} from './maintenance-plan-dto.interface';
import {MaintenancePlanVisitDTO} from './maintenance-plan-visit-dto.interface';
import {BireTaskTaskDTO} from './bire-task-task-dto.interface';
import {BidoNotificationDTO} from './bido-notification-dto.interface';
import {BidmProjectDTO} from './bidm-project-dto.interface';
import {MaintenancePlanTaskApplicabilityDTO} from './maintenance-plan-task-applicability-dto.interface';

export interface MaintenancePlanVisit {

 	maintenancePlanTaskList?: List????;
	bireTaskPK?: BireTaskDTOId????;
	plan?: MaintenancePlanDTO;
	maintenancePlanTaskAlternativeList?: List????;
	visit?: MaintenancePlanVisitDTO;
	birePlanTaskCountersMap?: Map????;
	bidoPlanTaskCountersMap?: Map????;
	bireTaskTaskData?: BireTaskTaskDTO;
	taskApplications?: List????;
	workPostponementRequest?: BidoNotificationDTO;
	nextWorkPackage?: BidmProjectDTO;
	maintenancePlanTaskApplicability?: MaintenancePlanTaskApplicabilityDTO;
	emptySelection?: boolean;
	groupingCode?: string;
	
}
