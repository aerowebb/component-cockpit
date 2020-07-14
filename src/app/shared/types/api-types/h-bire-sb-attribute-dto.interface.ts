import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireSbAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  sbNumber?: string;
  sbRevisionNumber?: string;
  action?: string;
}
