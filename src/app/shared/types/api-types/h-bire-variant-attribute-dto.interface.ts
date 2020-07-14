import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireVariantAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  action?: string;
}
