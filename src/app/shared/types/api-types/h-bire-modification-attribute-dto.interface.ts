import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireModificationAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  structureType?: string;
  familyCode?: string;
  modificationType?: string;
  modificationNumber?: string;
  modificationRevisionNumber?: string;
  action?: string;
}
