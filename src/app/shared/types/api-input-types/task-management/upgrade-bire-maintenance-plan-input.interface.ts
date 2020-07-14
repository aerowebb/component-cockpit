import { BireMaintenancePlanDTOId } from '../../api-types/bire-maintenance-plan-dto-id.interface';

export interface UpgradeBireMaintenancePlanInput {
  bireMaintenancePlanDTOId?: BireMaintenancePlanDTOId;
  targetRevisionNumber?: string;
  currentRevisionNumber?: string;
  planCode?: string;
}
