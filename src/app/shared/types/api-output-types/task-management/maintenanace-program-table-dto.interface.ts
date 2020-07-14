import { BireMaintenancePlanDTO } from '../../api-types/bire-maintenance-plan-dto.interface';

export interface MaintenanaceProgramTableDTO {
  bireMaintenancePlanDTO?: BireMaintenancePlanDTO;
  ampstatus?: string;
  isRMPHaveRelatedOMP?: boolean;
  isAMPHaveRelatedOMP?: boolean;
  applicableMaintenancePlanCode?: string;
  planType?: string;
  recommendedMaintenancePlanCode?: string;
}
