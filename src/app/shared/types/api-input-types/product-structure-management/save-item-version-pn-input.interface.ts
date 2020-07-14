import { BireAlternativePnDTO } from '../../api-types/bire-alternative-pn-dto.interface';
import { BireItemVersionDTOId } from '../../api-types/bire-item-version-dto-id.interface';
import { BireVersionPnDTOId } from '../../api-types/bire-version-pn-dto-id.interface';
import { BireVersionPnDTO } from '../../api-types/bire-version-pn-dto.interface';

import { BireVpAttributeInput } from './bire-vp-attribute-input.interface';

export interface SaveItemVersionPnInput {
  bireItemVersionDTOId?: BireItemVersionDTOId;
  createBireVersionPnDTO?: BireVersionPnDTO;
  updateBireVersionPnDTO?: BireVersionPnDTO;
  removeBireVersionPnDTOId?: BireVersionPnDTOId;
  bireAlternativePnDTOAddedList?: BireAlternativePnDTO[];
  bireVpAttributeInput?: BireVpAttributeInput;
}
