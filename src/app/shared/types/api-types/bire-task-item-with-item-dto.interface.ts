import { BireItemDTO } from './bire-item-dto.interface';
import { BireTaskItemDTO } from './bire-task-item-dto.interface';

export interface BireTaskItemWithItemDTO extends BireTaskItemDTO {
  bireItemDTO: BireItemDTO;
}
