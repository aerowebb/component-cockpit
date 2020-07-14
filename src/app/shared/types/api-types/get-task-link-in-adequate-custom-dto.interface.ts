import { LinkedTaskCustomDTO } from './linked-task-custom-dto.interface';
import { TaskTreeCustomNode } from './task-tree-custom-node-dto.interface';

export interface GetTaskLinkInAdequateCustomDTO {
  superiorTasks?: LinkedTaskCustomDTO[];
  anteriorInSequence?: LinkedTaskCustomDTO[];
  posteriorInSequence?: LinkedTaskCustomDTO[];
  linkedTasks?: LinkedTaskCustomDTO[];
  taskTreeCustomNode?: TaskTreeCustomNode;
}
