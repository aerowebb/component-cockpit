import { ReportDTO } from '../../api-types/report-dto.interface';

export interface FleetDataCopyOutputDTO {
  reportDTO?: ReportDTO;
  sourceCode?: string;
  targetCode?: string;
  exceptionMessage?: string;
  reportText?: string;
  isCopied?: boolean;
}
