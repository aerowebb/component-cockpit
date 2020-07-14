import { BidoNotificationTypeDTO } from '../../api-types/bido-notification-type-dto.interface';

export interface EventTypeOutputDTO {
  bidoNotificationTypeDTO?: BidoNotificationTypeDTO;
  isRemovedEnabled?: boolean;
  isUpdateEnabled?: boolean;
  isDisplayEnabled?: boolean;
}
