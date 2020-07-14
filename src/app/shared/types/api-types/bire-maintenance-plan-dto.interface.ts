export interface BireMaintenancePlanDTO {
  planCode?: string;
  planName?: string;
  planDescription?: string;
  planRevisionNumber?: string;
  planRevisionDate?: Date;
  planApprovalNumber?: string;
  planApprovalDate?: Date;
  planValidityEndDate?: Date;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  ampplanCode?: string;
}
