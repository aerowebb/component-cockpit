import { ReportMessageDTO } from '../../api-types/report-message-dto.interface';

export interface RemovalAssetOutputDTO {
  equipmentCode?: string;
  reportDTO?: ReportMessageDTO;
  isRemoved?: boolean;
  removalMessageException?: string;
}
