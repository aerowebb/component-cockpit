import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireOperationAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  rangeCode?: string;
  opeCode?: string;
  opeVersion?: string;
  action?: string;
}
