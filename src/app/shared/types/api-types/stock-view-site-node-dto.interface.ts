import { BidtSiteDTO } from './bidt-site-dto.interface';
import { StockInformationDTO } from './stock-information-dto-interface';
import { StockViewWarehouseNodeDTO } from './stock-view-warehouse-node-dto.interface';

export interface StockViewSiteNodeDTO {
  site: BidtSiteDTO;
  stockInformation: StockInformationDTO[];
  warehouseNodes: StockViewWarehouseNodeDTO[];
}
