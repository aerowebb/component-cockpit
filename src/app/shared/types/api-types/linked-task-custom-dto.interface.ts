import { BireTaskCustomDTO } from './bire-task-custom-dto.interface';

export interface LinkedTaskCustomDTO {
  bireTaskDTO: BireTaskCustomDTO;
  linkType?: string;
  sequenceNumber?: number;
}
