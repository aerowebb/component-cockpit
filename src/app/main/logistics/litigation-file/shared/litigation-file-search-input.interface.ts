export interface LitigationFileSearchInput {
  litigationId?: string;
  litigationNumber?: string;
  type?: string;
  foundOn?: Date;
  createdOn?: Date;
  treatmentResponsible?: string;
  qualityControl?: string;
  otherSpeaker?: string;
  documentType?: string;
  documentNumber?: string;
  criticity?: string[];
  disputedElementDocType?: string;
  siteId?: number;
  warehouseId?: string;
  locationId?: string;
  warehouseType?: string;
}
