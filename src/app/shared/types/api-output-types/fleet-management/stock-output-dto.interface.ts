import { StockTableDto } from '../../api-types/stock-table-dto.interface';

export interface StockOutputDto {
  company?: string;
  site?: string;
  workCenter?: string;
  warehouse?: string;
  storageBin?: string;
  batchNumber?: string;
  type?: string;
  status?: string;
  valuationGroup?: string;
  stockTableDtos?: StockTableDto[];
}
