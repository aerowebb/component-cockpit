import { RecordReportOutput } from '../../api-output-types/fleet-management/record-report-output.interface';

export interface DialogRecordReportInput {
  workPackageNumber?: number;
  messages?: RecordReportOutput[];
}
