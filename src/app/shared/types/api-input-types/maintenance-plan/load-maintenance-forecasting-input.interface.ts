import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface LoadMaintenanceForecastingInput {
  maintenanceForecastingProjectId: string;

  bsdeProjectDTO: BsdeProjectDTO;
  maintenancePlanEndDate: Date;
  maintenancePlanOccurrence?: number;
  maintenancePlanStartDate?: Date;
  maintenancePlanTimeScale: string;
  showSNChanges: boolean;
  showDeferredDefects: boolean;
  showScheduledEvents: boolean;
  showNonRoutineEvents: boolean;
  showOnlyColumnsWithContent: boolean;
  urlPNCode?: string;
  urlSNCode?: string;
  withIwbEvents: boolean;
  withLlpAlerts: boolean;
}
