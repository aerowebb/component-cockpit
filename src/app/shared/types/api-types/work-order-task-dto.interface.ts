import { WorkOrderObjectDTO } from './work-order-object-dto.interface';

export interface WorkOrderTaskDTO extends WorkOrderObjectDTO {
  taskCode: string;
  taskVersion: string;
  taskDesignation: string;
}
