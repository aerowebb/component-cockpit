import { BireDocumentDTO } from './bire-document-dto.interface';

export interface BireDocItemDTO {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  docCode?: string;
  orderNumber?: number;
  applicability?: string;
  isForIpc1?: boolean;
  isForIpc2?: boolean;
  bireDocumentDTO?: BireDocumentDTO;
}
