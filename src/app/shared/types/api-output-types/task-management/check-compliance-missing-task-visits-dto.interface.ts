import { PlanTaskCounterTableDTO } from './plan-task-counter-table-dto.interface';

export interface CheckComplianceMissingTaskVisitsDTO {
  complianceTooltip?: string;
  maintenancePlanControlIcon?: string;
  updatedPlanTaskCounterTableDTOs?: PlanTaskCounterTableDTO[];
  missingPlanTaskCounterTableDTOs?: PlanTaskCounterTableDTO[];
}
