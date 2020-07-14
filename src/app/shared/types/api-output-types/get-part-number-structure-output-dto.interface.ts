import { BireAlternativePnDTO } from '../api-types/bire-alternative-pn-dto.interface';
import { BireVersionPnDTO } from '../api-types/bire-version-pn-dto.interface';

export interface GetPartNumberStructureOutputDTO {
  variantCode?: string;
  versionNumber?: string;
  pn?: string;
  isn?: string;
  ipcQuantity?: string;
  mplQuantity?: string;
  description?: string;
  alternatePn?: BireAlternativePnDTO[];
  bireVersionPnDTO?: BireVersionPnDTO;
}
