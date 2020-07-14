import { BireReportDTOId } from '../../api-types/bire-report-dto-id.interface';

export interface RemoveDataInput {
  bireReportDTOId: BireReportDTOId[];
  data: string;
}
