import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';

export interface AddToWorkPackageInput {
  topEquipmentCode: string;
  bidmProject: BidmProjectDTO;
  selectedElementIdList: number[];
}
