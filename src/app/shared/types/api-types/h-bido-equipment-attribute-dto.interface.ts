import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBidoEquipmentAttributeDTO extends HAttributeDTO {
  equipmentCode?: string;
  timestamp?: Date;
  action?: string;
}
