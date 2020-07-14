export interface StockConsultInput {
  pn?: string;
  withItsAlternatives?: boolean;
  siteId?: number;
  warehouseId?: number;
  storageBinId?: number;
  warehouseTypeId?: string;
  stockTypeId?: number;
  valuationGroupId?: number;
  issuePeriod?: string;
}
