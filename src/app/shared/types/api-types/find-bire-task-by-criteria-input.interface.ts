import { BireTaskDTO } from './bire-task-dto.interface';

export interface FindBireTaskByCriteriaInput {
  bireTaskDTO?: BireTaskDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  taskTypeCodeExcluded?: string;
  notApproved?: boolean;
  maintenanceProgramPlanCode?: string;
}
