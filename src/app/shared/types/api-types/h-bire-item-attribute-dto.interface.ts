import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireItemAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  marks?: string;
  action?: string;
}
