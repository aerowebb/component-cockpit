import { BidoDocumentationDTO } from '../../api-types/bido-documentation-dto.interface';

export interface UpdateFieldsOfBidoDocumentationInput {
  bidoDocumentationDTO: BidoDocumentationDTO;
  docName?: string;
  docDescription?: string;
  publicationDate?: Date;
  endOfValidityDate?: Date;
  docCategory?: string;
  docVersion?: string;
  docLanguage?: string;
  isUpdate?: boolean;
}
