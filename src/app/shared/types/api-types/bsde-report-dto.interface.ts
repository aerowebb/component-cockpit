export interface BsdeReportDTO {
  reportId?: string;
  projectId?: string;
  reportCode?: string;
  reportName?: string;
  reportContent?: Uint8Array;
  reportDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
