import { BireItemDTOId } from './bire-item-dto-id.interface';

export interface FindBidoFlVariantsByFlCodeDTO {
  familyVariantCode?: string;
  item?: string;
  bireItemDTOId: BireItemDTOId | undefined;
  isAdded?: boolean;
  flFunction?: string;
}
