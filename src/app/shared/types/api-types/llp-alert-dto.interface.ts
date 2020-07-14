import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { BidoNotificationDTO } from './bido-notification-dto.interface';

export interface LLPAlertDTO {
  equipment?: BidoEquipmentDTO;
  calendarLimit?: Date;
  residualValueInHour?: number;
  residualValueInCycle?: number;
  residualValueInOtherUnit?: string;
  llpAlertLevelInt?: number;
  workPostponementRequest?: BidoNotificationDTO;
}
