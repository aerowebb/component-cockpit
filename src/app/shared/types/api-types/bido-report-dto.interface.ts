export interface BidoReportDTO {
  reportId?: string;
  equipmentCode?: string;
  familyVariantCode?: string;
  reportCode?: string;
  reportName?: string;
  reportContent?: Uint8Array;
  reportDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
