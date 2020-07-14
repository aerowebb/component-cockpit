import { ReportDTO } from '../../api-types/report-dto.interface';
export interface FleetDataTransferReportDTO {
  reportDTO?: ReportDTO;
  code?: string;
  isTransfered?: boolean;
  exceptionMessage?: string;
  reportText?: string;
  message?: string;
}
