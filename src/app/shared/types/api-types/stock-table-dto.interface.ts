export interface StockTableDto {
  stockMvtWay?: string;
  mvtStatus?: string;
  stockMvtDate?: string;
  stockMvtBatchNumber?: string;
  site?: string;
  warehouse?: string;
  bin?: string;
  stockType?: string;
  valuation?: string;
  document?: string;
  code?: string;
  _expand?: boolean;
  projectId?: string;
  woId?: string;
}
