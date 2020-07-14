import { LabelValue } from '../../label-value.interface';

export interface VariantLabelValueDTO {
  variantLabelValue: LabelValue<string>;
  familyCode: string;
  variantCode: string;
  structureType: string;
  familyName: string;
  variantName: string;
  variantRevisionDate: string;
  variantRevisionNumber: string;
  statusDate: Date;
  statusState: string;
  statusUser: string;
}
