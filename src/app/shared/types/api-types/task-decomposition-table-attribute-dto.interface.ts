import { BireTaskDTO } from './bire-task-dto.interface';

export interface TaskDecompositionTableAttributeDTO {
  bireTask?: BireTaskDTO;
  taskCode?: string;
  taskVersion?: string;
  taskDesignation?: string;
  taskGroup?: string;
  taskType?: string;
  groupCode?: string;
  periodicityType?: string;
  sequenceNumber?: number;
}
