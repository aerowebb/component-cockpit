import { LabelValue } from '../../label-value.interface';

import { VariantLabelValueDTO } from './variant-label-value-dto.interface';

export interface GetFamilyVariantOutputDTO {
  familyLabelValueDTO: LabelValue<string>;
  variantLabelValueDTO: VariantLabelValueDTO[];
}
