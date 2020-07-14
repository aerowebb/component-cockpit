import { ReportMessageDTO } from '../../api-types/report-message-dto.interface';

export interface InstallAssetOutputDTO {
  equipmentCode?: string;
  reportDTO?: ReportMessageDTO;
  isInstalled?: boolean;
  installMessageException?: string;
}
