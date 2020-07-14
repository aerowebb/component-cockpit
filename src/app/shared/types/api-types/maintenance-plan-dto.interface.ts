import { ADSBStatusDTO } from './adsb-status-dto.interface';
import { BireMaintenancePlanDTO } from './bire-maintenance-plan-dto.interface';
import { MaintenanceProgramDTO } from './maintenance-program-dto.interface';

export interface MaintenancePlanDTO {
  equipmentCode?: string;
  eisDate?: Date;
  manufacturingDate?: Date;
  adSbStatus?: ADSBStatusDTO;
  // lifeLimitedPartStatus?: LifeLimitedPartStatusDTO;
  maintenanceProgram?: MaintenanceProgramDTO;
  lastMaintenanceProgram?: BireMaintenancePlanDTO;
  // maintenancePlanVisitList?: MaintenancePlanVisitDTO[];
  // maintenancePlanTaskList?: MaintenancePlanTaskDTO[];
  maintenancePlanId?: string;
  planCode?: string;
  customizationStatus?: string;
}
