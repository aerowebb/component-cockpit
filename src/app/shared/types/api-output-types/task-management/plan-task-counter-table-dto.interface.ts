import { BirePlanTaskCounterDTO } from '../../api-types/bire-plan-task-counter-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface PlanTaskCounterTableDTO {
  bireTaskDTO?: BireTaskDTO;
  birePlanTaskCounterDTO: BirePlanTaskCounterDTO;
  visitCode?: string;
  visitVersion?: string;
  complianceLight?: string;
  complianceDetail?: string;
  isRemovable?: boolean;
  visitDesignation?: string;
}
