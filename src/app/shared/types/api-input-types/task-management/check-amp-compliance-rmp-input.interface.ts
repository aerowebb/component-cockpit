import { BirePlanTaskCounterDTO } from '../../api-types/bire-plan-task-counter-dto.interface';

export interface CheckAMPComplianceRMPInput {
  recommendedMaintenancePlanCode?: string;
  applicableMaintenancePlanCode?: string;
  birePlanTaskCounters?: BirePlanTaskCounterDTO;
}
