import { ReportMessageDTO } from './report-message-dto.interface';

export interface ReportDTO {
  reportTitle?: string;
  reportHeader?: string;
  reportDate?: Date;
  reportStartTimestamp?: number;
  reportStopTimestamp?: number;
  messages?: ReportMessageDTO[];
  displayDate?: string;
}
