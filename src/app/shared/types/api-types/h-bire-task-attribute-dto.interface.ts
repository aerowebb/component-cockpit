import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireTaskAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  taskCode?: string;
  taskVersion?: string;
  action?: string;
}
