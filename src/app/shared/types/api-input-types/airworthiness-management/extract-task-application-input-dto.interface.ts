import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface ExtractTaskApplicationInputDTO {
  selectedEquipmentCodes: string[];
  selectedTaskKeys: BireTaskDTO[];
  toDate?: Date;
}
