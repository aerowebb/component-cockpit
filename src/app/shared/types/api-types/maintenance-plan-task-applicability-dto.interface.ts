import { BireTaskDTOId } from './bire-task-dto-id.interface';

export interface MaintenancePlanTaskApplicabilityDTO {
  applicationDate?: Date;
  bireTaskPK?: BireTaskDTOId;
  originalDeadlines?: string;
  notificationCode?: string;
  sysUpdateDate?: Date;
  ignoreInitialDeadlineSelected?: boolean;
  comment?: string;
}
