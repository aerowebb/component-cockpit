import { BirePlanItemDTO } from '../../api-types/bire-plan-item-dto.interface';

export interface ItemsAssociatedTableDTO {
  birePlanItemDTO?: BirePlanItemDTO;
  familyVariant?: string;
  itemCode?: string;
  designation?: string;
}
