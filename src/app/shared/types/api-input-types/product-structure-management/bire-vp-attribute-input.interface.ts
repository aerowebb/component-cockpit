import { BireVersionPnDTOId } from '../../api-types/bire-version-pn-dto-id.interface';
import { BireVpAttributeDTO } from '../../api-types/bire-vp-attribute-dto.interface';

export interface BireVpAttributeInput {
  bireVersionPnDTOId: BireVersionPnDTOId;
  bireVpAttributeDataList: BireVpAttributeDTO[];
}
