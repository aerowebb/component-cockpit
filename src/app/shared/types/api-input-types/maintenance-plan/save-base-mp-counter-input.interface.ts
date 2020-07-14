import { TaskCounterDTO } from '../../api-types/task-counter-dto.interface';

export interface SaveBaseMpCounterInput {
  equipmentCode?: string;
  taskCode?: string;
  taskVersion?: string;
  isNew?: boolean;
  taskCounter?: TaskCounterDTO;
}
