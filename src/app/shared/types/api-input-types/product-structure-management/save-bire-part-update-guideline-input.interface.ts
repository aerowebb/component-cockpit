import { BirePartUpdateGuidelineDTOId } from '../../api-output-types/product-structure-management/bire-part-update-guideline-dto-id.interface';
import { BirePartUpdateGuidelineDTO } from '../../api-output-types/product-structure-management/bire-part-update-guideline-dto.interface';

export interface SaveBirePartUpdateGuidelineInput {
  addedList?: BirePartUpdateGuidelineDTO[];
  updatedList?: BirePartUpdateGuidelineDTO[];
  deletedList?: BirePartUpdateGuidelineDTOId[];
}
