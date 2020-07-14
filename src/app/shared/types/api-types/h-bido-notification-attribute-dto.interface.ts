import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBidoNotificationAttributeDTO extends HAttributeDTO {
  notificationCode?: string;
  timestamp?: Date;
  action?: string;
}
