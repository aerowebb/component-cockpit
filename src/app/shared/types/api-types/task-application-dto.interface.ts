import { MaintenancePlanTaskApplicationDTO } from './maintenance-plan-task-application-dto.interface';

export interface TaskApplicationDTO {
  applicationDate?: Date;
  applicationDateUpdated?: Date;
  comment?: string;
  notificationCode?: string;
  maintenancePlanTaskApplication?: MaintenancePlanTaskApplicationDTO;
}
