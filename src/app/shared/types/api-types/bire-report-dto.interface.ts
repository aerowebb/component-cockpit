export interface BireReportDTO {
  reportId?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  reportCode?: string;
  reportName?: string;
  reportContent?: Uint8Array;
  reportDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
