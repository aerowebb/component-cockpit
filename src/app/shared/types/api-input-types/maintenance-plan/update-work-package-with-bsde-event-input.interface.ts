import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BsdeEventDTO } from '../../api-types/bsde-event-dto.interface';

export interface UpdateWorkPackageWithBsdeEventInput {
  maintenanceForecastingProjectId: string;

  bidmProject: BidmProjectDTO;
  bidoEquipment: BidoEquipmentDTO;
  bsdeEvent: BsdeEventDTO;
}
