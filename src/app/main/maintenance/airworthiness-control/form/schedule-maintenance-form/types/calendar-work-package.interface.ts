import * as moment from 'moment';

import { BidmProjectDTO } from '../../../../../../shared/types/api-types/bidm-project-dto.interface';

import { CalendarEvent } from './calendar-event.interface';
import { CalendarMaintenanceEvent } from './calendar-maintenance-event.interface';

export interface CalendarWorkPackage extends CalendarEvent {
  obj: BidmProjectDTO;
  isScheduled: boolean;
  isSimulated: boolean;
  name: string;
  startDate: moment.Moment;
  totalDuration: number;
  weekDuration: number;
  maintenanceEvents: CalendarMaintenanceEvent[];
}
