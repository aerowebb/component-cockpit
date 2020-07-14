import { BidoBireDocumentDTO } from './bido-bire-documentdto';

export interface BireDocumentDTO extends BidoBireDocumentDTO {
  docPublicationDate?: Date;
  docIsIllustration?: boolean;
  docCategory?: string;
}
