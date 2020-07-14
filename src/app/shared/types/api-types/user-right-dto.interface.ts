import { BidoProfileDTO } from './bido-profile-dto.interface';

export interface UserRightDTO {
  profile?: BidoProfileDTO;
  rightByUseCaseMap?: object;
}
