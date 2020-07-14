import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface FindBireItemsByFamilyVariantCode {
  labelValueDTO: LabelValue<string>;
  bireItemDTO: BireItemDTO;
}
