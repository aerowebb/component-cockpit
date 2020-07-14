import { BidtControlDTO } from './bidt-control-dto.interface';

export interface BidtControlGroupDTO {
  bidtControlDataList?: BidtControlDTO[];
  bidtFuncObjectId?: number;
  name?: string;
  description?: string;
}
