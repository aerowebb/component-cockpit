import { LabelValue } from '../../label-value.interface';

export interface GetVariantOutputDTO {
  variantLabelValue: LabelValue<string>;
  familyCode: string;
  variantCode: string;
  structureType: string;
  familyName: string;
  variantName: string;
}
