import { ReportDefectElementDTO } from '../../../../../shared/types/api-output-types/airworthiness-management/report-defect-element-dto.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';

import { RemainingDefectsDTO } from './remaining-defects-dto.interface';

export interface DefectsDTO extends RemainingDefectsDTO {
  rowId?: number;
  defectTitle?: string;
  controlResultAlt?: string;
  controlResultIcon?: string;
  control?: string;
  remainingText?: string; // Remaining Time
  formattedNotificationStartDate?: string; // Date
  defectDetectionContext?: string; // Context
  defectIsCritical: boolean; // Critical
  notificationStatus?: string; // Status
  defectCADescriptionShort?: string; // Corrective Action
  notificationLinkedEventCode?: string; // Linked event
  defectName?: string;
  isCriticalText?: string;
  _id?: string;
  _obj?: ReportDefectElementDTO;
  _alertLoading?: boolean | false;
  _alertTooltip?: string;
  _expand?: boolean | false;
  _potentialLoading?: boolean | false;
  bidoNotificationDTO: BidoNotificationDTO;
}
