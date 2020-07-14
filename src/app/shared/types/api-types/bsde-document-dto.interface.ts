export interface BsdeDocumentDTO {
  documentId?: string;
  findingProjectId?: string;
  findingBsdInvId?: string;
  findingId?: string;
  inventoryBsdProjectId?: string;
  invId?: string;
  documentCode?: string;
  documentName?: string;
  documentContent?: Uint8Array;
  documentDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
