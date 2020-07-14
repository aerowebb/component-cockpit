import { TaskCounterDTO } from '../../api-types/task-counter-dto.interface';

export interface SaveTaskCounterInput {
  topEquipmentCode: string;
  selectedRowId: number;
  taskCounter: TaskCounterDTO;
  isNew: boolean;
}
