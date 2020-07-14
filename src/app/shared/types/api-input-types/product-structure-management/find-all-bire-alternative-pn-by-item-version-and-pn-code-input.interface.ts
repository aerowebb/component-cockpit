import { BireItemVersionDTOId } from '../../api-types/bire-item-version-dto-id.interface';

export interface FindAllBireAlternativePnByItemVersionAndPnCodeInput {
  bireItemVersionDTOId: BireItemVersionDTOId;
  pnCode: string;
}
