import { BireTaskAttributeDTO } from './bire-task-attribute-dto.interface';
import { TaskDecompositionTableAttributeDTO } from './task-decomposition-table-attribute-dto.interface';

export interface SaveBireTaskInput {
  visitCode?: string;
  visitVersion?: string;
  visitDesignation?: string;
  visitDescription?: string;
  taskDecompositionTableAttributeAddedDTO?: TaskDecompositionTableAttributeDTO[];
  taskDecompositionTableAttributeRemoveDTO?: TaskDecompositionTableAttributeDTO[];
  bireTaskAttributeUpdatedList?: BireTaskAttributeDTO[];
  statusState?: string;
}
