import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';

export interface DocumentTabOutput {
  bidtDocumentDTO: BidtDocumentDTO;
  docSize: string;
  docFile: Uint8Array;
  documentCode: string;
  documentName: string;
  descriptionFile: string;
  type: string;
  docUrl: string;
  date: string;
}
