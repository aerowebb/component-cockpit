import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';

export interface BireDocPugDTO {
  mandant?: string;
  birMandant?: string;
  pugId?: number;
  docCode?: string;
  bireDocumentDto?: BireDocumentDTO;
}
