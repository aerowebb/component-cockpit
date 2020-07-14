import { BidtStorageBinDTO } from './bidt-storage-bin-dto.interface';

export interface BidtWarehouseDTO {
  bidtCompanyId?: number;
  bidtSiteId?: number;
  whCode?: string;
  whName?: string;
  whType?: string;
  whAdress?: string;
  whZipCode?: string;
  whCountry?: string;
  whPhoneNumber?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  wareHouseId?: number;
  bidtWarehouseId?: number;
  whCategory?: string;
  bidtStorageBinDTOs?: BidtStorageBinDTO[];
}
