import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';

export interface ReportDefectElementDTO {
  controlResultAlt?: string;
  controlResultIcon?: string;
  ddAuthorizationNumber?: string;
  ddAuthorizedDelayUnit?: string;
  ddAuthorizedDelayValue?: string;
  ddDelayCategory?: string;
  defectCADescription?: string;
  defectCADescriptionShort?: string; // Corrective Action
  defectCAProposedTask?: string;
  defectDescription?: string;
  defectDescriptionShort?: string;
  defectDetectionContext?: string; // Context
  defectIsCritical: boolean; // Critical
  defectLastAuthor?: string;
  defectCALastAuthor?: string;
  deferralLastAuthor?: string;
  defectLocation?: string;
  defectLogNumber?: string;
  defectTitle?: string;
  defectMELAlertObject?: string;
  defectMELAlertObjectDisplayed?: string;
  defectName?: string;
  defectToAssociateToACRS: boolean;
  deferralDelay?: string;
  deferralFlightRestriction?: string;
  formattedNotificationEndDate?: string;
  formattedNotificationStartDate?: string; // Date
  isDeferred: boolean;
  notificationCode?: string;
  notificationEndDate?: Date;
  notificationLinkedEventCode?: string; // Linked event
  notificationStartDate?: Date;
  notificationStatus?: string; // Status
  rootCauseText?: string;
  defectMELAlertVisible: boolean;
  remainingText?: string; // Remaining Time
  bidoNotificationDTO: BidoNotificationDTO;
  rowId: number;
}
