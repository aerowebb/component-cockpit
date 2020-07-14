export interface StockStatusInput {
  pnCode?: string;
  stockOwnerCode?: string;
  warehouseId?: number;
  siteId?: number;
  startDate: Date;
  endDate: Date;
  withAlternatives?: boolean;
}
