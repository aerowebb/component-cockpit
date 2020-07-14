import { BidmWorkOrderDTO } from './bidm-work-order-dto.interface';
import { WorkOrderEvolutionInput } from './work-order-eveolution-input.interface';
import { WorkOrderTaskDTO } from './work-order-task-dto.interface';

export interface UpdateLogbookFromWorkOrderInput {
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  woTaskList: WorkOrderTaskDTO[];
  woEvolutionInputList: WorkOrderEvolutionInput[];
  evolutionPnUpdateAvailable: boolean;
}
