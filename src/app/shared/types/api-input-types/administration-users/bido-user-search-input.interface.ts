import { BidoUserDTO } from '../../api-types/bido-user-dto.interface';

export interface BidoUserSearchInput {
  bidoUserDTO: BidoUserDTO;
  companyName?: string;
}
