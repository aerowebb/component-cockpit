import { BidoFunctionTypeDTO } from '../../api-types/bido-function-type-dto.interface';
import { BidoProfileFunctionDTO } from '../../api-types/bido-profile-function-dto.interface';
import { BireFamilyDTO } from '../../api-types/bire-family-dto.interface';
import { BireModificationDTOId } from '../../api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';
import { BireRatingDTOId } from '../../api-types/bire-rating-dto-id.interface';
import { BireRatingDTO } from '../../api-types/bire-rating-dto.interface';

export interface SaveFamilyDataInput {
  bireFamilyDTO?: BireFamilyDTO;

  bidoFunctionTypeAddedList?: BidoFunctionTypeDTO[];
  bidoFunctionTypeUpdatedList?: BidoFunctionTypeDTO[];

  bidoProfileFunctionAddedList?: BidoProfileFunctionDTO[];

  bireModificationAddedList?: BireModificationDTO[];
  bireModificationUpdatedList?: BireModificationDTO[];
  bireModificationRemovedList?: BireModificationDTOId[];

  bireRatingAddedList?: BireRatingDTO[];
  bireRatingUpdatedList?: BireRatingDTO[];
  bireRatingRemovedList?: BireRatingDTOId[];
}
