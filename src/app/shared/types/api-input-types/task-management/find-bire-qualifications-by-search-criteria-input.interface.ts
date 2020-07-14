import { BireQualificationDTO } from '../../api-types/bire-qualification-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface FindBireQualificationsBySearchCriteriaInput {
  bireTask?: BireTaskDTO;
  bireQualification?: BireQualificationDTO;
}
