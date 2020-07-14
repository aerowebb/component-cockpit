import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBirePnAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  pnCode?: string;
  action?: string;
}
