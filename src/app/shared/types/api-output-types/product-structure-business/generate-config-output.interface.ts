import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { TargetDTO } from '../../api-types/target-dto.interface';

export interface GenerateConfigOutput {
  targetDataList?: TargetDTO[];
  removedInConfig?: boolean;
  modifiedInConfig?: boolean;
  generatePnUnknown?: boolean;
  actionCause?: string;
  actionFeu?: string;
  actionMessage?: string;
  report?: string;
  bireItemData?: BireItemDTO;
}
