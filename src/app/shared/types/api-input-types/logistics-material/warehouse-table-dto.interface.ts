import { BidtStorageBinDTO } from '../../api-types/bidt-storage-bin-dto.interface';

export interface WareHouseTableDTO {
  bidtSiteId?: number;
  wareHouseId?: number;
  whPrLowThreshold?: number;
  whPrHighThreshold?: number;
  wHName?: string;
  siteName?: string;
  // Only used for row uniqueness
  dataId?: number;
  bidtStorageBinDTOList?: BidtStorageBinDTO[];
  storageBins?: string;
}
