export interface BidmDocumentDTO {
  documentId?: string;
  projectId?: string;
  findingId?: string;
  bidProjectId?: string;
  woId?: string;
  documentCode?: string;
  documentName?: string;
  documentContent?: Uint8Array;
  documentDescription?: string;
  documentType?: string;
  documentCategory?: string;
  documentPublicationDate?: Date;
  documentSource?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
