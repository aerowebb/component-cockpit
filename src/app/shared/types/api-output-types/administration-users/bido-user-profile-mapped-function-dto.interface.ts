import { BidoFunctionTypeDTO } from '../../api-types/bido-function-type-dto.interface';
import { BidoProfileDTO } from '../../api-types/bido-profile-dto.interface';

export interface UserProfileMappedFunctions {
  bidoProfileDTO?: BidoProfileDTO;
  sites?: BidoFunctionTypeDTO[];
  families?: BidoFunctionTypeDTO[];
  operators?: BidoFunctionTypeDTO[];
}
