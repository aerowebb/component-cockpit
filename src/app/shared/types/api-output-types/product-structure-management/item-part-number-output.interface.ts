import { BireAlternativePnDTO } from '../../api-types/bire-alternative-pn-dto.interface';
import { BireVpAttributeDTO } from '../../api-types/bire-vp-attribute-dto.interface';

export interface ItemPartNumberOutput {
  attributeDTO: BireVpAttributeDTO[];
  bireAlternativePnDTO: BireAlternativePnDTO[];
}
