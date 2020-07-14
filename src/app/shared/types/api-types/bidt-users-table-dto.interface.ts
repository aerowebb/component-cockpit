import { BidoUserDTO } from './bido-user-dto.interface';

export interface UsersTableDTO  {
    bidoUserDTO? : BidoUserDTO ;
    company?: string;
    employee?: string;
  }
