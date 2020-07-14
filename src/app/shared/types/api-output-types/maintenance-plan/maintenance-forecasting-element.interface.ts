import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../api-types/bido-mission-equipment-dto.interface';

import { MaintenanceForecastingDefect } from './maintenance-forecasting-defect.interface';
import { MaintenanceForecastingScheduledEvent } from './maintenance-forecasting-scheduled-event.interface';
import { MaintenanceForecastingUnscheduledEvent } from './maintenance-forecasting-unscheduled-event.interface';
import { MaintenanceForecastingWorkPackage } from './maintenance-forecasting-work-package.interface';

export interface MaintenanceForecastingElement {
  equipment: BidoEquipmentDTO;
  equipmentDescription: string;
  flDescription: string;
  defects: MaintenanceForecastingDefect[];
  llpAlerts: MaintenanceForecastingScheduledEvent[];
  missionEquipments: BidoMissionEquipmentDTO[];
  scheduledEvents: MaintenanceForecastingScheduledEvent[];
  snChanges: MaintenanceForecastingUnscheduledEvent[];
  unscheduledEvents: MaintenanceForecastingUnscheduledEvent[];
  workPackages: MaintenanceForecastingWorkPackage[];
  children: MaintenanceForecastingElement[];
}
