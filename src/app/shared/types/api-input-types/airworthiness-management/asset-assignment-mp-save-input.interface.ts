import { MaintenancePlanDTO } from '../../api-types/maintenance-plan-dto.interface';

export interface AssetAssignmentMPSaveInput {
  maintenancePlanDTOsAssignedList?: MaintenancePlanDTO[];
  maintenancePlanDTOsUnAssignedList?: MaintenancePlanDTO[];
  planCode?: string;
  isAssigned?: boolean;
}
