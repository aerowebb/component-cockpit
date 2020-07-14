import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface UpdateWorkPackageWithDeferredDefectEventInput {
  maintenanceForecastingProjectId: string;

  bidmProject: BidmProjectDTO;
  bidoEquipment: BidoEquipmentDTO;
  notificationCode: string;
  nteDate: Date;
}
