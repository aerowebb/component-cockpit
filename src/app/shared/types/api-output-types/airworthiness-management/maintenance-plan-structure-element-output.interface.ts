import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface MaintenancePlanStructureElementOutput {
  id: number;
  type?: number;

  firstColumn?: string;
  firstColumnTooltip?: string;
  alertIcon?: string;
  alertTooltip?: string;
  assetText?: string;
  configurationIcon?: string;
  configurationTooltip?: string;
  counterAlertIcon?: string;
  counterAlertTooltip?: string;
  description?: string;
  nextTerm?: string;
  period?: string;
  postponementNotificationText?: string;
  remaining?: string;
  remainingEquivalent?: string;
  remainingEquivalentInOriginalUnit?: string;
  remainingEquivalentIcon?: string;
  remainingEquivalentTooltip?: string;
  status?: string;
  usageCounterExplanation?: string;
  tolerance?: string;

  equipmentCode?: string;
  notificationCode?: string;
  sbNumber?: string;
  sbRevisionNumber?: string;
  taskCode?: string;
  taskVersion?: string;
  equipment?: BidoEquipmentDTO;
  nextWorkPackage?: BidmProjectDTO;

  children?: MaintenancePlanStructureElementOutput[];
}
