// import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';
// import { BirePnMeasureDTO } from '../../api-types/bire-pn-measure-dto.interface';
// import { BirePnMeasureDTOId } from '../../api-types/bire-pn-measure-dto-id.interface';
// import { BirePnAttributeDTOId } from '../../api-types/bire-pn-attribute-dto-id.interface';
// import { BirePnAttributeDTO } from '../../api-types/bire-pn-attribute-dto.interface';

import { BidoFlVariantDTO } from '../../api-types/bido-fl-variant-dto.interface';
import { BireItemDTOId } from '../../api-types/bire-item-dto-id.interface';

export interface FlVariantInput {
  bidoFlVariantDTO?: BidoFlVariantDTO;
  bireItemDTOId?: BireItemDTOId;
}
