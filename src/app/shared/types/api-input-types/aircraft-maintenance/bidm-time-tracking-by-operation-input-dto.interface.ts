import { BidmOperationDTO } from '../../api-types/bidm-operation-dto.interface';

export interface BidmTimeTrackingByOperationInputDTO {
  bidmOperationDTO?: BidmOperationDTO;
  projectId: string;
  woId: string;
  opeCode?: string;
  opeVersion?: string;
}
