import { BireRatingDTO } from '../../api-types/bire-rating-dto.interface';

export interface FindBireRatingsBySearchCriteriaInput {
  useCaseCode?: string;
  bireRatingDTOCriteria?: BireRatingDTO;
  pnCode?: string;
  variantCode?: string;
}
