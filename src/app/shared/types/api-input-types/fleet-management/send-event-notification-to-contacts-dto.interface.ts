import { BidoContactDTO } from '../../api-types/bido-contact-dto.interface';
import { BidoNotificationDTOId } from '../../api-types/bido-notification-dto-id.interface';

export interface SendEventNotificationToContactsDTO {
  bidoNotificationDTOId?: BidoNotificationDTOId;
  contactList?: BidoContactDTO[];
  sendGlobalMail?: boolean;
  // tslint:disable-next-line:no-any
  documentList?: any[];
  isRootCauseNewOrDefect?: boolean;
}
