import { BidtCompanyDTO } from './bidt-company-dto.interface';
import { BidtSiteDTO } from './bidt-site-dto.interface';
import { BidtStockTypeDTO } from './bidt-stock-type-dto.interface';
import { BidtStorageBinDTO } from './bidt-storage-bin-dto.interface';
import { BidtValuationGroupDTO } from './bidt-valuation-group-dto.interface';
import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';
import { BidtWorkCenterDTO } from './bidt-work-center-dto.interface';

export interface CompanyStructureDTO {
  companyList?: BidtCompanyDTO[];
  siteList?: BidtSiteDTO[];
  workCenterList?: BidtWorkCenterDTO[];
  warehouseList?: BidtWarehouseDTO[];
  storageBinList?: BidtStorageBinDTO[];
  stockTypeList?: BidtStockTypeDTO[];
  valuationGroupList?: BidtValuationGroupDTO[];
}
