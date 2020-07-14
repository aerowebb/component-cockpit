import { BireReportDTO } from '../../api-types/bire-report-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface GetImportListTableOutputDTO {
  labelValueDTO: LabelValue<string>;
  bireReportDTO: BireReportDTO;
  reportId?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  reportCode?: string;
  reportName?: string;
  reportContent?: Uint8Array;
  reportDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
