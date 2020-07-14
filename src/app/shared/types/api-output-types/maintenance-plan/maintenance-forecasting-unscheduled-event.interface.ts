import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';
import { BsdeEventDTO } from '../../api-types/bsde-event-dto.interface';

export interface MaintenanceForecastingUnscheduledEvent {
  bireTask: BireTaskDTO;
  bsdeEvent: BsdeEventDTO;
  affectedWorkPackage?: BidmProjectDTO;
}
