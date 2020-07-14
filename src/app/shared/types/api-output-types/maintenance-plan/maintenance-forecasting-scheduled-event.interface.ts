import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';
import { BsdeScheduledEventDTO } from '../../api-types/bsde-scheduled-event-dto.interface';

export interface MaintenanceForecastingScheduledEvent {
  bireTask: BireTaskDTO;
  bsdeScheduledEvent: BsdeScheduledEventDTO;
  affectedWorkPackage?: BidmProjectDTO;
}
