import { BireTaskDTO } from './bire-task-dto.interface';
import { BireTaskTaskDTO } from './bire-task-task-dto.interface';

export interface BireTaskLinkPopupOutput {
  task?: BireTaskDTO;
  taskTask?: BireTaskTaskDTO;
}
