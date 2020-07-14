import { BidoProfileDTO } from './bido-profile-dto.interface';
import { ProfileBuildingBlockDTO } from './profile-building-block-dto.interface';

export interface ProfileManagementWithUseCaseDTO {
  bidoProfileDTO: BidoProfileDTO;
  buildingBlocks: ProfileBuildingBlockDTO[];
}
