import { CalendarEvent } from './calendar-event.interface';

export interface CalendarMaintenanceEvent extends CalendarEvent {
  name: string;
  color: string;
  icon: string;
}
