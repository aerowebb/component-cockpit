import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface FindBireItemsBySearchCriteriaFMInput {
  bireItemDTOCriteria?: BireItemDTO;
  pnCode?: string;
  attribute?: MapConstructor;
  useCase?: string;
  module?: string;
}
