import { WorkOrderStatusDetailDTO } from '../api-types/work-order-status-detail-dto.interface';

export interface CalculateWorkOrderOutput {
  workOrderDetail: WorkOrderStatusDetailDTO;
  evolutionType?: string;
  originText: string;
}
