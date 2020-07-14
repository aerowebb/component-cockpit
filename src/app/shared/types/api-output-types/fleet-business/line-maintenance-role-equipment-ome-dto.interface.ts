import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface LineMaintenanceRoleEquipmentOmeDTO {
  controlResult?: string;
  controlResultTooltip?: string;
  correctiveActionCode?: string;
  currentPnCode?: string;
  flCode?: string;
  flFunction?: string;
  flText?: string;
  flIsOpeConf?: boolean;
  isRequested?: boolean;
  isSelected?: boolean;
  relatedEquipmentText?: string;
  relatedEquipmentTooltip?: string;
  selectedCheckBoxVisible?: string;
  suggestedIssueText?: string;
  suggestedIssueVisible?: boolean;
  suggestedReceiptText?: string;
  suggestedReceiptVisible?: boolean;
  wpNumber?: number;
  pnCandidateList?: BirePnDTO[];
  subFlList?: LineMaintenanceRoleEquipmentOmeDTO[];
}
