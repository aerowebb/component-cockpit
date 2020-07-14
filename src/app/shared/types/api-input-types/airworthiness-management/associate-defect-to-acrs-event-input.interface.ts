import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';

export interface AssociateDefectToAcrsEventInput {
  eventCode: string;
  bidoNotificationDTOList: BidoNotificationDTO[];
}
