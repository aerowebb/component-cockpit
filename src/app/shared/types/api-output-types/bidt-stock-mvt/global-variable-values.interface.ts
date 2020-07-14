import { SearchInputStockValuation } from '../../api-input-types/bidt-stock-mvt/search-input-stock-valuation.interface';
import { StockSheetTable } from '../../api-types/stock-sheet-table.interface';

export interface GlobalVariableValues {
  resultCumpReceiptAmount?: number;
  resultCumpReceiptQuantity?: number;
  resultCumpIssueQuantity?: number;
  resultCumpIssueAmount?: number;
  resultCumpStockQuantity?: number;
  resultCumpStockValue?: number;
  resultCumpStockAmount?: number;

  searchInputStockValuation?: SearchInputStockValuation;

  stockSheetTableList?: StockSheetTable[];
}
