import { AttributeDTO } from './attribute-dto.interface';

export interface HBireVariantVersionDTO extends AttributeDTO {
  variantCode: string;
  structureType: string;
  familyCode: string;
  variantName: string;
  variantRevisionNumber: string;
  variantRevisionDate: Date;
  date: string;
  author: string;
  action: string;
  status: string;
  timestamp: string;
}
