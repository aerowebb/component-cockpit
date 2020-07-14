import { BireTaskDTO } from './bire-task-dto.interface';

export interface LinkedTaskDTO {
  bireTaskDTO: BireTaskDTO;
  linkType?: string;
  sequenceNumber?: number;
  linkedTaskMain?: boolean;
}
