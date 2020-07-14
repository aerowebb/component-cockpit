import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface VisitCriteriaMPInput {
  bireTaskDTO?: BireTaskDTO;
  mpCode?: string;
  mpName?: string;
}
