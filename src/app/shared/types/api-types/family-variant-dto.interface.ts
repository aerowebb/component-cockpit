import { LabelValue } from '../label-value.interface';

export interface FamilyVariantDTO {
  familyCode?: string;
  familyname?: string;
  structureType?: string;
  variantCode?: string;
  variantName?: string;
  labelValueDTO?: LabelValue<string>;
}
