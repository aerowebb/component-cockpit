import { LabelValue } from '../../label-value.interface';

export interface GetFamilyVariantOutputDTO {
  familyCode: string;
  structureType: string;
  variantCode: string;
  variantName: string;
  familyName: string;
  familyLabelValueDTO: LabelValue<string>;
  variantLabelValueDTO: LabelValue<string>;
  labelValueDTO: LabelValue<string>;
}
