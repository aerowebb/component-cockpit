import { LabelValue } from '../label-value.interface';

import { BireVariantVersionDTO } from './bire-variant-version-dto.interface';

export interface FindBireVariantVersionsByFamilyFunctionAlternativeDTO {
  labelValue: LabelValue<string>;
  bireVariantVersionDTO: BireVariantVersionDTO;
}
