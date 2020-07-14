import { TreeNode } from 'primeng/api';

import { BireTaskDTO } from './bire-task-dto.interface';
import { LinkedTaskDTO } from './linked-task-dto.interface';

export interface GetTaskLinkInAdequateTableDTO {
  superiorTasks?: LinkedTaskDTO[];
  taskStructure?: BireTaskDTO[];
  anteriorInSequence?: LinkedTaskDTO[];
  posteriorInSequence?: LinkedTaskDTO[];
  linkedTasks?: LinkedTaskDTO[];
  taskTreeNode?: TreeNode;
  currentTask?: LinkedTaskDTO;
}
