import { TaskApplicationDTO } from '../../api-types/task-application-dto.interface';

export interface SaveTaskApplicationInput {
  topEquipmentCode: string;
  selectedRowId: number;
  taskApplication: TaskApplicationDTO;
}
