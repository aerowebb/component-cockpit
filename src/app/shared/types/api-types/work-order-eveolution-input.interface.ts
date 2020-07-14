import { WorkOrderEvolutionDTO } from './work-order-evolution-dto.interface';

export interface WorkOrderEvolutionInput {
  workOrderEvolutionDTO: WorkOrderEvolutionDTO;
  potentialNewPnList: string[];
}
