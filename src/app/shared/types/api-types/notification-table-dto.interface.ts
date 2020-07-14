import { BidoNotificationDTO } from './bido-notification-dto.interface';

export interface NotificationTableDto {
  bidoNotificationDTO: BidoNotificationDTO;
  notificationCategroy?: string;
  notificationType?: string;
  equipmentText?: string;
  eventStatus?: string;
}
