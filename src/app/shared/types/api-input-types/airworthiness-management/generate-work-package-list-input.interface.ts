import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';

export interface GenerateWorkPackageListInput {
  topEquipmentCode: string;
  targetDate?: Date;
  bidmProjectIdJustCreated?: BidmProjectDTOId;
  selectedElementIdList?: number[];
}
