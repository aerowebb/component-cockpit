import { BidoBireDocumentDTO } from './bido-bire-documentdto';

export interface BidoDocumentationDTO extends BidoBireDocumentDTO {
  docPublicationDate?: Date;
  docEndOfValidityDate?: Date;
  docCategory?: string;
  customerCode?: string;
  notificationCode?: string;
  flCode?: string;
  equipmentCode?: string;
  fmdId?: string;
  bidNotificationCode?: string;
}
