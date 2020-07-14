import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';

export interface FindDefectTargetWorkOrderInput {
  equipmentCode?: string;
  notificationCode: string;
  defectTargetWorkPackageDTO: BidmProjectDTO;
}
