import { BidoMissionEquipmentDTO } from '../../../../shared/types/api-types/bido-mission-equipment-dto.interface';

import { CalendarEvent } from './calendar-event.interface';

export interface CalendarFlight extends CalendarEvent {
  obj: BidoMissionEquipmentDTO;
}
