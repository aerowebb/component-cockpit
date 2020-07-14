import { BidoEquipmentDTO } from '../api-types/bido-equipment-dto.interface';
import { BireSbDTO } from '../api-types/bire-sb-dto.interface';
import { BireTaskDTOId } from '../api-types/bire-task-dto-id.interface';
import { DeferredDefectEventDTO } from '../api-types/deferred-defect-event-dto.interface';
import { LLPAlertDTO } from '../api-types/llp-alert-dto.interface';
import { MaintenancePlanTask } from '../api-types/maintenance-plan-task.interface';

export interface UpcomingEventDTO {
  eventDescription?: string; // name
  remainingTime?: string;
  remainingEquivalentPotential?: string;
  remainingEquivalentIcon?: string;
  checkResultIcon?: string;
  checkResultTooltip?: string;
  type?: number;
  typeString?: string;
  designation?: string;
  code?: string;
  bidoEquipmentDTO: BidoEquipmentDTO;
  maintenancePlanTaskDTO: MaintenancePlanTask;
  anLLPAlertDTO: LLPAlertDTO;
  bireSbDTO: BireSbDTO;
  deferredDefectEventDTO: DeferredDefectEventDTO;
  bireTaskDTOId: BireTaskDTOId;
  rowId?: number;
  control?: string;
  _expand?: boolean | false;
}
