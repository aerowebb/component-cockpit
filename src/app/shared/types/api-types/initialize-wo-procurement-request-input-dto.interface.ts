import { BireOperationDTO } from './bire-operation-dto.interface';
import { BireTaskDTO } from './bire-task-dto.interface';

export interface InitializeWoProcurementRequestInputDTO {
  bireTaskDTO?: BireTaskDTO;
  bireOperationDTOs: BireOperationDTO[];
}
