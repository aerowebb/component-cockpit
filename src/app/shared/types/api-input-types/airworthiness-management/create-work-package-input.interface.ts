import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';

export interface CreateWorkPackageInput {
  topEquipmentCode: string;
  bidmProject: BidmProjectDTO;
  selectedElementIdList: string[];
  workCenter: number;
}
