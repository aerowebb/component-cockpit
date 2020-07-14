import { BidtStorageBinDTO } from './bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';

export interface SaveWarehouseInput {
  bidtWarehouseDTO?: BidtWarehouseDTO;
  bidtStorageBinDTO?: BidtStorageBinDTO[];
  deletedStorageBinIdList?: number[];
}
