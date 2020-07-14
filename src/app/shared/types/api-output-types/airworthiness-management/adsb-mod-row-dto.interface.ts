export interface ADSBModRowDTO {
  asset?: string;
  number?: string; // ID
  description?: string;
  effectiveDate?: string;
  limitComplianceDate?: string;
  comment?: string; // Document Reference
  executionDetails?: string;
  firstTime?: string; // One time interval
  periodicity?: string;
  unit?: string;
  lastApplicationDate?: string;
  lastApplicationHours?: number;
  lastApplicationCycles?: number;
  mandatory?: boolean;
  embodied?: boolean;
  complianceStatus?: string;
  adSbModType?: string;
  nextApplication?: string;
  remainingApplication?: string;
  checkResultIcon?: string;
  checkResultTooltip?: string;
  rowId?: number;
  _expand?: boolean | false;
  control?: string;
  id?: string; // assign number
  adSbModDTOId?: Object;
}
