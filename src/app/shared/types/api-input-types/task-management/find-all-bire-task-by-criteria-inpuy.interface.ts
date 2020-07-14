import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface FindAllBireTaskByCriteriaInput {
  bireTaskDTO?: BireTaskDTO;
  familyCodeCriteria?: string;
  structureTypeCriteria?: string;
  variantCodeCriteria?: string;
  taskTypeCodeExcluded?: string;
}
