import { BidoAttributeDTOId } from '../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BireAttributeDTOId } from '../../../shared/types/api-types/bire-attribute-dto-id.interface';

export interface AttributeTransferDTO {
  isEngineering: boolean;
  fleetAttributeId ?: BidoAttributeDTOId;
  engineeringAttributeId ?: BireAttributeDTOId;
}
