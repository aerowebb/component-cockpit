export interface ReportMessageDTO {
  timestamp?: number;
  severity?: number;
  message?: string;
  eventCode?: string;
  customField?: string;
  lineInXLS?: number;
  concernedObjectClass?: string;
}
