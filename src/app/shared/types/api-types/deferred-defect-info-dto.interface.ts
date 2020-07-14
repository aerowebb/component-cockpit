import { BireItemDTO } from './bire-item-dto.interface';

export interface DeferredDefectInfoDTO {
  delayType?: number;
  delayCategory?: string;
  delayValue?: string;
  delayUnit?: string;
  proposedTask?: string;
  correctiveActionDescription?: string;
  flightRestrictions?: string;
  bireItemData?: BireItemDTO;
}
