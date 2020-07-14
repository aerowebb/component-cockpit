import { BidoPreferenceUserDTO } from '../api-types/bido-preference-user-dto.interface';

export interface FilterListOutput {
  filterName?: string;
  author?: string;
  isPublic?: boolean;
  isPersistent?: boolean;
  graphicalReference?: string;
  bidoPreferenceUserDTO: BidoPreferenceUserDTO;
  logicalLink?: string;
}
