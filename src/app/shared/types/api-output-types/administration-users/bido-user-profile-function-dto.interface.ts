import { BidoCustomerDTO } from '../../api-types/bido-customer-dto.interface';
import { BidoMandantUserDTO } from '../../api-types/bido-mandant-user-dto.interface';
import { BidoUserDTO } from '../../api-types/bido-user-dto.interface';
import { BidtCompanyDTO } from '../../api-types/bidt-company-dto.interface';

import { UserProfileMappedFunctions } from './bido-user-profile-mapped-function-dto.interface';

export interface UserProfileFunctionDTO {
  bidoUserDTO?: BidoUserDTO;
  bidoCustomerDTO?: BidoCustomerDTO;
  bidtCompanyDTO?: BidtCompanyDTO;
  userProfileListDTO?: UserProfileMappedFunctions[];
  bidoMandantUserDTO?: BidoMandantUserDTO[];
}
