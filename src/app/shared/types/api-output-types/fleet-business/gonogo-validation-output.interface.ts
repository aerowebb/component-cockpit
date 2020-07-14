import { BidoFlightAttributeDTO } from '../../api-types/bido-flight-attribute-dto.interface';
import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';

import { GoNoGoValidationDefectLWO } from './gonogo-validation-defect-lwo.interface';
import { GoNoGoValidationReportElementDTO } from './gonogo-validation-report-element-dto.interface';

export interface GoNoGoValidationOutput {
  acrsEventStatus: BidoNotificationDTO;
  gonogoValidation: BidoFlightAttributeDTO;
  defectlist: GoNoGoValidationDefectLWO[];
  acrsAvailabilityList: GoNoGoValidationReportElementDTO[];
  missionAbilityList: GoNoGoValidationReportElementDTO[];
  missionAvailabilityList: GoNoGoValidationReportElementDTO[];
}
