import { BireTaskDTOId } from '../../api-types/bire-task-dto-id.interface';

export interface ApplyTaskForFlightInput {
  taskId: BireTaskDTOId;
  chronoNumber: string;
  comment: string;
  equipmentCode: string;
  dateTime: Date;
}
