import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface FindBireItemsBySearchCriteriaInput {
  bireItemDTOCriteria: BireItemDTO;
  pnCode?: string;
  attribute?: MapConstructor;
  autoFilterFlFunction?: string;
}
