import { BidoPreferenceUserDTO } from '../api-types/bido-preference-user-dto.interface';

export interface InspectionMatrixOutput {
  lineNumber?: string;
  sentence?: string;
  type?: string;
  pn?: string;
  mroCenter?: string;
  customer?: string;
  attributeValue?: string;
  family?: string;
  variant?: string;
  item?: string;
  matching?: string;
  decision?: string;
  favoriteCombination?: boolean;
  favouriteDecision?: boolean;
  status?: string;
  bidoPreferenceUserDTO?: BidoPreferenceUserDTO;
}
