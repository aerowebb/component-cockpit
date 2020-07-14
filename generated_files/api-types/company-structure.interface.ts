import {BidtCompanyDTO} from './bidt-company-dto.interface';
import {BidtSiteDTO} from './bidt-site-dto.interface';
import {BidtWorkCenterDTO} from './bidt-work-center-dto.interface';
import {BidtWarehouseDTO} from './bidt-warehouse-dto.interface';
import {BidtStorageBin} from './bidt-storage-dto.interface';
import {BidtStockTypeDTO} from './bidt-stock-type-dto.interface';
import {BidtStockMvtDTO} from './bidt-stock-mvt-dto.interface';


export interface CompanyStructure {
 	companyList?: BidtCompanyDTO[];
	siteList?: BidtSiteDTO[];
	workCenterList?: BidtWorkCenterDTO[];
	warehouseList?: BidtWarehouseDTO[];
	storageBinList?: BidtStorageBin[];
	stockTypeList?: BidtStockTypeDTO[];
	valuationGroupList?: BidtValuationGroupDTO[];
	filteredObjects?: any[];
	movementPerStorageBin?: Map<number, BidtStockMvtDTO[]>;
}