import { BidoContactDTO } from './bido-contact-dto.interface';

export interface BidoNotificationContactDTO {
  notificationCode?: string;
  contactName?: string;
  bidoContactDTO?: BidoContactDTO;
}
