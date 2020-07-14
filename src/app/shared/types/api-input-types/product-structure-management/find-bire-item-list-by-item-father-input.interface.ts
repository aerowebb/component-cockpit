import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface FindBireItemListByItemFatherInput {
  bireItemDTO: BireItemDTO;
  withLinkedObjects: boolean;
  withVersionPns: boolean;
}
