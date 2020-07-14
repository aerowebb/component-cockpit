import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface FindBireItemVersionByItemAndPnInput {
  bireItemDTO: BireItemDTO;
  pnCode: string;
}
