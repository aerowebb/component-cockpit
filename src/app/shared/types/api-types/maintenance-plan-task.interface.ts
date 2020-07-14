import { BidmProjectDTO } from './bidm-project-dto.interface';
import { BidoNotificationDTO } from './bido-notification-dto.interface';
import { BireTaskDTOId } from './bire-task-dto-id.interface';
import { BireTaskTaskDTO } from './bire-task-task-dto.interface';
import { MaintenancePlanDTO } from './maintenance-plan-dto.interface';
import { MaintenancePlanTaskApplicabilityDTO } from './maintenance-plan-task-applicability-dto.interface';
import { MaintenancePlanTaskApplicationDTO } from './maintenance-plan-task-application-dto.interface';
import { MaintenancePlanVisitDTO } from './maintenance-plan-visit-dto.interface';

export interface MaintenancePlanTask {
  bireTaskDTOId?: BireTaskDTOId;
  plan?: MaintenancePlanDTO;
  maintenancePlanTaskAlternativeList?: MaintenancePlanTask[];
  visit?: MaintenancePlanVisitDTO;
  bireTaskTaskData?: BireTaskTaskDTO;
  taskApplications?: MaintenancePlanTaskApplicationDTO[];
  workPostponementRequest?: BidoNotificationDTO;
  nextWorkPackage?: BidmProjectDTO;
  maintenancePlanTaskApplicability?: MaintenancePlanTaskApplicabilityDTO;
  emptySelection?: boolean;
  groupingCode?: string;
}
