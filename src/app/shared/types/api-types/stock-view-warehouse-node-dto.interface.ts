import { BidtWarehouseDTO } from './bidt-warehouse-dto.interface';
import { StockInformationDTO } from './stock-information-dto-interface';
import { StockViewZoneNodeDTO } from './stock-view-zone-node-dto.interface';

export interface StockViewWarehouseNodeDTO {
  warehouse: BidtWarehouseDTO;
  stockInformation: StockInformationDTO[];
  zoneNodes: StockViewZoneNodeDTO[];
}
