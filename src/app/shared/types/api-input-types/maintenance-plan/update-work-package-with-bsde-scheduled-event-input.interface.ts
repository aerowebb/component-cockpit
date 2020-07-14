import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BsdeScheduledEventDTO } from '../../api-types/bsde-scheduled-event-dto.interface';

export interface UpdateWorkPackageWithBsdeScheduledEventInput {
  maintenanceForecastingProjectId: string;

  bidmProject: BidmProjectDTO;
  bidoEquipment: BidoEquipmentDTO;
  bsdeEvent: BsdeScheduledEventDTO;
}
